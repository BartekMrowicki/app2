'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const questlog = require('./controllers/questlog.js');
const developer = require('./controllers/developer.js');
const questlist = require('./controllers/questlist.js');

router.get('/', start.index);
router.get('/questlog', questlog.index);
router.get('/developer', developer.index);
router.get('/questlist/:id', questlist.index);
router.get('/questlist/:id/deleteQuest/:questid', questlist.deleteQuest);
router.get('/questlog/deleteQuestlist/:id', questlog.deleteQuestlist);


module.exports = router;
