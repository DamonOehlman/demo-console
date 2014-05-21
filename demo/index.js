var console = require('../');

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

// check a multiline strine displays as expected
console.log('hi\nthere');

// display an error
console.error('This broke: ', new Error('oops'));
