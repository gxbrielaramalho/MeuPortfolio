const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para download do currículo
app.get('/download', (req, res) => {
  const file = path.join(__dirname, 'public', 'gabriela-ramalho-cv.pdf');
  res.download(file); // Envia o arquivo para download
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
