import { Note } from "crossbell.js/index";
import { parse } from "../utils";
import JsonViewer from "./jsonViewer";

export default function NoteViewer(note: Note<any>) {
    return <JsonViewer props={parse(note)}></JsonViewer>;
}
