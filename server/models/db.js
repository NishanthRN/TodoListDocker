const mongoose = require('mongoose')
// mongodb://localhost:27017/todolist
module.exports = mongoose.connect('mongodb+srv://nishanthrn:nishanthrn@cluster0.slwef4a.mongodb.net/todolist?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, err => {
    if (err) console.log(`Error in DB Connection ${err}`)
    console.log(`MongoDB Connection Suceeded...`)
})