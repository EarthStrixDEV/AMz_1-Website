const express = require('express')
const path = require('path')
const CRUD = require('./Route/CRUD.js')
const pathUrlRouter = require('./Route/pathUrlRouter.js')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(CRUD , pathUrlRouter)

app.listen(port, () => {
    console.log("Server is running on port " + port)
}).on('error', (err) => {
    console.log('server error: ' + err)
})