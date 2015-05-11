TrelloClone.Models.List = Backbone.Model.extend({
  parse: function(response) {
    this.cards().set(response.cards);
    delete response.cards;

    return response;
  },

  urlRoot: 'api/lists',

  cards: function() {
    if (!this._cards){
      this._cards = new TrelloClone.Collections.Cards([], {list: this});
    }

    return this._cards;
  }
})
