const { render } = require('ejs');
const express = require('express');
const DB = require('../DB/DB.js');
const router = express.Router();
const multer = require('multer');

// use multer to upload file
const storage = multer.diskStorage({
    // create folder uploads in public folder
    destination: function (req, file, cb) {
        cb(null, './public/uploads');
    },
    // rename file 
    filename: function (req, file, cb) {
        cd(null, file.originalname);
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
            console.log('server error => : ' + err)
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
        link: req.body.link
    });

    // save data to mongodb and send to view
    DB.saveMember(data, (err) => {
        if (err) {
            console.log('server error => : ' + err)
        } else {
            res.redirect('/');
        }
    })
})

router.get('/manage', (req, res) => {
    DB.find().exec((err, data) => {
        if (err) {
            console.log('server error => : ' + err)
        } else {
            res.render("manage", { data: data });
        }
    });
})


router.post('/updateData', (req, res) => {
    const edit_id = req.body.edit_id;
    console.log(edit_id);
    DB.findOne({ _id: edit_id }).exec((err, data) => {
        if (err) {
            console.log('server error => : ' + err)
        } else {
            console.log(data);
            res.render('update', { data: data });
        }
    });
})

router.post('/updated', (req, res) => {
    const update_id = req.body.update_id;
    let data = {
        name: req.body.name,
        description: req.body.description,
        cover: req.body.cover,
        link: req.body.link,
    };
    DB.findByIdAndUpdate(update_id , data, {useFindAndModify:false}).exec((err) => {
        if (err) {
            console.log('server error => : ' + err)
        } else {
            res.redirect('manage');
        }
    });
})

router.get('/delete/:id', (req, res) => {
    DB.findByIdAndDelete(req.params.id,{useFindAndModify : false}).exec(err => {
        if (err) {
            console.log('server error => : ' + err);
        } else {
            res.redirect('manage');
        }
    })
})

module.exports = router;