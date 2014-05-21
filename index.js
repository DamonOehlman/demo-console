/* jshint node: true */
'use strict';

var reSpace = /\s/;
var theme;
var items;

var fs = require('fs');
var themes = {
  simple: fs.readFileSync('./themes/simple.css', 'utf8')
};

/**
  # demo-console

  Show a demo console when working with [requirebin](http://requirebin.com/?gist=6079475). Just
  include it in one of your require bin demos like this:

  ## Example Usage

  <<< demo/index.js

  ## Reference

**/

/**
  ### console.log()

  As per the browser `console.log` statement
**/
exports.log = function() {
  var item = document.createElement('li');

  // ensure we have items
  items = items || initConsole();

  // initialise the theme if not initialised
  theme = theme || initTheme();

  // initialise the item
  item.innerHTML = [].slice.call(arguments).map(renderData).join(' ');

  // add to the list
  items.appendChild(item);

  setTimeout(function() {
    items.parentNode.scrollTop = items.offsetHeight;
  }, 100);
};

/**
  ### console.useTheme(name)

  Tell the demo console that you wish to use a particular theme.
**/
exports.useTheme = function(name) {
  theme = initTheme(name);
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
  container.className = 'democonsole';
  container.appendChild(list);

  // add the console to the dom
  document.body.appendChild(container);

  return list;
}

function initTheme(theme) {
  var stylesheet = document.getElementById('democonsole-theme');

  // if found, then remove it
  if (stylesheet) {
    document.head.removeChild(stylesheet);
  }

  // create a link element to bring the demo console style in
  stylesheet = document.createElement('style');
  stylesheet.id = 'democonsole-theme';
  stylesheet.innerText = theme || themes.simple;

  // add to the dom
  document.head.appendChild(stylesheet);

  // return the stylesheet
  return stylesheet;
}

function renderData(data, index) {
  var initialItem = index === 0;

  function extractData(key) {
    var hasSpace = reSpace.test(key);
    var quoteChar = hasSpace ? '\'' : '';

    return '<div data-type="object-key">' +
      span(quoteChar + key + quoteChar + ': ', 'key') +
      renderData(data[key]) +
      '</div>';
  }

  if (typeof data == 'undefined') {
    return span('undefined', 'undefined');
  }
  if (data === true || data === false) {
    return span(data, 'boolean');
  }
  else if (Array.isArray(data)) {
    return span('[') + data.map(function(entry) {
      return renderData(entry);
    }).join(', ') + span(']');
  }
  else if (typeof data == 'string' || (data instanceof String)) {
    return span(initialItem ? data : ('\'' + data + '\''), 'string');
  }
  else if (data === null) {
    return span('null', 'null');
  }
  else if (data instanceof Window) {
    return span('window', 'window');
  }
  else if (data instanceof DocumentType) {
    return 'doctype: ' + data.name;
  }
  else if (data instanceof HTMLCollection) {
    return span('[]', 'html-collection');
  }
  else if (data instanceof HTMLDocument) {
    return [].slice.call(document.childNodes).map(renderData);
  }
  else if (data instanceof HTMLElement) {
    return data.tagName;
  }
  else if (typeof data == 'object') {
    return '<div data-type="object">' + span('{') +
      Object.keys(data).map(extractData).join('<div class="comma-float">,</div>') +
      span('}') + '</div>';
  }
  else {
    return span(data, typeof data);
  }
}

function span(content, dataType) {
  return '<span data-type="' + (dataType || '') + '">' + content + '</span>';
}
