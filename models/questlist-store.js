'use strict';

const _ = require('lodash');
const questlistStore = {

  questlistCollection: require('./questlist-store.json').questlistCollection,

  getAllQuestlists() {
    return this.questlistCollection;
  },

  getQuestlist(id) {
    return _.find(this.questlistCollection, { id: id });
  },
  
     removeQuest(id, questId) {
    const questlist = this.getQuestlist(id);
    _.remove(questlist.quests, { id: questId });
  },
  
  removeQuestlist(id) {
  _.remove(this.questlistCollection, { id: id });
},
   
   
  
};

module.exports = questlistStore;