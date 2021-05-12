const olderThen18 = function (age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};



const checkIfAdult = function (age) {
  if (olderThen18(age)) {
    return "Hello Adult";
  } else {
    return "Hello Kid";
  }
};

console.log(checkIfAdult(19));