const express = require('express')
const router = express.Router()

router.get('/', (request,response) => {

    response.send("Web Development")
    
    })

module.exports = router