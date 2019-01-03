import express from 'express';
import schedule from './schedule';
import path from 'path';

const server = express();

server.use(express.static(path.resolve(__dirname, '..', 'build')));
server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

server.use('/', schedule);

server.listen(3001, function () {
  console.log('trip-planner app listening on port 3001!');
});
