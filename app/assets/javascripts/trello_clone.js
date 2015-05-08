window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new TrelloClone.Routers.BoardsRouter({
      $rootEl: $("body")
    });
    Backbone.history.start();
    console.log("initialize TrelloClone");;
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
