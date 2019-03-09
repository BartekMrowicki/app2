'use strict';

const logger = require('../utils/logger');

const developer = {
  index(request, response) {
    logger.info('start rendering');
    const viewData = {
      quest: 'About quest 1',
    };
    response.render('developer', viewData);
  },
};

module.exports = developer;

