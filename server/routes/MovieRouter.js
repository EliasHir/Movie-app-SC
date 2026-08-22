import { Router } from 'express';
import { searchMovies } from '../controllers/MovieController.js';

const router = new Router()

router.get('/search', searchMovies)

export default router
