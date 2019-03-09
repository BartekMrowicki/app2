'use strict';

const logger = require('../utils/logger');
const questlistStore = require('../models/questlist-store');

const questlog = {
  index(request, response) {
    logger.info('questlog rendering');
    const viewData = {
      quest: 'Questlist Questlog',
      questlists: questlistStore.getAllQuestlists(),
    };
    logger.info('about to render', questlistStore.getAllQuestlists());
    response.render('questlog', viewData);
  },
  
   deleteQuestlist(request, response) {
     const questlistId = request.params.id;
     logger.debug('Deleting Questlist ${questlistId}');
     questlistStore.removeQuestlist(questlistId);
     response.redirect('/questlog');
   },
  
  
};

module.exports = questlog;