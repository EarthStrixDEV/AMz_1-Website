const { render } = require('ejs');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('welcome');
});

router.get('/home', (req, res) => {
    res.render('home');
    let para_id = req.params.id;
    console.log(para_id);
});

router.get('/member', (req, res) => {
    res.render('Member');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/home', (req, res) => {
    res.redirect('/');
})

module.exports = router;