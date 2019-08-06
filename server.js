const express = require('express');
const {User} = require('./database/sequalize');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const databaseConfig = require('./config/database');
// const todoRoutes = require('./routes/api/todos');
// const userRoutes = require("./routes/api/users");



const PORT = 4000;
app.use(cors());
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());
// app.use(passport.initialize());
// require('./config/passport')(passport);
// app.use('/todos', todoRoutes);
// app.use('/api/users', userRoutes);
const record = {
    username: 'belal',
    email: 'test@hotmail',
    password: '1234567',

}
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
