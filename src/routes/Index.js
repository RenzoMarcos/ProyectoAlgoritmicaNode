const router = require('express').Router();

router.get('/', (request, response) => {
    response.render('Index');
});

router.get('/about', (request, response) => {
    response.render('About');
});

module.exports = router;

