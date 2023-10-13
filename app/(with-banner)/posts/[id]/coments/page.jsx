
import Image from "next/image"
const fetchComents = async (id)=>{
    await new Promise(resolve => setTimeout(resolve, 3000))
    //throw new Error("Error al cargar los comentarios")
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        next:{
            revalidate: 60
        }
    })
    .then(res => res.json())
}

export default async function Post({params}){
    const {id} = params
    const coments = await fetchComents(id)
    return(     
      
            <ul className="m-5 bg-slate-100">
                {coments.map(coment=>(
                    <li key={coment.id}>
                        <Image width={50} height={50} alt={coment.name} src={`https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg`} />
                        <h2 className="font-semibold">{coment.name}</h2>
                        <p>{coment.body}</p>
                    </li>
                ))}
            </ul>

    )
}