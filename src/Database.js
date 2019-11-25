const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/DB-Notas', {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false
})

	.then(db => console.log('La base de datos está conectada'))
	.catch(err => console.error('error'));