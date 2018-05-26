const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    task:{
        name: String
    },
    isDone:{
        type: Boolean
    },
    doneBy:{
        type: String
    }
});


const tasks = module.exports = mongoose.model('tasks', taskSchema);

module.exports.getTasks = function(callback){
    tasks.find(callback);
}