const router = require('express').Router();

router.get('/Users/signin', (request, response) =>{
    response.render('Users/Signin');
})

router.get('/Users/signup', (request, response) =>{
    response.render('Users/Signup');
});

router.post('/Users/signup', (request, response) =>{
    const { name, email, password, confirm_password} = request.body;
    const errors = [];
    if(password != confirm_password){
        errors.push({text: 'Las contraseñas no coinciden'});
    }
    if(password.lenght < 4){
        errors.push({text: 'La contraseña debe tner por lo menos 4 dígitos'});
    }
    if(errors.lenght > 0){
        response.render('Users/signup', {errors, name, email, password, confirm_password});
    } 
    else{
            response.send('Gaaaaaaaa');
        }
    
    response.send('Gaaaaa');
});

module.exports = router;