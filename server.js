// Imports
import compression from 'compression';
import config from './webpack.config';
import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';

// Other variables
const app = express();
const compiler = webpack(config);
const PROD = process.env.NODE_ENV === 'production';
const port = PROD ? 8080: 3000;
const baseDir = PROD ? 'build' : 'dist';

// Middleware
if (PROD) {
  app.use(compression());
}
else {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static(baseDir));

// API routes
app.get('/api/sample-route', (req, res) => {
  res.send({
    website: 'Toptal',
    blogPost: true
  });
});

// Client routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './', baseDir, '/index.html'));
});

app.listen(port, () => {
  open(`http://localhost:${port}`);
});