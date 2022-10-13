const Movie = require("./movieModels")

exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)
    } catch (error) {
        console.log(error)
    }
}

exports.readMovie = async (key, filter) => {
    try {
        if (key) {
            return await Movie.findOne({[key]: filter})
        } else {
            return await Movie.find({})
        }
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (movieObject) => {
    try {
        await Movie.updateOne({title: movieObject.title}, {$set: {actor: movieObject.actor}}, {$set: {director: movieObject.director}})
    } catch (error) {
        console.log(error)
    }
}
exports.deleteMovie = async (movieObject) => {
    try {
        await Movie.deleteOne({title: movieObject.title})
    } catch (error) {
        console.log(error)
    }
}