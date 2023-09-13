import { Character, Note, createContract } from "crossbell.js";
import { crossbell } from "crossbell.js/network";

if (
  process.env.CROSSBELL_RPC_ADDRESS === "http://127.0.0.1:8545" ||
  process.env.CROSSBELL_RPC_ADDRESS === "http://xnode:8545"
) {
  (crossbell.id as any) = 31337;
}

export async function getData(handleOrId: string | number) {
  const c = createContract();
  let character: Character;
  if (typeof handleOrId === "string") {
    const { data } = await c.character.getByHandle(handleOrId);
    character = data;
  } else {
    const { data } = await c.character.get(handleOrId);
    character = data;
  }
  const noteCount = character.noteCount;
  const pageSize = Math.min(10, Number(noteCount));
  const notes = [];
  for (let i = 1; i <= pageSize; i++) {
    const { data: note } = await c.note.get(character.characterId, i);
    notes.push(note);
  }
  return { character, notes };
}

export async function getNote(characterId: number, noteId: number) {
  const c = createContract();
  const note = await c.note.get(characterId, noteId);
  return note;
}

export const stringify = (data: Character | Note<any>) => {
  return JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
};

export const parse = (data: Character | Note<any>) => {
  return JSON.parse(stringify(data));
};
