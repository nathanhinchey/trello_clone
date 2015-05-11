Backbone.Collection.prototype.getOrFetch = function (id) {
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

// QUESTION:
// Why doesn't this add an instance method to the collections that use
// Backbone.Collection.extend?
// _ANSWER_
// Use .prototype -- that's how you make 'instance' methods in JS
