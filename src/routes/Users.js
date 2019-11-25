const router = require('express').Router();

router.get('/Users/signin', (request, response) =>{
    response.render('Users/Signin');
})

router.get('/Users/signup', (request, response) =>{
    response.render('Users/Signup');
});

module.exports = router;