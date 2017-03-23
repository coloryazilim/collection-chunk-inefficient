Mongo.Collection.prototype.chunkInefficient = function(chunkSize) {
  let out = [];
  const array = this.find().fetch();

  for (let i=0; i < array.length; i+=chunkSize) {
    out.push(array.slice(i, i+chunkSize));
  }

  return out;
};
