export default function Post({params}){
    const {id} = params
    return(
        <p>Esto es un post {id}</p>
    )
}