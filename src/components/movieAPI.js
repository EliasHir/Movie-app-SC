import axios from 'axios';

const getMovieByName = async (name, genreIds, Page) => {
    try {
        console.log(genreIds)
        console.log(Page)

        const response = await axios.get(
            'http://localhost:3001/movies/search',
            {
                params: {
                    query: name,
                    page: Page
                }
            }
        )

        let movies = response.data.results
        const totalPages = response.data.total_pages

        if (genreIds.length > 0) {
            movies = movies.filter(movie => {
                const flatIds = movie.genre_ids.flat();

                if (movie.genre_ids.length === 0) {
                    return false;
                }

                return flatIds.some(genreId => genreIds.includes(genreId))
            });
        }

        return JSON.stringify({
            movies: movies.sort((a, b) => b.popularity - a.popularity),
            total_pages: totalPages
        })
    }
    catch(error) {
        throw error
    }
}

export { getMovieByName }