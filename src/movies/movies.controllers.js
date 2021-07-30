const Movie = require('./movies.model');

exports.addMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        const savedMovie = await movie.save();
        res.status(200).send({movie: savedMovie, message: "Movie has been added to the database"})
    } catch (error) {
        res.status(500).send(error);          
    }
}

exports.findMovie = async (req, res) => {
    try {
        const movie = req.params.title;
        const date  = req.params.date;
        const pickMovie = await Movie.findOne({title: movie, date: date});
        res.status(200).send({movie: pickMovie, message: "Movie has been found"}); 
    } catch (error) {
        res.status(500).send(error); 
    }
}

exports.updateMovie = async (req, res) => {
    try {
        const movie = req.params.title;
        const actor = req.params.actor;
        const watched = req.params.watched;
        const rating = req.params.ratings;
        const updateActor = await Movie.updateOne({title: movie, actor: actor, watched: watched, ratings: rating});
        res.status(200).send({movie: updateActor, message: "Movie has been updated"}); 
    } catch (error) {
        res.status(500).send(error); 
    }
}

exports.deleteMovie = async (req, res) =>{
    try {
        const movie = req.params.title
        const removeMovie = await Movie.findOneAndDelete({title: movie});
        res.status(200).send({movie: removeMovie, message: "Movie removed"}); 
    } catch (error) {
        res.status(500).send(error); 
    }
}
