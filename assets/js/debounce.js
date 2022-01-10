function debounce(callback, delay) {
  let timer;

  return (name) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(name);
      timer = null;
    }, delay);
  }
};