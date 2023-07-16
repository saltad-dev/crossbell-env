export default function Home() {
    return (
        <main className="p-10">
            <div className="p-5">
                <div>route /id/:characterId</div>
                <div>
                    <a href="./id/45">➡️ id-45</a>
                </div>
            </div>
            <div className="p-5">
                <div>route /id/:characterId/note/:noteId </div>
                <div>
                    <a href="./id/45/note/11">➡️ id-45-note-11</a>
                </div>
            </div>
            <div className="p-5">
                <div>route /handle/:handleId </div>
                <div>
                    <a href="./handle/atlas">➡️ handle-atlas</a>
                </div>
            </div>
        </main>
    );
}
