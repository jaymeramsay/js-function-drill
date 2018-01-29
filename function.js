var fn = {};

fn.nothing = function () {
  return undefined;
};

fn.true = function () {
  return false;
};

fn.emptyString = function () {
  return '';
};

fn.hello = function () {
  return 'Hello, javascript!';
};

fn.fnord = function () {
  return 23;
};

fn.skiddoo = function () {
  return '23 Skiddoo';
};

fn.emptyArray = function () {
  return [];
};

fn.oddArray = function () {
  return [1, 3, 5, 7, 9];
};

fn.fibArray = function () {
  return [1, 1, 2, 3, 5, 8, 13];
};

// fn.tenThousand = function () { //this one isn't right and I don't know why
//   let array = [];
//   for (let i = 1; i <= 10000; i++) {
//     array.push(i);
//     return array;
//   }
// };

fn.emptyObject = function () {
  return {};
};

fn.simpleObject = function () {
  return {
    'foo': 'bar'
  };
};

fn.oddEvenObject = function () {
  return {
    1: 2,
    3: 4,
    5: 6,
    7: 8,
  };
};

fn.alphaObject = function () {
  return {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
  };
};

fn.fiveArr = function () {
  return [{},
    {},
    {},
    {},
    {},
  ];
};

fn.
// define functions on the fn object like this:
// fn.functionName = function() { ... }
// test with 'npm test'

module.exports = fn;
