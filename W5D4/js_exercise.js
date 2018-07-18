function madLib(str1,str2,str3) {
  str = 'We shall ${str1.toUpperCase()} the ${str2.toUpperCase()} ${str3.toUpperCase()}';

  return str;
}

function isSubstring(str, searchString) {
  return str.includes(searchString);
}

function fizzBuzz(array) {
  result = [];
  for(i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 5 != 0) {
      result.push(array[i]);
    } else if (array[i] % 5 == 0 && array[i] % 3 != 0) {
      result.push(array[i]);
    }
  }
  return result;
}

function isPrime(num) {
  for(i = 2; i < num; i++) {
    if (i != num && num % i == 0) {
      return false;
    }
  }
  return true;
}


function sumOfNPrimes(n) {
  let sum = 0;
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      sum += num;
      count++;

    }
      num++;
  }
  return sum
}
