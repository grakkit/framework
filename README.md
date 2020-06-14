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
#### `framework`


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