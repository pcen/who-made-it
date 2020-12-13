// Returns the integer URL parameter named 'name'
// - pass useLocation as 'location' parameter
const getURLInt = (name, location) => {
  return parseInt(new URLSearchParams(location.search).get(name));
}

// Returns the string URL parameter named 'name'
// - pass useLocation as 'location' parameter
const getURLStr = (name, location) => {
  return new URLSearchParams(location.search).get(name);
}

// Returns true if every item in the array is in the set
const arrayInSet = (array, set) => {
  return array.every((e) => { return set.has(e); })
}

// Return a random integer between the given min and max
const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns a random element from the given array
const randFrom = array => {
  let index = randInt(0, array.length - 1);
  return array[index];
}

// Returns the contents of an array as a comma separated list
// the final element is additionally separated by 'and'
const commaAndAndSeparate = a => {
  return a.join(', ').replace(/,(?!.*,)/gmi, ', and');
}

export { getURLInt, getURLStr, arrayInSet, randInt, randFrom, commaAndAndSeparate };
