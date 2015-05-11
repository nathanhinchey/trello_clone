TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$contentEl = options.$contentEl;
    this.boards = new TrelloClone.Collections.Boards();
  },

  routes: {
    ""                     : "index",
    "boards/new"           : "newBoard",
    "boards/:id"           : "show",
    "boards/:id/newlist"   : "newList"
  },

  show: function (id) {
    var board = new TrelloClone.Models.Board({id: id});
    board.fetch();
    var view = new TrelloClone.Views.BoardShow({model: board});
    this._swapViews(view);
  },

  newBoard: function () {
    var view = new TrelloClone.Views.BoardNew();
    this._swapViews(view);
  },

  index: function () {
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.boards
    });
    this.boards.fetch();
    this.$contentEl.html(view.render().$el);
  },

  newList: function (boardId) {

  },

  _swapViews: function (view) {
    if (this._view){
      this._view.remove();
    }
    this._view = view;
    this.$contentEl.html(view.render().$el)
  }
});
