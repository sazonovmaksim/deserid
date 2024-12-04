let scale = {
  known: 'some value',
  unknown: 'another value'
};

console.log(scale.unknown); // Output: 'another value'

delete scale.unknown;

console.log(scale.unknown); // Output: undefined
