import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('OI pessoas!!!!');
});

app.listen(port, () => {
  console.log(`Api rodando em porta: http://localhost:${port}`);
});