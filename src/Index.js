const express = require('express'); // Requiere el módulo Express y se almacena en una constante del mismo nombre
const path = require('path');       // Requiere el módulo path que viene junto con Node
const exphbs = require('express-handlebars')

// Inicializaciones 
const app = express();


// Configuraciones (Settings)
app.set('port', process.env.PORT || 3000); // Crea configuración en el puerto 3000 si no existe otro en nuestra ordenador
app.set('views', path.join(     dirname, 'views')); //Sirve para indicarle a Node que la carpeta se encuentra dentro de Src, dirname (constante de Node)
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: ,
    extname:
})); 

// Middlewares (Funciones que serán ejecutadas)



// Global Variables



//Static Files



//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port')); // Si está en fucionamiento que me arroje este mensaje () => es lo mismo que colocar Function()
});
