var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    id:  Number,
    name: String,
    image:   String,
    description: String,
    create_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);