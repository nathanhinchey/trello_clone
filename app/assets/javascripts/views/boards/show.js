TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    console.log("render board show");
    content = this.template({board: this.model});
    this.$el.html(content);
    console.log(content);

    return this;
  }
});
