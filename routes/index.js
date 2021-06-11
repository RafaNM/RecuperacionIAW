const express = require('express');
const router = express.Router();
const hotel = require('../models/hotel');

//@route get /
router.get('/', async (req, res) => {
    try{
        const hotels = await hotel.find().sort( { stars: -1 } ).limit(5).lean();
        res.render('home', {
            hotels,
        })
    } catch (err) {
        console.error(err)
        res.render('error/404')
    }
})

//@route GET /dashboard
router.get('/backend', async (req, res) => {
    try{
        const hotels = await hotel.find().lean();
        res.render('backend', {
            layout: 'backend', //show backend in diferent color
            hotels,
        })
    } catch (err) {
        console.error(err)
        res.render('error/404')
    }
})

// @desc abaut
// @route GET /About
router.get('/about', (req, res) => {
    res.render('about')
})

// @route GET /Contact
router.get('/contact', (req, res) => {
    res.render('contact');
});

// @route GET /Booking
router.get('/booking', (req, res) => {
    res.render('booking');
});

// @desc    Show full restaurant info
// @route   GET /restaurants/:id
router.get('/hotel/:id', async (req, res) => {
    try {
       let hotels = await hotel.findById(req.params.id).lean();
       res.render('hotel', {
           hotels,
       })
    } catch (err) {
       console.error(err)
       res.render('error/404')
    }
})

// @desc agregar
// @route GET /agregar
router.get('/add', (req, res) => {
    res.render('add')
})

router.post('/add', async (req, res) => {
    try {
      await hotel.create(req.body)
      res.redirect('/backend')
    } catch (err) {
      console.error(err)
      res.render('error/404')
    }
  })

module.exports = router;