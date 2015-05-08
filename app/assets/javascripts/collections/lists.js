TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,

  initialize: function(stuff, options){
    this.board = options.board;
  },

  nestedSet: function (json) {
    
  }
});
