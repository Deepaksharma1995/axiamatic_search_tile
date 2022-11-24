export const debouncedInput = (callback, delay) => {
  let timer;
  return function (args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(args), delay);
  };
};
