import { Router } from 'express';
import posts from './posts.js';

const routes = Router();

routes.use('/posts', posts);

export default routes;
