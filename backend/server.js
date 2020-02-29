let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Connecting to mongoDB
mongoose.Promise - global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true 
}).then(() => {
        console.log('Database connected successfully!');
    }, 
    error => {
        console.log('Could not connect to db: ' + error);
        
    }
)

// Setting up port with express
const taskRoute = require('../backend/routes/task.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/mean-stack-todo-app')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-todo-app')));
app.use('/api', taskRoute);

// Creating port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log('Connected to the port: ' + port);
})

// Finding a 404 and handing over to the error handler
app.use((err, req, res, next) => {
    console.error(err.message);
    // If the error has no status code, set to 500;
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    // All HTTP requests must have a repsonse so I am sending back 
    // an error with the status code and message
    res.status(err.statusCode).send(err.message)
})