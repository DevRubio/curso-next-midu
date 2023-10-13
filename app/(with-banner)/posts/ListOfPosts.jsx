import Link from "next/link"
import { LikeButton } from "./LikeButton"
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
const fetchPosts = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store', //no guardar en cache los datos, que sea server side rendering
        next: {
            revalidate: 60 //para que cada 60 segundos consulte los datos
        }
    })
        .then(res => res.json())
}

export default async function ListOfPosts(){
    const posts = await fetchPosts()
    return posts.slice(0,5).map(post =>(
                <article key={post.id}>
                    <Link href='/post/[id]' as={`/posts/${post.id}`}>
                    <h2 className="font-semibold mb-2 text-blue-700">{post.title}</h2>
                    <p>{post.body}</p>
                    <LikeButton id={post.id}/>
                    </Link>
                </article>
            ))
}