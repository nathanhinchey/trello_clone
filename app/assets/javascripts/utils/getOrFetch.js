// Backbone.Collection.getOrFetch = function (id) {
//   var model = this.get(id);
//   var collection = this;
//   if (!model) {
//     model = new this.model({id: id})
//     model.fetch({
//       success: function () {
//         collection.add(model);
//       }
//     });
//   } else {
//     model.fetch();
//   }
//
//   return model;
// }

// _QUESTION_
// Why doesn't this add an instance method to the collections that use
// Backbone.Collection.extend?
