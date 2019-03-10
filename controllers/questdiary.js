'use strict';

const logger = require('../utils/logger');
const questlistStore = require('../models/questlist-store');

const questdiary = {
  index(request, response) {
    logger.info('questdiary rendering');
    const viewData = {
      quest: 'Questlist QuestDiary',
      questlists: questlistStore.getAllQuestlists(),
    };
    logger.info('about to render', questlistStore.getAllQuestlists());
    response.render('questdiary', viewData);
  },
  
   deleteQuestlist(request, response) {
     const questlistId = request.params.id;
     logger.debug('Deleting Questlist ${questlistId}');
     questlistStore.removeQuestlist(questlistId);
     response.redirect('/questdiary');
   },
  
  
};

module.exports = questdiary;