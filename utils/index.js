const getRandomNumber = (min: number, max: number) =>
  Math.floor(min + (Math.random() * ((max + 1) - min)));

export { getRandomNumber }; // eslint-disable-line
