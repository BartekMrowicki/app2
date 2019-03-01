'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const dashboard = require('./controllers/dashboard.js');


router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);

module.exports = router;
const about = {
  index(request, response) {
    const viewData ={
      title: ' About PlaylistMaker',
    };
    response.render('about',viewData);
  },
};