import {fetchMovieApi} from "@/services/movie-api";
import Banner from "@/components/home/banner";
import MovieSection from "@/components/movie_section";


export default async function Home(
    {
        playOnClick,
        addOnClick
    }
) {
    const topRatedPromise = await fetchMovieApi("/movie/top_rated")
    const popularPromise = await fetchMovieApi("/movie/popular")
    const genresPromise = await fetchMovieApi("/genre/movie/list")
    const [{results: topRated}, {results: popular}, {genres: categoryList}] =
        await Promise.all([topRatedPromise, popularPromise, genresPromise])
    const bannerFilm = popular[0]

    return <main >
        <Banner
            title={bannerFilm.title}
            overview={bannerFilm.overview}
            imageSrc={bannerFilm.poster_path}
            categoryList={categoryList}
            playOnClick={playOnClick}
            addOnClick={addOnClick}
        />

        <MovieSection title={"Popular Movies"} movieList={popular} />
        <MovieSection title={"Top Rated"} movieList={topRated} />
    </main >
}




