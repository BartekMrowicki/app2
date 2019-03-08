'use strict';

const logger = require('../utils/logger');

const about = {
  index(request, response) {
    logger.info('start rendering');
    const viewData = {
      quest: 'About quest 1',
    };
    response.render('about', viewData);
  },
};

module.exports = about;

