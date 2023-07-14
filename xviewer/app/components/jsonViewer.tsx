"use client";
import ReactJson from "react-json-view";
export default function JsonViewer({ props }: { props: object }) {
    return (
        <div>
            <ReactJson
                src={props}
                theme={"monokai"}
                // onEdit={(edit) => {}}
                // TODO: use onEdit, or use a json editor, e.g https://levelup.gitconnected.com/simplest-way-to-add-json-editor-to-nextjs-application-6baa71b5b4dd
            ></ReactJson>
        </div>
    );
}
