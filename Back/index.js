const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
