import express from 'express';
import path from 'path';
import compression from 'compression';

const app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, '..', 'node_modules')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App started on 3000!');
});
