const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema ({
    title:{
        type: String,
        unique: true,
        required: true
    },
    actor:{
        type: String,
        required: false
    }, 
    ratings:{
        type: Number,
        required: true,
        default: 0 
    },
    genre:{
        type: String,
        required: true
    },
    watched:{
        type: Boolean,
        default: false
    }, 
    date: {
        type: Number,
        required: true
    }

})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

