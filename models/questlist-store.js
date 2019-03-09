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
  
     removeSong(id, questId) {
    const questlist = this.getquestlist(id);
    _.remove(questlist.quests, { id: questId });
  },
  
  removeQuestlist(id) {
  _.remove(this.questlistCollection, { id: id });
},
    addQuest(id, quest) {
    const questlist = this.getQuestlist(id);
    questlist.quests.push(quest);
  },
  
  
};

module.exports = questlistStore;