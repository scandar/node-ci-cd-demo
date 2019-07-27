import express from 'express';
import debug from 'debug';

const port = process.env.PORT || 3000;
const app = express();
const log = debug('app');

export const capitalize = (str = '') => {
  if (typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

app.get('/hello', (req, res) => {
  const { name } = req.query;
  return res.json({ message: `Hello ${capitalize(name) || 'World'}!` });
});

app.listen(port, () => {
  log(`server listening on port ${port}`);
});

export default app;
