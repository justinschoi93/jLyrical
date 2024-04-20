const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // take us to game board
    // display categories
})

router.get(`/:category`, (req, res) => {
    // display topics of selected category
    res.send('Get Quiz info: ' + req.params);
})

router.get(`/:category/:topic`, (req, res) => {
    // display questions
    res.send('Get Quiz info: ' + req.params);
})

module.exports = router;


