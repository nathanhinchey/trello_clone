TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$contentEl = options.$contentEl;
    this.boards = new TrelloClone.Collections.Boards();
  },

  routes: {
    ""                     : "index",
    "boards/new"           : "newBoard",
    "boards/:id"           : "show",
    "boards/:id/newlist"   : "newList",
    "boards/:boardid/:listid/newcard"    : "newCard"
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
    var board = this.boards.getOrFetch(boardId);
    var list = new TrelloClone.Models.List();
    var newListView = new TrelloClone.Views.ListNew({
      board: board,
      model: list
    })
    this._swapViews(newListView)
  },

  newCard: function (boardId, listId) {
    var board = this.boards.getOrFetch(boardId);
    var list = board.lists().get(listId);
    var card = new TrelloClone.Models.Card();
    var newCardView = new TrelloClone.Views.ListNew({
      list: list,
      model: card
    })
    this._swapViews(newCardView)
  },

  _swapViews: function (view) {
    if (this._view){
      this._view.remove();
    }
    this._view = view;
    this.$contentEl.html(view.render().$el)
  }
});
