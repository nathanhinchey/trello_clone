TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST["boards/new"],

  tagName: 'form',

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  events: {
    'submit': 'submit'
  },

  submit: function (event) {
    event.preventDefault();
    var params = this.$el.serializeJSON();
    var board = new TrelloClone.Models.Board(params['board']);

    board.save({}, {
      success: function () {
        Backbone.history.navigate("boards/" + board.id, {
          trigger: true
        })
      }
    });
  }
})
