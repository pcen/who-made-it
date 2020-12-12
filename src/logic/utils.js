const getURLInt = (name, location) => {
  return parseInt(new URLSearchParams(location.search).get(name));
}

export { getURLInt };
