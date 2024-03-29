const express = require('express');
const {User} = require('./database/sequalize');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const routes = require('./routes')
const path = require('path');


const PORT = 4000;
app.use(cors());
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);
const record = {
    username: 'belal',
    email: 'test@hotmail',
    password: '1234567',

}
routes.init(app);
app.use(express.static(path.join(__dirname, 'client')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
})
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
