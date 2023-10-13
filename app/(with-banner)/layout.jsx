import { Counter } from "./posts/Counter";

export default function PostLayout({children}){
    return(
        <div>
            <marquee>Curso NextJs</marquee>
            {children}
        </div>
    )
}