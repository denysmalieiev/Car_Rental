import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// JWT Token creation
const authToken = {

    signToken: function(id){
        return jwt.sign({id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })
    },
    sendToken: function(user, statusCode, res){
        // 1) Token Generation
        const token = this.signToken(user._id);
        
        // 2) Options for cookie
        const options = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }
        
        // 3) Cookie seting in response
        res.cookie('token', token, options);
        console.log(token)
        // 4) Sending response
        return res.status(statusCode).json({
            success: true,
            token
        }) 
    },

    isUserAuthenticated: async function(req, res, next){
        const {token} = req.cookies;

        // 1) Checking if cookie
        if(!token){
            return res.status(401).send(`Please login again.`)
        }

        // 2) Decoding user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 3) Setting User
        req.user = await User.findById(decoded.id);

        // 5) Calling next
        next();
    }
}
export default authToken;