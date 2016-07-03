function min(arg1, arg2) {
if (arg1 === arg2) {
  return null;
}
else if ((arg1 - arg2) < 0) {
  return arg1;
}

else {
  return arg2;
}
}

var result = min(4, 2);

///////////////////////////////////////////////////////

function test(input) {
  function oddEven(target) {
    if (target < 0) {
      return null;
    }
    else if (target == 0) {
      return "even";
    }
    else if (target == 1) {
      return "odd";
    }
    else {
      return oddEven(target-2);
    }
  }
  return oddEven(input);
}

var result = test(0);
console.log(result);

/////////////////////////////////////////////////////////

function countB(str) {
  return countChar(str, "B");
}

function countChar(str1, ch) {
  var count = 0;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] === ch) {
      count++;
    }
  }
  return count;
}

var result = countB("BBC");
console.log(result);
