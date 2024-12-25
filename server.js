const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Endpoint para salvar logs
app.post('/log', (req, res) => {
    const { type, message, timestamp } = req.body;

    if (!type || !message || !timestamp) {
        return res.status(400).send('Dados de log inválidos.');
    }

    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}\n`;

    fs.appendFile('logs.txt', logEntry, (err) => {
        if (err) {
            console.error('Erro ao salvar log:', err);
            return res.status(500).send('Erro ao salvar log.');
        }
        res.send('Log salvo com sucesso.');
    });
});

// Servir arquivos estáticos
app.use(express.static('.'));

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
