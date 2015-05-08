TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,

  initialize(stuff, options){
    this.board = options.board;
  }
});
