// use mongoose to connect to mongodb
const mongoose = require('mongoose')
const mongoDB = "mongodb://localhost:27017/memberDB"

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}).catch(err => {
    console.log(`Error: ${err}`)
}).then(() => {
    console.log("Connected to mongodb")
})

// schema for mongodb collection
let mongoose_schema = mongoose.Schema({
    name: String,
    description: String,
    cover: String,
    link: Object,
})

// create a model for mongodb collection
let DB = mongoose.model('DB', mongoose_schema)

// export the collection to other files
module.exports = DB

module.exports.saveMember = (model, save) => {
    model.save(save)
}