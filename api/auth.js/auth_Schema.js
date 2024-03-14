const Joi = require('joi');

const authSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }) // Ensure a valid email format
    .lowercase()
    .required(),
    password: Joi.string().min(8).required(),
});

module.exports ={authSchema};
