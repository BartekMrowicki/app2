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
    questlistStore.removeSong(questlistId, questId);
    response.redirect('/questlist/' + questlistId);
  },
     addQuest(request, response) {
    const questlistId = request.params.id;
    const questlist = questlistStore.getQuestlist(questlistId);
       const uuid = require('uuid');
    const newQuest = {
        id: uuid(),
      Quest: request.body.quest,
      Faction: request.body.faction,
    };
    questlistStore.addQuest(questlistId, newQuest);
    response.redirect('/questlist/' + questlistId);
  },
  
};

module.exports = questlist;