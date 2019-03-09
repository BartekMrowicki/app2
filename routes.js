'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const questlist = require('./controllers/questlist.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/questlist/:id', questlist.index);
router.get('/questlist/:id/deleteQuest/:questid', questlist.deleteQuest);
router.get('/dashboard/deleteQuestlist/:id', dashboard.deleteQuestlist);
router.post('/questlist/:id/addquest', questlist.addQuest);

module.exports = router;
