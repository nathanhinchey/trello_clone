TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  tagName: "li",
  className: "board",

  template: JST['boards/show'],

  initialize: function() {

    this.listenTo(this.model, "sync", this.render);

    this.model.fetch({
      success: function() {

        var list = this.model.lists().each(function(list){

          var view = new TrelloClone.Views.ListShow({model: list});
          this.addSubview(".lists", view.render())

        }.bind(this))

      }.bind(this)
    })
    //

  },

  render: function () {
    content = this.template({board: this.model});
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});
