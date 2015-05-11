TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  tagName: "li",
  className: "list",

  events: {
    'click .show-new-card-form': 'showNewCardForm',
    'submit .newcard': 'makeCard'
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);

    this.model.cards().each(function (card) {
      cardView = new TrelloClone.Views.Card({model: card})
      this.addSubview(".cards", cardView.render())
    }.bind(this));
  },

  template: JST['lists/show'],

  render: function () {
    content = this.template({list: this.model});
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  showNewCardForm: function (event) {
    event.preventDefault();
    this.$el.find('.newcard').removeClass('hidden');
    console.log("showNewCardForm");
  },

  makeCard: function (event) {
    event.preventDefault();
    params = $(event.currentTarget).serializeJSON();
    params["card"]["list_id"] = this.model.id;
    var card = new TrelloClone.Models.Card();
    var cards = this.model.cards();
    card.save(params["list"], {
      success: function () {
        cards.add(card);
      }
    })
  }
});
