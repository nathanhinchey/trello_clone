TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function() {
    this.listenTo(this.$el, "sync", this.render)
  },

  render: function () {
    console.log("hello");
    content = this.template({board: this.model});
    this.$el.html(content);

    return this;
  }
});
