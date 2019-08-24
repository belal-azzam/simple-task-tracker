const JwtStartegy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {User} = require('../database/sequalize');

const jwtConfig = require('./jwt');
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = jwtConfig.secret;

module.exports = passport  => {
    passport.use(
        new JwtStartegy(opts, (jwtPayload, done) => {
            User.findByPk(jwtPayload.id)
                .then(user => {
                    if(user)  {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => {
                    console.log(err);
                });
        })
    );
}