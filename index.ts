import express from 'express';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Server is work');
});

app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});