const searchMovies = async (req, res, next) => {
    try {
        const { query, page = 1 } = req.query

        if (!query) {
            return res.status(400).json({ error: "Movie name is required" })
        }

        const url = new URL('https://api.themoviedb.org/3/search/movie')
        url.searchParams.set('query', query)
        url.searchParams.set('language', 'en-US')
        url.searchParams.set('page', page)
        url.searchParams.set('api_key', process.env.TMDB_API_KEY)

        const response = await fetch(url)

        if (!response.ok) {
            return res.status(response.status).json({
                error: 'TMDB request failed'
            })
        }

        const data = await response.json()
        return res.status(200).json(data)
    } catch (error) {
        return next(error)
    }
}

export { searchMovies }
