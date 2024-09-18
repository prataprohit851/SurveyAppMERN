const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleSecretID,
        callbackURL: '/auth/google/callback'
    }, ()=>{

})
);

passport.authenticate('google', ()=>{

});

app.get('/', (req, res)=>{
    res.send({IN:'Homepage'});
});

app.listen(5000);