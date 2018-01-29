const addNums = (x, y) => {
  return x + y;
};

const callBackInvoker = cb => {
  return cb();
};

const each = (array,cb) => {
  for (let i = 0; i <= array.length; i++) {
    cb(array[i]);
  }
}

const iterator = (num, cb) => {
  for (let i = 1; i <= num; i++) {
    cb();
  }
};

module.exports = {
  addNums,
  callBackInvoker,
  iterator
};
