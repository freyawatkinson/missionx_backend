// Handles routing

const express = require('express');
const router = express.Router();

router.get('/tweet', (req, res) => {
    const str = [{
        "name": "Freya Watkinson",
        "msg": "This is my first tweet",
        "username": "FreyaW"

    }];
    res.end(JSON.stringify(str))
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;