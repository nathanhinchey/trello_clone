TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    console.log("initialize router");
  },

  routes: {
    "": "index",
    "boards/new" : "new",
    "boards/:id" : "show"
  },

  show: function (id) {
    console.log("enter show in router");
    var board = new TrelloClone.Models.Board({id: id});
    board.fetch();
    var view = new TrelloClone.Views.BoardShow({model: board});
    this.$rootEl.html(view.render().$el);
  }
});
