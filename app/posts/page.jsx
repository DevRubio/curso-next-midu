const fetchPosts = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
}

export default async function PostsPage(){
    const posts = await fetchPosts()
    return(
        <section>
            {posts.slice(0,5).map(post =>(
                <article key={post.id}>
                    <h2 className="font-semibold mb-2">{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )
}