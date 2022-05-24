const { render } = require('ejs');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('welcome');
});

router.get('/home', (req, res) => {
    res.render('home');
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

router.get('/manage', (req, res) => {
    res.render('manage');
})

router.get('/home', (req, res) => {
    res.redirect('/');
})

module.exports = router;