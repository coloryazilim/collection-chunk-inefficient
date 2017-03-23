# collection-chunk-inefficient
Split array into chunks for Mango collection.

## How to install

```bash
meteor add color:collection-chunk-inefficient
```


```js
  const Products = new Mongo.Collection('products');
  
  // insert products example.
  Products.insert({ name: 'Product1' });
  Products.insert({ name: 'Product2' });
  Products.insert({ name: 'Product3' });
  Products.insert({ name: 'Product4' });

  Products.chunkInefficient(2)
  // [Array[2], Array[2]]
```
