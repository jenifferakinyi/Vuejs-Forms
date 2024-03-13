const  mongoose  = require('mongoose');
const User = require('../model/userModel');
const {authSchema}= require ("../auth.js/auth_Schema");
const createError = require('http-errors');
const {signAccessToken, signRefreshToken, verifyRefreshToken} = require('../helpers/jwtHelper');


module.exports = {
AddUser: async (req, res, next) => {
    try {
        const {email, password}= req.body;
        const result = await authSchema.validateAsync(req.body);
   
        const Exists = await User.findOne({email: email})
        if(Exists) throw createError.Conflict(`email ${email} is already taken`)
        const user = new User(result);
   
        const savedUser = await user.save();
        const accessToken = await signAccessToken(savedUser.id)
        
   
        res.send({accessToken ,});
    }catch(error){
       if(error.isJoi === true)error.status = 422
       next(error)
    }   
    }
}