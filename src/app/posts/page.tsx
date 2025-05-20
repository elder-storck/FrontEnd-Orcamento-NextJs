import Link from "next/link";

export interface PostProps{
    id: number;
    title: string;
    body: string;
    userId: number;
}
interface ResponseProps{
    posts: PostProps[]
}

export default async function PostsPage(){

    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json()
    
    async function handleSeacherUsers(formData: FormData){
        'use server'
        const userID = formData.get('userId')

        const response = await fetch(`https://dummyjson.com/posts/user/${userID}`)
        const data: ResponseProps = await response.json()
        
        console.log(data)
    }



    
    return(
        <div>
            <h1 className="text-center mt-5 font-bold text-3xl">Todos os Posts</h1>

            <form className="frex gap-2 my-4" action={handleSeacherUsers}>
                <input type="text" placeholder="ID usuário" className="border border-gray-200 p-2" name="userId"/>
                <button type="submit" className="bg-blue-500 text-white p-2">buscar USers</button>
            </form>


            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map(post => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                        <Link className="text-blue-500" href={`/posts/${post.id}`}>Mais Detalhes</Link>
                    </div>
                ))}
            </div>

        </div>
    )
}