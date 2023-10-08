import Image from "next/image";
import {FaPlus} from "react-icons/fa";
import {fetchMovieApi} from "@/services/movie-api";



async function MovieDetail({params}) {
    const movieDetail = await fetchMovieApi(`/movie/${params.id}`)

    return <section className={"w-full h-screen flex flex-col justify-center gap-12"}>
        <Image
            className={"-z-10"}
            src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
            alt={movieDetail.title} fill unoptimized/>

        <h1 className={"text-7xl uppercase font-black leading-10 max-w-[25ch]"} >{movieDetail.title}</h1 >
        <p className={"text-2xl max-w-[50ch]"} >{movieDetail.overview}</p >
        <ActionButtons />
    </section>
}

const ActionButtons = ({playOnClick, addOnClick}) => {
    return <div className={"flex items-center justify-start gap-2"} >
        <button
            onClick={playOnClick}
            className={"flex items-center justify-center border-2 rounded-full w-72 h-16 bg-white text-black text-xl font-bold"} >
            Play
        </button >

        <button
            onClick={addOnClick}
            className={"flex items-center justify-center border-2 rounded-full w-16 h-16 text-white text-xl font-bold"} >
            <FaPlus />
        </button >
    </div >
}

export default MovieDetail