TrelloClone.Views.ListNew = Backbone.View.extend({
  events: {
    'submit': 'submit'
  },

  tagName: 'form',

  template: JST['lists/new'],

  initialize: function (options) {
    this.board = options.board;

  },

  render: function () {
    var content = this.template({list: this.model});
    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    params = this.$el.serializeJSON();
    params["list"]["board_id"] = this.board.id;
    var list = new TrelloClone.Models.List();
    var lists = this.board.lists();
    list.save(params["list"], {
      success: function () {
        lists.add(list);
      }
    })
    Backbone.history.navigate("boards/" + this.board.id, {trigger: true})
  }
})
