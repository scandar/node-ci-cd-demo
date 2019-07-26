import express from 'express';
import debug from 'debug';

const app = express();
const log = debug('app');

app.get('/hello', (req, res) => res.json({ message: 'Hello World!' }));

app.listen(3000, () => {
  log('server listening on port 3000');
});
