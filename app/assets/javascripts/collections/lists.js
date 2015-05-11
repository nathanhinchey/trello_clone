TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,

  initialize: function(stuff, options){
    this.board = options.board;
  },

  comparator: function(list) {
    return list.get("ord");
  }
});
