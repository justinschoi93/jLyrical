const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all Users');
})

router.get('/:username', (req, res) => {
    res.send('Get User info: ' + req.params);
})

router.post('/', (req, res) => {
    res.send('Create User');
})

router.post('/loggedout', (req, res) => {
    //log user out
    //go back to landing page
})

module.exports = router;