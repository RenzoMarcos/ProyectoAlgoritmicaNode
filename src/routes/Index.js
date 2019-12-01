const router = require('express').Router();

router.get('/', (request, response) => {
    response.render('Index');
});

router.get('/about', (request, response) => {
    response.render('About');
});

router.get('/tienda', (request, response) => {
    response.render('tienda');
});

router.get('/confirmo', (request, response) => {
    response.render('confirmo');
});
module.exports = router;

