import Link from "next/link";
import Image from "next/image";

function MovieSection({title = "", movieList = []}) {
    return <section className={"py-8 mt-10"} >
        <h2 className={"uppercase text-2xl font-bold"} >{title}</h2 >
        <ul className={" w-full flex gap-10 items-center justify-between overflow-x-scroll py-4"} >
            {
                movieList.map((movie) =>
                    <li key={movie.id} >
                        <MovieCard
                            id={movie.id}
                            title={movie.title}
                            imageSrc={movie.poster_path}
                        />
                    </li >
                )
            }
        </ul >
    </section >
}


const MovieCard = ({imageSrc = "", title, id}) => {
    return <div className={" group h-80 w-48 border-2 rounded-md duration-300 hover:z-10 overflow-clip"} >
        <Link
            href={`/movie_detail/${id}`} >
            <div className={"relative h-full w-full"} >
                <Image
                    className={"absolute top-0 group-hover:scale-125 duration-300 object-fill"}
                    src={`https://image.tmdb.org/t/p/original${imageSrc}`}
                    alt={title}
                    fill
                    unoptimized
                />
            </div >
        </Link >
    </div >
}


export default MovieSection