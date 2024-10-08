import Post from "../models/Post.mjs";

const getAllPosts = async (req, res) => {
    const posts = await Post.find({});
    res.send(posts);
}

const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.send(post);
    }
    catch (error) {
        res.status(400).send(error);
    } 
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.send(post);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);
        res.send(post);
    }
    catch (error) {
        res.status(400).send(error);
    }
}


const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.send(post);
    }
    catch (error) {
        res.status(400).send(error);
    }
}


export default { getAllPosts, createPost, deletePost, updatePost, getPost };