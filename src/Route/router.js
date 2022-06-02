const { render } = require('ejs');
const express = require('express');
const DB = require('../DB/DB.js');
const router = express.Router();
const multer = require('multer');

// use multer to upload file
const storage = multer.diskStorage({
    // create folder uploads in public folder
    destination: function (req, file, cb) {
        cb(null, './public/img/uploads/')
    },
    // rename file 
    filename: function (req, file, cb) {
        cb(null, Date.now() + ".jpg")
    }
})

const uploads = multer({ storage: storage })

router.get('/', (req, res) => {
    res.render('welcome');
});

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/member', (req, res) => {
    // pull data from mongodb and send to view
    DB.find().exec((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('Member', { data: data });
        }
    });
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/getData', uploads.single('cover'), (req, res) => {
    // get data from view and save to mongodb
    let data = new DB({
        name: req.body.name,
        description: req.body.description,
        cover: req.body.cover,
        link: req.body.link,
    });
    // save data to mongodb and send to view
    DB.saveMember(data, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.redirect('register');
        }
    });
})

router.get('/manage', (req, res) => {
    DB.find().exec((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render("manage", { data: data });
        }
    });
})

router.get('/update', (req, res) => {
    res.render('update');
})

module.exports = router;