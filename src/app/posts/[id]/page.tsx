import { PostProps } from "../page";

export default async function DetailPost({
    params
}: {
    params: Promise<{ id: string}>
}) {

    const {id} = await params;
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data: PostProps = await response.json()

    return(
        <div>
            <h1 className="font-bold text-3xl text-center">Detalhes do post {id}</h1>
            <div className="bg-gray-200 p-4 rounded-md">
                <h2 className="font-bold"> {data.title} </h2>
                <p> {data.body} </p>
            </div>
        </div>
    )
   
}