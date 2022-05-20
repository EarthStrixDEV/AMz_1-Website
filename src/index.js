const express = require('express')
const path = require('path')
const router = require('./Route/router.js')
const app = express();

router.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(router);

app.listen(3000, () => {
    console.log("Server is running...")
})