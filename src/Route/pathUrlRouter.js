const { render } = require('ejs');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("welcome");
});

router.get("/home", (req, res) => {
    res.render("home");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get('/art', (req, res) => {
    res.render('art');
})

module.exports = router;