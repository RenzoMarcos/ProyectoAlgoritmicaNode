const express = require('express'); // Requiere el módulo Express y se almacena en una constante del mismo nombre
const path = require('path');       // Requiere el módulo path que viene junto con Node
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');


// Inicializaciones 
const app = express();
require('./database');


// Configuraciones (Settings)
app.set('port', process.env.PORT || 3000);          // Crea configuración en el puerto 3000 si no existe otro en nuestra ordenador
app.set('views', path.join(__dirname, 'views'));     //Sirve para indicarle a Node que la carpeta se encuentra dentro de Src, dirname (constante de Node)
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partial'),
    extname:'.hbs'
})); 
app.set('view engine', '.hbs');


// Middlewares (Funciones que serán ejecutadas)
app.use(express.urlencoded({extended: false}));     //Cuando se envía un dato se pueda interpretar, el extended es para no recibir imágenes, solo datos
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Global Variables
app.use((request, response, next) =>{
    response.locals.success_msg = request.flash('succes_msg');
    response.locals.error_msg = request.flash('error_msg')
    next();
});


//Rutas
app.use(require('./routes/Index'));
app.use(require('./routes/Notes'));
app.use(require('./routes/Users'));


//Static Files
app.use(express.static(path.join(__dirname, 'public')));



//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port')); // Si está en fucionamiento que me arroje este mensaje () => es lo mismo que colocar Function()
});
