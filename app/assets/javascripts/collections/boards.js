TrelloClone.Collections.Boards = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,

  url: "api/boards",

  getOrFetch: function (id) {
    var model = this.get(id);
    var collection = this;
    if (!model) {
      model = new this.model({id: id})
      model.fetch({
        success: function () {
          collection.add(model);
        }
      });
    } else {
      model.fetch();
    }

    return model;
  }
})
