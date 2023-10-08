import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const api_url = "https://api.themoviedb.org/3"

const fetchMovieApi = async (path,query="") => {
    try {
        const response = await fetch(`${api_url}${path}?api_key=aa9a6bbcdf70f51b531bd947d6b26c00&${query}`)
        return response.json()
    }
    catch (e) {
        throw new Error(e)
    }
}

export {fetchMovieApi}

