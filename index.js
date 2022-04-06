const inputHandler = document.getElementById("numberInput");
const submitButtonHandler = document.getElementById("submitButton");
const footerHandler = document.getElementById("footer");
const list = document.createElement("ul");
list.id = "attempts";
const body = document.getElementsByTagName("body")[0];

const addToTheList = (number, isPrime) => {
  const li = document.createElement("li");
  li.textContent = `${number} is ${isPrime ? 'a' : 'not a'} prime number`;
  li.className = isPrime ? "is-prime" : "not-prime";
  list.append(li);
  body.insertBefore(list, footerHandler);
};

const checkPrime = number => {
    const checkedNumber = Number(number);
  if (checkedNumber === 1 || checkedNumber < 1) {
    return addToTheList(checkedNumber, false);
  } else {
    for (let i = 2; i < checkedNumber; i++) {
      if (checkedNumber % i === 0) return addToTheList(checkedNumber, false);
    }
    return addToTheList(checkedNumber, true);
  }
};

submitButton.addEventListener("click", event => {
  event.preventDefault();
  checkPrime(inputHandler.value);
  inputHandler.value = '';
});
