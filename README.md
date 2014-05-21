# demo-console

Show a demo console when working with [requirebin](http://requirebin.com/?gist=6079475). Just
include it in one of your require bin demos like this:


[![NPM](https://nodei.co/npm/demo-console.png)](https://nodei.co/npm/demo-console/)



## Example Usage

```js
var console = require('demo-console');

// log a simple string
console.log('hello');

// log a numeric value
console.log(5);

// log an array of values
console.log([1, 2, 3]);

// log an object
console.log({ name: 'Damon' });

// log a document (provides high level information only)
console.log(document);

// log a more complicated document
console.log({ a: [1, 2, 3, 4], b: true, c: { d: 'hello', e: false, f: ['a', 'b', 'c', 'd'] }});

// log a piece of text with additional data
console.log('hello', { name: 'Damon' });

```

## Reference

### console.log()

As per the browser `console.log` statement

### console.useTheme(name)

Tell the demo console that you wish to use a particular theme.

## License(s)

### MIT

Copyright (c) 2014 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
