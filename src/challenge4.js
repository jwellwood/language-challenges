const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};
const triggers = [
  async () => await showMessage([200, 'third']),
  async () => await showMessage([100, 'second']),
];

// The original function 'run'
// const run = (triggers) => {
//   console.log('first');
//   triggers.forEach((t) => t());
// };

// The modified function:
const run = (triggers) => {
  const trigArr = [];
  for (let i = 0; i < triggers.length; i++) {
    trigArr.push(triggers[i]);
  }

  trigArr.push(async () => await console.log('first'));
  trigArr.forEach(
    (trigger, i) =>
      setTimeout(() => {
        trigger();
      }, i * 200)
    // 'third'  fires at (0 * 200 + 200) = 200ms,
    // 'second' fires at (1 * 200 + 100) = 300ms,
    // 'first'  fires at (2 * 200) = 400ms
  );
};

// Log the results

const challenge4 = () => {
  console.log({
    CHALLENGE: '************** CHALLENGE 4 *********************',
  });
  run(triggers);
};

module.exports = challenge4;
