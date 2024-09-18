import User from "../models/User.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
}


const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) return res.status(400).send('User not found');

        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) return res.status(400).send('Invalid password');

        const token = jwt.sign({
            userId: user._id,
        },
            'secret123',
            { expiresIn: '1d' }
        )

        res.send({user, token});
    }
    catch (error) {
        res.status(400).send(error);
    }
}


const getAuthUser = async (req, res) => { 
    try {
        const user = await User.findById(req.user.userId);
        res.send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

export default { register, login, getAuthUser };