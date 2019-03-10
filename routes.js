'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const questdiary = require('./controllers/questdiary.js');
const developer = require('./controllers/developer.js');
const questlist = require('./controllers/questlist.js');

router.get('/', start.index);
router.get('/questdiary', questdiary.index);
router.get('/developer', developer.index);
router.get('/questlist/:id', questlist.index);
router.get('/questlist/:id/deleteQuest/:questid', questlist.deleteQuest);
router.get('/questdiary/deleteQuestlist/:id', questdiary.deleteQuestlist);


module.exports = router;
