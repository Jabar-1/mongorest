const { Router } = require('express');
const movieRouter = Router();
const {addMovie, updateMovie, findMovie, deleteMovie } = require('./movies.controllers')

movieRouter.post('/movies', addMovie);
movieRouter.get('/movies/:title/:date', findMovie);
movieRouter.put('/movies', updateMovie);
movieRouter.delete('/movies/:title', deleteMovie);

module.exports = movieRouter;
