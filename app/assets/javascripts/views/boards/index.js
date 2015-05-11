TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function (option) {
    this.listenTo(this.collection, "sync add", this.render)
  },

  template: JST['boards/index'],

  render: function () {
    var content = this.template({boards: this.collection});
    this.$el.html(content);

    return this;
  }
});
