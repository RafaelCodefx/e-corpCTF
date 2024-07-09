const express = require('express')
const path = require('path')
const router = express.Router()




//caminho para compra
router.get('/buy', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'public', 'buy.html'))
})


module.exports = router;