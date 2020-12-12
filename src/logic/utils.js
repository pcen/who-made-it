const getURLInt = (name, location) => {
  return parseInt(new URLSearchParams(location.search).get(name));
}

const getURLStr = (name, location) => {
  return new URLSearchParams(location.search).get(name);
}

const arrayInSet = (array, set) => {
  array.forEach(element => {
    if (!set.has(element)) { return false; }
  });
  return true;
}

export { getURLInt, getURLStr, arrayInSet };
