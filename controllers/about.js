'use strict';

const logger = require('../utils/logger');

const about = {
  index(request, response) {
    logger.info('start rendering');
    const viewData = {
      title: 'About Playlist 1',
    };
    response.render('about', viewData);
  },
};

module.exports = about;

