const { ExtractJwt } = require('passport-jwt');

const jwtOtions = {};

jwtOtions.secretOrKey = 'mySecret007';
jwtOtions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = jwtOtions;
