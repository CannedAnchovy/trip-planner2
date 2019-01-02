import express from 'express';
import bodyParser from 'body-parser';

const data = require('../json/schedule.json');
console.log(data);

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('planner/getData', function(req, res) {
  console.log('I am getting data');
  res.json(data);
});

export default router;