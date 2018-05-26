const mongoose = require('mongoose');

const schema = mongoose.Schema({ 
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    pages:{
        type: Number,
        required: true
    },
    img_url:{
        type: String,
        required: true
    },
    buy_url:{
        type: String,
        required: true
    }
})

const books = module.exports = mongoose.model('Book', schema);

module.exports.getBooks = function(callback, limit){
    books.find(callback).limit(limit);  
}

module.exports.getBookById = function(id, callback){

    books.findById(id, callback);   
}