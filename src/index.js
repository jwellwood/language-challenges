const challenge1 = require('./challenge1');
const challenge2 = require('./challenge2');
const challenge3 = require('./challenge3');
const challenge4 = require('./challenge4');
const challenge5 = require('./challenge5');

challenge1();
challenge2();
challenge3();
challenge4();
setTimeout(() => challenge5(), 1000); // use timeout for order in the console, because challenge4 runs async
