const { render } = require('ejs');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Home');
})

router.get('/member', (req, res) => {
    res.render('Member');
})

router.get('/home', (req, res) => {
    res.redirect('/');
})

module.exports = router;