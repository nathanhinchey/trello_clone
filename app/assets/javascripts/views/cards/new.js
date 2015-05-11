TrelloClone.Views.CardNew = Backbone.View.extend({
  initialize: function (options) {
    this.list = options.list;
    console.log("this.list = ");
    console.log(this.list);
  },

  tagName: 'form',

  events: {
    'submit': 'submit'
  },

  template: JST['cards/new'],

  render: function () {
    var content = this.template({list: this.list});
    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    params = this.$el.serializeJSON();
    debugger;
    params["card"]["list_id"] = this.list.id;
    var card = new TrelloClone.Models.Card();
    var cards = this.list.cards();
    list.save(params["list"], {
      success: function () {
        cards.add(card);
      }
    })
    Backbone.history.navigate("boards/" + this.list.board.id, {trigger: true})
  }
})
