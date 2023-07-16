import { getData, parse } from "../utils";
import JsonViewer from "./jsonViewer";

export default async function Data(handleOrId: string | number) {
    const { character, notes } = await getData(handleOrId);
    return (
        <div>
            <JsonViewer
                key={character.characterId.toString()}
                props={parse(character)}
            ></JsonViewer>
            {notes.map((note) => (
                <JsonViewer
                    key={
                        character.characterId.toString() +
                        "-" +
                        note.noteId.toString()
                    }
                    props={parse(note)}
                ></JsonViewer>
            ))}
        </div>
    );
}
