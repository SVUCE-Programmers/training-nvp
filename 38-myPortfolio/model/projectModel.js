var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    createdAt: {type: Date, default: Date.now },
    name: String,
    title: String
});

var projectSchema = new Schema({
    id:  Number,
    name: String,
    image:   String,
    description: String,
    create_at: { type: Date, default: Date.now },
    comments: [commentSchema]
});

module.exports = mongoose.model('Project', projectSchema);