const mongoos = require('mongoose');

const genreSchema = mongoos.Schema({

    name:{
        type: String,
        required: true
    },
    creatDate:{
        type: Date,
        default: Date.now
    }
});


const Genres = module.exports = mongoos.model('Genre', genreSchema);

module.exports.getGenres = function(callback, limit){
    Genres.find(callback).limit(limit);
};

module.exports.addGenre = function(genre, callback){
    Genres.create(genre, callback);
};

module.exports.updateGenre = function(id, genre, options, callback){
    let query = {_id: id};
    let update = { name: genre.name};
    Genres.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteGenre = function(id, callback){
    let query = {_id: id};

    Genres.remove(query, callback);
}