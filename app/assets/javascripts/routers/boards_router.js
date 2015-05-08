TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$contentEl = options.$contentEl;
  },

  routes: {
    "": "index",
    "boards/new" : "new",
    "boards/:id" : "show"
  },

  show: function (id) {
    var board = new TrelloClone.Models.Board({id: id});
    board.fetch();
    var view = new TrelloClone.Views.BoardShow({model: board});
    this.$contentEl.html(view.render().$el);
  }
});
