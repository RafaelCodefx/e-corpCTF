const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'about.html'));
});

router.get('/servicos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'servicos.html'));
});

router.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'contato.html'));
});

router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'public', 'login.html'))
})

router.get('/admin/access', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'public', 'access.html'))
})

router.get('/download/', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'public', 'venceu.html'))
})

router.get('/download/funcionarios', (req, res) => {
    res.download(path.join(__dirname, 'secret'))
})

router.get('/download/china', (req, res) => {
    res.download(path.join(__dirname, 'secret'))
})
module.exports = router;
