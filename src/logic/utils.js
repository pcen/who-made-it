const getURLInt = (name, location) => {
  return parseInt(new URLSearchParams(location.search).get(name));
}

const getURLStr = (name, location) => {
  return new URLSearchParams(location.search).get(name);
}

const arrayInSet = (array, set) => {
  return array.every((e) => { return set.has(e); })
}

export { getURLInt, getURLStr, arrayInSet };
