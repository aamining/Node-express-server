
const express = require('express')
let router = express.Router()



router.get('/toys', (req, res) => res.send('Toys#index'))

router.get('/toys/:id', (req, res) => res.send('req.params.id'))

router.post('/toys', (req, res) => res.send('This is a Post\n'))

module.exports = router;
