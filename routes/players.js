const express = require("express");
const router = express.Router();
const Player = require('../models/Player');

router.get('/', async (req, res) => {
    try{
        const players = await Player.find();
        res.json(players)
    }catch(err){
        res.json({message: err});
    }
});

router.get('/:playerId', async (req, res) => {
    try{
        const player = await Player.findById(req.params.playerId);
        res.json(player);
    }catch(err){
        res.json({message: err});
    }
    
});

router.post('/', async (req, res) => {
    const player = new Player({
        name: req.body.name,
        description: req.body.description
    })

    try{
        const savedPlayer = await player.save();
        res.json(savedPlayer);
    }catch(err){
        res.json({message: err});
    }

});



module.exports = router;