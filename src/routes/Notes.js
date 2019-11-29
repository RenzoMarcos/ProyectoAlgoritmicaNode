const router = require('express').Router();

const Note = require('../models/Note');

router.get('/notes/add', (request, response) =>{
    response.render('notes/new-note')
});

router.post('/notes/new-note' , async(request, response) => {       //la palabra async le indica que es un proceso asíncrono
    console.log(request.body); //Muestra por consola lo que se ha registrado (aún no está en la base de datos Mongo)
    const { user , register }= request.body;
    const errors = [];
    if(!user){
        errors.push({text: 'Por favor, registre un usuario'});
    }
    if(!register){
        errors.push({text: 'Por favor escriba una descripción de su compra'});
    }
    if(errors.length > 0) {
        response.render('notes/new-note', {
            errors,
            user,
            register
        });
    } 
    else{
        //response.send('Aea, mano'); // Manda un mensaje que quiere decir que todo fue bien al momento de registrar
        const newNote = new Note({ user, register });
        await newNote.save(); //Guarda los datos registrados, le tomará unos segundos o un lapso de tiempo
        request.flash('succes_msg', 'Usuario agregado con éxito');
        response.redirect('/notes');
        //console.log(newNote);
        //response.send('Aea,mano');
    }
});


router.get('/notes', async (request, response) =>{
    const notes = await Note.find().sort({date: 'asc'});
    response.render('notes/all-notes', {notes});
});

router.get('/notes/edit/:id', async (request, response) => {
    const note = await Note.findById(request.params.id);
    response.render('notes/edit-notes' , {note});
});

router.put('/notes/edit-notes/:id', async (request, response) =>{
    const { user, register } = request.body;
    await Note.findByIdAndUpdate(request.params.id, { user, register });
    response.redirect('/notes');
});

router.delete('/notes/delete/:id', async (request, response) =>{
    await Note.findByIdAndDelete(request.params.id);
    response.redirect('/notes');
});
module.exports = router;
