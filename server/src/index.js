import express from 'express';
import schedule from './schedule';

const server = express();
server.use('/', schedule);

server.listen(3001, function () {
  console.log('trip-planner app listening on port 3001!');
});