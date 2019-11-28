const router = require('express').Router();

router.get('/notes/add', (request, response) =>{
    response.render('notes/new-note')
});

router.post('/notes/new-note', (request, response) => {
    console.log(request.body);
    response.send('ok');
});


router.get('/notes', (request, response) =>{
    response.send('Notas desde la base de datos')
});

module.exports = router;