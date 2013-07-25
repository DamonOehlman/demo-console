/* jshint node: true */
'use strict';

/**
# demo-console

Show a demo console when working with [requirebin](http://requirebin.com). Just 
include it in one of your require bin demos like this:

```js
var console = require('demo-console');
```
**/
function DemoConsole() {
  if (! (this instanceof DemoConsole)) {
    return new DemoConsole(theme);
  }
}

// export
module.exports = DemoConsole;

/**
## log(data)

You know, log stuff, like...

Strings:

```js
console.log('hello');
```

Numbers:

```js
console.log(5);
```

Arrays:

```js
console.log([1, 2, 3]);
```

Objects:

```js
console.log({ name: 'Damon' });
```

**/
DemoConsole.prototype.log = function() {
  // initialise items if required
  this.items = this.items || initConsole();

  // initialise the theme if not initialised
  this.theme = this.theme || initTheme();

  // add the item
};

/**
## useTheme(name)

Tell the demo console that you wish to use a particular theme.
**/
DemoConsole.prototype.useTheme = function(name) {
  this.theme = initTheme(name);
};

/* internals */

function initConsole() {
  // look for the container list
  var container;
  var list = document.querySelector('.democonsole ul');

  // if we found the list return it
  if (list) {
    return list;
  }

  // otherwise, go ahead and create it
  container = document.createElement('div');
  list = document.createElement('ul');

  // initialise stuff
  el.class = 'democonsole';
  el.appendChild(list);

  // add the console to the dom
  document.body.appendChild(el);

  return list;
}

function initTheme(theme) {
  var stylesheet = document.getElementById('democonsole-theme');

  // if found, then remove it
  if (stylesheet) {
    document.head.removeChild(stylesheet);
  }

  // create a link element to bring the demo console style in
  stylesheet = document.createElement('link');
  stylesheet.id = 'democonsole-theme';
  stylesheet.setAttribute('rel', 'stylesheet');
  stylesheet.setAttribute('href', 'http://damonoehlman.github.io/demo-console/themes/' + (theme || 'default') + '.css');

  // add to the dom
  document.head.appendChild(stylesheet);

  // return the stylesheet
  return stylesheet;
}