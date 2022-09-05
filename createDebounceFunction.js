const createDebounceFunction = (cb, delay) => {
  let callsCount = 0;
  return () => {
    callsCount += 1;
    const timerId = setTimeout(cb, delay);
    if (callsCount > 1) {
      clearTimeout(timerId);
      setTimeout(cb, delay);
    }
  }
};
