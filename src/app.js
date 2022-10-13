require("./db/connection");
const mongoose = require('mongoose')
const yargs = require("yargs")
const { createMovie, readMovie, updateMovie, deleteMovie } = require("./movie/movieFunctions")

const app = async (yargsObject) => {
    try {
        if (yargsObject.create) {
            await createMovie({ title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director })
            console.log(await readMovie())
        } else if (yargsObject.read) {
            console.log(await readMovie(yargsObject.key, yargsObject.filter));
        } else if (yargsObject.update) {
            await updateMovie({ title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director})
        } else if (yargsObject.delete) {
            await deleteMovie({ title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director })
        } else {
            console.log("Incorrect command")
        }
        await mongoose.disconnect()
    } catch (error) {
        await mongoose.disconnect()
        console.log(error)
    }
}
app(yargs.argv)