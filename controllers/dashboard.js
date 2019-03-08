'use strict';

const logger = require('../utils/logger');
const questlistStore = require('../models/questlist-store');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      quest: 'Questlist Dashboard',
      questlists: questlistStore.getAllQuestlists(),
    };
    logger.info('about to render', questlistStore.getAllQuestlists());
    response.render('dashboard', viewData);
  },
  
   deleteQuestlist(request, response) {
     const questlistId = request.params.id;
     logger.debug('Deleting Questlist ${questlistId}');
     questlistStore.removeQuestlist(questlistId);
     response.redirect('/dashboard');
   },
  
  
};

module.exports = dashboard;