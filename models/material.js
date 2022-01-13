const { type } = require('express/lib/response');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var materialSchema = new Schema({
    materialType: {
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
    content: [String]
});

module.exports = mongoose.model('Material', materialSchema);