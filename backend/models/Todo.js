const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining a collection and a schema
let Task = new Schema({
    taskName: {
        type: String
    },
    taskFrequency: {
        type: Number
    },
    taskFeels: {
        type: String
    }
}, {
    collection: 'tasks'
});

// Exporting the module to be used for db interactions
module.exports = mongoose.model('Task', Task);