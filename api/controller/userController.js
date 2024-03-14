const  mongoose  = require('mongoose');
const User = require('../model/userModel');
const {authSchema}= require ("../auth.js/auth_Schema");
const createError = require('http-errors');
const {signAccessToken, signRefreshToken, verifyRefreshToken} = require('../helpers/jwtHelper');


module.exports = {
AddUser: async (req, res, next) => {
    try {
        const {username, email, password}= req.body;
        const result = await authSchema.validateAsync(req.body);
   
        const Exists = await User.findOne({email: email})
        if(Exists) throw createError.Conflict(`email ${email} is already taken`);

        const ExistsUsername = await User.findOne({username: username})
        if(ExistsUsername) throw createError.Conflict(`username ${username} is already taken`);
        const user = new User(result);
   
        const savedUser = await user.save();
        const accessToken = await signAccessToken(savedUser.id)
        
   
        res.send({accessToken ,});
    }catch(error){
       if(error.isJoi === true)error.status = 422
       next(error)
    }   
    },
    Login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            
            // Check if user with provided email exists
            const user = await User.findOne({ email });
            if (!user) {
                throw createError.NotFound('User not registered');
            }
    
            // Validate password
            const isMatch = await user.isValidPassword(password);
            if (!isMatch) {
                throw createError.Unauthorized('Email/password is not valid');
            }
    
            // Generate and send tokens
            const accessToken = await signAccessToken(user.id);
            const refreshToken = await signRefreshToken(user.id);
            res.send({ accessToken, refreshToken });
        } catch (error) {
            console.error('Login error:', error);
            if (error.isJoi === true) {
                return next(createError.BadRequest('Invalid email/password'));
            }
            next(error);
        }
    },
      refreshToken:async(req, res, next)=>{
        try {
          const {refreshToken} = req.body;
          if(!refreshToken) throw createError.BadRequest();
          const UserId = await verifyRefreshToken(refreshToken);
          const accessToken = await signAccessToken(UserId);
          const refToken = await signRefreshToken(UserId);
          res.send({accessToken, refreshToken : refToken});
        } catch (error) {
          next(error);
        }
      }
}