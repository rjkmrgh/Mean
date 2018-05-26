const express = require('express');
const app = express();

const genres = require('./Models/genres')
const books = require('./Models/books')
const tasks = require('./Models/tasks')

const bp = require('body-parser');
app.use(bp.json());

const mongo = require('mongoose');
mongo.connect('mongodb://localhost/bookstore');

const db = mongo.connection;

app.listen(1338, () => {
    console.log('Server is listening 1338..');
})

app.get('/', (req, resp) => {
    resp.send("Hey there");
} );

app.get('/api/genres', function(req, resp) {
    genres.getGenres(function(err, data){
        if (err){
            throw err;
        }
        resp.json(data);
    })
})

app.post('/api/genres', function(req, resp){
    let genre = req.body;
    genres.addGenre(genre, function(err, genre){
        if(err){
            throw err;
        }
        resp.json(genre);
    })
});

app.put('/api/genres/:_id', function(req, resp){
    let id = req.params._id;
    let genre = req.body;
    genres.updateGenre(id, genre, {}, function(err, data){
        if(err){
            throw err;
        }
        resp.json(data);
    } );
})
app.delete('/api/genres/:_id', function(req, resp){
    let id = req.params._id;
    genres.deleteGenre(id, function(err, data){
        if(err){
            throw err;
        }

        resp.json(data);
    })
})
app.get('/api/books', function(req, resp){
    books.getBooks(function(err, data){
        if(err){
            throw err;
        }
        resp.json(data);
    }, 1)
})

app.get('/api/Books/:_id', function(req, resp){
    books.getBookById(req.params._id, function(err, data){
        if(err){
            throw err;
        }
        resp.json(data);
    })
})

app.get('/api/tasks', function(req, resp) {
    tasks.getTasks(function(err, data){
        if (err){
            throw err;
        }
        resp.json(data);
    })
})