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
    this._swapViews(view);
  },

  new: function () {
    var view = new TrelloClone.Views.BoardNew();
    this._swapViews(view);
  },

  _swapViews: function (view) {
    if (this._view){
      this._view.remove();
    }
    this._view = view;
    this.$contentEl.html(view.render().$el)
  }
});
