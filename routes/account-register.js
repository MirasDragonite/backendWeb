const express = require('express')
const router = express.Router()
const path = require('path')

router
    .route('/')
    .get((req,res) => res.sendFile(path.resolve('./account-register.html')))

module.exports = router