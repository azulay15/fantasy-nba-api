const express = require("express");
const router = express.Router();
const Player = require('../models/Player');

router.get('/', (req, res) => {
    res.send('here are my players');
});

router.get('/deniavdija', (req, res) => {
    res.send('here is Deni Avdija');
});

router.post('/', (req, res) => {
    console.log(req.body);
});



module.exports = router;