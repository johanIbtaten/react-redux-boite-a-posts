const confirm = (msg) => {
  return new Promise((resolve) => {
    let response = window.confirm(msg);
    if (response) {
      resolve();
    }
  });
};

export default confirm;
