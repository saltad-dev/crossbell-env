import NoteViewer from "@/app/components/note";
import { getNote } from "@/app/utils";

export default async function Page({
    params,
}: {
    params: { slug: string; noteId: string };
}) {
    const { data: note } = await getNote(+params.slug, +params.noteId);
    return <div>{NoteViewer(note)}</div>;
}
