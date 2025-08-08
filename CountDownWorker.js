self.onmessage = (e) => {
  let time = e.data;
  const stop = setInterval(() => {
    if (time <= 0) {
      clearInterval(stop);
      self.postMessage(0);
    } else {
      self.postMessage(time);
      time = time - 1000;
    }
  }, 1000);
};
