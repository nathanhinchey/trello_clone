TrelloClone.Collections.Cards = Backbone.Collection.extend({
  model: TrelloClone.Models.Card,

  initialize: function (collection, options) {
    this.list = options.list;
  }
});
