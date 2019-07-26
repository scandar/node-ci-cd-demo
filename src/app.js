import express from 'express';
import debug from 'debug';

const app = express();
const log = debug('app');

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

app.get('/hello', (req, res) => {
  const { name } = req.query;
  return res.json({ message: `Hello ${capitalize(name) || 'World'}!` });
});

app.listen(3000, () => {
  log('server listening on port 3000');
});
