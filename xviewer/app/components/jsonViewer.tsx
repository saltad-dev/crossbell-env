"use client";
import dynamic from "next/dynamic";
import React from "react";

const ReactJson = dynamic(() => import("react-json-view"), {
    ssr: false,
});

export default function JsonViewer({ props }: { props: object }) {
    const [initialRenderComplete, setInitialRenderComplete] =
        React.useState(false);
    // This useEffect will only run once, during the first render
    React.useEffect(() => {
        // Updating a state causes a re-render
        setInitialRenderComplete(true);
    }, []);
    // initialRenderComplete will be false on the first render and true on all following renders
    if (!initialRenderComplete) {
        // Returning null will prevent the component from rendering, so the content will simply be missing from
        // the server HTML and also wont render during the first client-side render.
        return null;
    }

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
