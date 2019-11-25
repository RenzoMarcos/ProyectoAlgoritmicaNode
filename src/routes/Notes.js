const router = require('express').Router();

router.get('/notes', (request, response) =>{
    response.send('Notas desde la base de datos')
})

module.exports = router;