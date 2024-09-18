import express from 'express';
import PostController from '../controllers/PostController.mjs';
const postRouter = express.Router();

postRouter.get('/', PostController.getAllPosts);
postRouter.post('/', PostController.createPost);
postRouter.delete('/:id', PostController.deletePost);
postRouter.put('/:id', PostController.updatePost);
postRouter.get('/:id', PostController.getPost);

export default postRouter;