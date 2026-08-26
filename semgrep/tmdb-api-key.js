// ruleid: movie-app-hardcoded-tmdb-api-key
const key = '&api_key=abc123456';

// ok: movie-app-hardcoded-tmdb-api-key
const key = process.env.TMDB_API_KEY;
