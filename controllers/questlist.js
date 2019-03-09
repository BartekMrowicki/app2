'use strict';

const logger = require('../utils/logger');
const questlistStore = require('../models/questlist-store');

const questlist = {
  index(request, response) {
    const questlistId = request.params.id;
    logger.debug('Questlist id =', questlistId);
    const viewData = {
      quest: 'Questlist',
      questlist: questlistStore.getQuestlist(questlistId),
    };
    response.render('questlist', viewData);
  },
  
  deleteQuest(request, response) {
    const questlistId = request.params.id;
    const questId = request.params.questid;
    logger.debug(`Deleting Quest ${questId} from Questlist ${questlistId}`);
    questlistStore.removeQuest(questlistId, questId);
    response.redirect('/questlist/' + questlistId);
  },
    
  
};

module.exports = questlist;