# Framework Module

#### About
The framework module provides many useful utility functions not implemented by the standard grakkit environment.

You will need grakkit installed on your server to use this. [Click here](https://github.com/grakkit/grakkit/wiki) for an installation guide.

#### Installation
Use `/module add grakkit/framework` to install the module, and `/module update grakkit/framework` to update it if necessary.

#### Usage
Once installed, this code will import this module to the `framework` variable.
```javascript
const framework = core.import('grakkit/framework');
```

# Documentation
### `framework.array(object)`
Converts an array-like `object` into a fully qualified array. Array-like objects can be one of the following:
- an object with a length property and numeric keys
- an object with a `.forEach` iterator method
- an object with a `.forEachRemaining` iterator method

These criteria cover the following common data types:
- JS Set
- JS String
- JS Array
- [Java Iterator](https://docs.oracle.com/javase/10/docs/api/java/util/Iterator.html)
- [Java Set](https://docs.oracle.com/javase/10/docs/api/java/util/Set.html)
- [Java ArrayList](https://docs.oracle.com/javase/10/docs/api/java/util/ArrayList.html)
- [Java Map](https://docs.oracle.com/javase/10/docs/api/java/util/Map.html) (returns an array of its entries)
### `framework.base.encode(string)`
Encodes a `string` to base64 format.

### `framework.base.decode(string)`
Decodes a `string` from base64 format.

### `framework.camel(string, separator)`
Converts a `string` into camel case format, with words being seperated by `seperator`.

### `framework.clamp(number, min, max)`
If the `number` is more than the `max`, return the `max`. If the number is less than the `min`, return the `min`. Otherwise, return the `number`.

### `framework.collect(...items)`
Creates a new [ArrayList](https://docs.oracle.com/javase/10/docs/api/java/util/ArrayList.html) from the specified `items`.

### `framework.define(object, consumer)`
Converts each entry from the input `object` into getters and setters. The optional `consumer` function can be defined to customize these getters and setters.

Example: Log to the console whenever someone gets or sets the value of `object.foo` or `object.bar`:
```javascript
// create object
const object = framework.define({ foo: 'abc', bar: 'xyz' }, (entry) => {
   return {
      get: () => {
         console.log(`object.${entry.key} has been accessed. value: ${entry.value}`);
         return entry.value;
      },
      set: (value) => {
         console.log(`object.${entry.key} has been modified. value: ${value}`);
         entry.value = value;
      }
   }
});

// logs "object.foo has been accessed. value: abc"
const foo = object.foo;

// logs "object.foo has been modified. value: test"
object.foo = 'test';
```

```javascript
framework.extend(global, {
   clearImmediate: (task) => {
      task.cancel();
   },
   clearInterval: (task) => {
      task.cancel();
   },
   clearTimeout: (task) => {
      task.cancel();
   },
   setImmediate: (script) => {
      return framework.timeout(script, 0);
   },
   setInterval: (script, period) => {
      return framework.interval(script, period);
   },
   setTimeout: (script, period) => {
      return framework.timeout(script, period);
   }
});
```