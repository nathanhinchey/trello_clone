TrelloClone.Views.Card = Backbone.View.extend({
  tagName: "li",
  className: "card",

  template: JST["cards/show"],

  render: function () {
    content = this.template({card: this.model});
    this.$el.html(content);

    return this;
  }
});
