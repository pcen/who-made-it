const getURLInt = (name, location) => {
  return parseInt(new URLSearchParams(location.search).get(name));
}

const getURLStr = (name, location) => {
  return new URLSearchParams(location.search).get(name);
}

const arrayInSet = (array, set) => {
  return array.every((e) => { return set.has(e); })
}

const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randFrom = list => {
  let index = randInt(0, list.length - 1);
  return list[index];
}

const commaAndAndSeparate = a => {
  return a.join(', ').replace(/,(?!.*,)/gmi, ' and');
}

export { getURLInt, getURLStr, arrayInSet, randInt, randFrom, commaAndAndSeparate };
