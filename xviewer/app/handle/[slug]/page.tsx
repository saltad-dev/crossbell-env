import Data from "@/app/components/data";

export default async function Page({ params }: { params: { slug: string } }) {
    return <div>{Data(params.slug)}</div>;
}
