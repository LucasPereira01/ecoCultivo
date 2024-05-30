const express = require('express');
const fs = require('fs');
const arquivo = '../logger.json'; // Caminho do arquivo JSON
const cors = require('cors'); // Importe o pacote cors

const app = express();

// Use o middleware de CORS
app.use(cors());

// Define uma rota para obter os dados do arquivo JSON
app.get('/dados', (req, res) => {
    // Lê o arquivo JSON
    fs.readFile(arquivo, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo JSON:', err);
            res.status(500).json({ error: 'Erro ao ler o arquivo JSON' });
            return;
        }
        
        // Envia os dados JSON como resposta
        res.json(JSON.parse(data));
    });
});

// Inicia o servidor
const port = 3001; // Ou a porta que deseja usar
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
