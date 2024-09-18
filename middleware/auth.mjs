import jwt from 'jsonwebtoken';
const auth = (req, res, next) => {
    try { 
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'secret123');
        req.user = decoded;
        //console.log(req.user);
        
        next();
    }
    catch (error) { 
        res.status(400).send('Invalid token');
    }
}

export default auth;