const workString = (() => {
  const capitalize = (string) => string.toUpperCase();

  const reverseString = (string) => string.split('').reverse().join('');

  return { capitalize, reverseString };
})();


export default workString;