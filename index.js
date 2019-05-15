sumOfNumbers = e => {
  const firstNumber = Number(e[0].value);
  const secondNumber = Number(e[1].value);

  //   console.log(typeof a);
  let result = (firstNumber + secondNumber).toFixed(1);
  alert(`Результат \n${result}`);

  e.preventDefault();
};
