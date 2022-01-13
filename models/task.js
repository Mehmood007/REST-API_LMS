const { type } = require('express/lib/response');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    taskType: {
        type: String,
        required: true
    },
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'Classes'
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'Teacher'
    },
    marks: [Number]
});

module.exports = mongoose.model('Task', taskSchema);