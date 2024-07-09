const express = require('express');
const app = express();
const path = require('path');


// Rota para servir 'story.html' na raiz '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'story.html'));
});

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

const mainRouter = require('./routes/main.js');
app.use('/ctf', mainRouter);

const buyRouter = require('./routes/comprar.js');
app.use('/ctf/servicos/', buyRouter)

// Iniciando o servidor
app.listen(8080, () => {
    console.log('Server running in http://localhost:8080');
});
