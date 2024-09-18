import express from 'express';
import PostController from '../controllers/PostController.mjs';
const postRouter = express.Router();

postRouter.get('/', PostController.getAllPosts);
postRouter.post('/', PostController.createPost);
postRouter.delete('/:id', PostController.deletePost);

export default postRouter;