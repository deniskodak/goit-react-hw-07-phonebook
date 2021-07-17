import { firstNames, secondNames } from '../arrayOfNames/arrayOfNames';

function getRandom(length) {
  return Math.floor(
    Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1),
  );
}

const namesRandomaiser = array =>
  array[Math.floor(Math.random() * array.length)];

const createRandomContact = () => {
  const firstName = namesRandomaiser(firstNames);
  const secondName = namesRandomaiser(secondNames);
  const fullName = `${firstName} ${secondName}`;
  const phoneNumber = getRandom(8);
  return { fullName, phoneNumber };
};

export { createRandomContact };
