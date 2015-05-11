TrelloClone.Views.CardNew = Backbone.View.extend({
  initialize: function (options) {
    this.list = options.list;
  },

  template: JST['lists/new'],

  render: function () {
    var content = this.template({list: this.list});
    this.$el.html(content);

    return this;
  }
})
