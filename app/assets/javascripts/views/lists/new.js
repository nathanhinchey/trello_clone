TrelloClone.Views.ListNew = Backbone.View.extend({
  events: {
    'submit': 'submit'
  },

  initialize: function (options) {
    this.board = options.board;
  },

  submit: function () {
    params = this.$el.serializeJSON();
    params["list"]["board_id"] = this.board.id;
    
  }
})
