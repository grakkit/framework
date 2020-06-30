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

### `framework.base.encode(string)`
Encodes a `string` to base64 format.

### `framework.base.decode(string)`
Decodes a `string` from base64 format.

### `framework.camel(string, separator)`
Converts a `string` into [camel case format](https://techterms.com/definition/camelcase), with words being seperated by `seperator`.

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

### `framework.dist(source, target, flat)`
Calculates the distance between the `source` and `target` locations. If the locations are not in the same world, the function will return `Infinity`. You can also set `flat` to true, in which case the Y axis will be ignored.

### `framework.entries(object)`
Converts the input `object` into an array of entries. The entry format differs from `Object.entries` output:
```javascript
const object = { a: 'x', b: 'y', c: 'z' };

// returns [['a', 'x'], ['b', 'y'], ['c', 'z']]
Object.entries(object);

// returns [ { key: 'a', value: 'x' }, { key: 'b', value: 'y' }, { key: 'c', value: 'z' } ];
framework.entries(object);
```

### `framework.extend(...objects)`
An alias for `Object.assign(...objects)`.

### `framework.flat(array)`
Removes false-like values from the input `array`. A false-like value when passed into `Boolean` will return false.

### `framework.interval(script, period)`
Executes a `script` every `period` milliseconds, starting after `period` milliseconds. Returns an object with a `.cancel()` method to stop the loop.

### `framework.key(object, value)`
If the provided `object` contains an entry whose value matches the input `value`, return that entry's key.

### `framework.keys(object)`
An alias for `Object.keys(object)`.

### `framework.lower(string)`
Returns the lowercased version of the input `string`.

### `framework.match(object, filter)`
Compares an object to a `filter`.

If the `filter` is a function, return the output of `filter(object)`.

If the `filter` is an array, map each element in the `filter` to `framework.match(object, element)`, and if at least one element in this mapped array is true, return true, otherwise, return false.

If the `filter` is an object, map each key in the `filter` object to `framework.match(object[key], filter[key])`, and if all elements in the mapped array are true, return true, otherwise, return false.

If the `filter` is a primitive value or a non-standard object, return true if the `object === filter`. A non-standard object is an object whose `typeof` value is `"object"`, but whose constructor is not `Object` or `Array`.

### `framework.mirror(options)`
Creates an array whose values can be accessed and modified by set-like functions, then returns an object to dynamically `get` and `set` the array. This is useful for specific cases involving interactions between getter/setters and java sets or maps.

### `framework.object(array, consumer)`
Converts the output `array` of `framework.entries` back into an object, with an optional consumer to process each entry before being added. False-like return values from this consumer will not be added to the output object.

### `framework.pascal(string, separator)`
Converts a `string` into [pascal case format](https://techterms.com/definition/pascalcase), with words being seperated by `seperator`.

### `framework.simplify(object)`
Creates a clone of the input `object` and recursively removes false-like or circular values. This works with arrays, too.

### `framework.splice(string, separator, ...index)`
Splits the input `string` with the `seperator`, slices the array with `array.slice(...index)`, and rejoins the sliced array with the `seperator`.

### `framework.strain(object, consumer)`
Creates a clone of the input `object`, and filters each entry with the provided `consumer`. If no consumer is provided, then removes entries whose values are false-like.

### `framework.timeout(script, period)`
Executes a `script` after `period` milliseconds. Returns an object with a `.cancel()` method to abort the execution.

### `framework.type(object)`
Returns a type string for the given object. This type string is first checked by formatting the output of `toString.call(object)`, and if that returns `"Object"`, then instead return the object's constructor name.

### `framework.upper(string)`
Returns the uppercased version of the input `string`.

### `framework.uuid(string)`
Converts the input `string` into a [UUID](https://docs.oracle.com/javase/10/docs/api/java/util/UUID.html), and if no string is provided, creates a random [UUID](https://docs.oracle.com/javase/10/docs/api/java/util/UUID.html).

### `framework.values(object)`
An alias for `Object.values(object)`.

# Polyfills
### `atob(), btoa()`
```javascript
framework.extend(global, {
   atob: (string) => {
      return framework.base.decode(string);
   },
   btoa: (string) => {
      return framework.base.encode(string);
   }
});
```

### `clearImmediate(), clearInterval(), clearTimeout(), setImmediate(), setInterval(), setTimeout()`
```javascript
framework.extend(global, {
   clearImmediate: (index) => {
      framework.tasks[index].cancel();
   },
   clearInterval: (index) => {
      framework.tasks[index].cancel();
   },
   clearTimeout: (index) => {
      framework.tasks[index].cancel();
   },
   setImmediate: (script) => {
      framework.timeout(script, 0);
      return framework.tasks.length - 1;
   },
   setInterval: (script, period) => {
      framework.interval(script, period);
      return framework.tasks.length - 1;
   },
   setTimeout: (script, period) => {
      framework.timeout(script, period);
      return framework.tasks.length - 1;
   }
});
```