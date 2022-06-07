const express = require('express')
const path = require('path')
const router = require('./Route/router.js')
const app = express()
const port = 3000

router.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(router)

app.listen(port, () => {
    console.log("Server is running on port " + port)
}).on('error', (err) => {
    if (err) {
        console.log(`server error => : ${err}`)
    } else {
        console.log("Server is running on port " + port)
    }
})