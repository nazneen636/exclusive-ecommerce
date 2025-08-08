self.onmessage = (e) => {
  console.log("hello");

  let time = e.data;
  const stop = setInterval(() => {
    if (time <= 0) {
      clearInterval(stop);
      self.postMessage(time);
    } else {
      time = time - 1000;
      self.postMessage(time);
    }
  }, 1000);
};
