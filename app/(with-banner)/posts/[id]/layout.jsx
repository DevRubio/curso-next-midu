import Link from "next/link"

const fetchSinglePosts = (id)=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        cache: 'no-store'
    })
    .then(res => res.json())
}

export default async function Post({children, params}){
    const {id} = params
    const post = await fetchSinglePosts(id)
    return(
       <article>
            <h1 className="font-semibold">{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/coments`} className="cursor-pointer text-blue-600 mr-2 hover:underline">Ver comentarios </Link>
            <Link href={`/posts/${id}`} className="cursor-pointer text-gray-600 hover:underline">Ocultar comentarios</Link>
            {children}
       </article>
    )
}