const lodash = require('lodash');

const items = [1,[2,[4,5],7]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);