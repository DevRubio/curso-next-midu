const fetchPosts = ()=>{
    return fetch(process.env.URL)
        .then(res => res.json())
}

export default async function PostsPage(){
    const posts = await fetchPosts()
    return(
        <section>
            {posts.map(post =>(
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )
}