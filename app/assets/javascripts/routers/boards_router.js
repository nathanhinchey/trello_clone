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
    var view = new TrelloClone.Views.BoardShow({id: id});
    this.$rootEl.html(view.render().$el);
  }
});
