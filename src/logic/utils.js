const getURLInt = (name, location) => {
  return parseInt(new URLSearchParams(location.search).get(name));
}

const getURLStr = (name, location) => {
  return new URLSearchParams(location.search).get(name);
}

export { getURLInt, getURLStr };
