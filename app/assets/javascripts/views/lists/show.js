TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
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
  }
});
