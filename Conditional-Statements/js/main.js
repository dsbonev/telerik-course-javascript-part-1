(function () {
  'use strict';

  (function () {
    console.log('');
    console.log('Write an if statement' +
      ' that examines two integer variables and exchanges their values' +
      ' if the first one is greater than the second one');

    var firstNumber = getRandomInt(0, 9),
      secondNumber = getRandomInt(0, 9);

    console.log('first number is', firstNumber, ', second number is', secondNumber);

    if (firstNumber > secondNumber) {
      var temp = firstNumber;
      firstNumber = secondNumber;
      secondNumber = temp;
    }

    console.log('first number is', firstNumber, ', second number is', secondNumber);
  })();

  (function () {
    console.log('');
    console.log('Write a script ' +
      'that shows the sign (+ or -) of the product of three real numbers without calculating it. ' +
      'Use a sequence of if statements.');

    var numbers = [getRandomInt(-9, 9), getRandomInt(-9, 9), getRandomInt(-9, 9)],
      hasZero = false,
      negativeNumCount = 0,
      productSign = '+';

    console.log('numbers: ', numbers.toString());

    hasZero = numbers.some(function (item) {
      if (item === 0) {
        return true;
      }

      if (item < 0) {
        negativeNumCount += 1;
      }
    });

    if (!hasZero && (negativeNumCount % 2 !== 0)) {
      productSign = '-';
    }

    console.log('product sign: ', productSign,
      ', hasZero: ', hasZero,
      ', negativeNumCount: ', hasZero ? 'N/A' : negativeNumCount);
  })();

  (function () {
    console.log('');
    console.log('Write a script ' +
      'that finds the biggest of three integers using nested if statements.');

    var first = getRandomInt(0, 9),
      second = getRandomInt(0, 9),
      third = getRandomInt(0, 9),
      biggest;

    console.log('numbers: ', first, second, third);

    if (first > second) {
      if (first > third) {
        biggest = first;

      } else {
        biggest = third;

      }
    } else {
      if (second > third) {
        biggest = second;

      } else {
        biggest = third;

      }
    }

    console.log('biggest: ', biggest);
  })();

  (function () {
    console.log('');
    console.log('Sort 3 real values in descending order using nested if statements.');

    var first = getRandomInt(0, 9),
      second = getRandomInt(0, 9),
      third = getRandomInt(0, 9),
      sorted = [];

    console.log('numbers: ', first, second, third);

    if (first > second) {
      if (first > third) {
        sorted[0] = first;

        if (second > third) {
          sorted[1] = second;
          sorted[2] = third;

        } else {
          sorted[1] = third;
          sorted[2] = second;

        }
      } else {
        sorted[0] = third;
        sorted[1] = first;
        sorted[2] = second;

      }
    } else {
      if (second > third) {
        sorted[0] = second;

        if (first > third) {
          sorted[1] = first;
          sorted[2] = third;

        } else {
          sorted[1] = third;
          sorted[2] = first;

        }

      } else {
        sorted[0] = third;
        sorted[1] = second;
        sorted[2] = first;

      }
    }

    console.log('sorted: ', sorted.toString());
  })();

  (function () {
    console.log('');
    console.log('Write script that asks for a digit ' +
      'and depending on the input shows the name of that digit using a switch statement.');

    function getDigitName(digit) {
      switch(digit) {
        case '0': return 'zero';
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        default: return 'not a digit: ' + digit;
      }
    }

    alert(getDigitName(prompt('Enter a digit to get its name', 0)));
  })();

  (function () {
    console.log('');
    console.log('Write a script that enters the coefficients a, b and c of a quadratic equation\n' +
      'a*x2 + b*x + c = 0\n' +
      'and calculates and prints its real roots. ' +
      'Note that quadratic equations may have 0, 1 or 2 real roots.');

    var message = 'Enter quadratic equation\u0027s coefficient ',
      a = parseFloat(prompt(message + 'a', 0)),
      b = parseFloat(prompt(message + 'b', 0)),
      c = parseFloat(prompt(message + 'c', 0)),
      determinant,
      x1,
      x2,
      NaNMessage = ' is not a number';

    if (isNaN(a)) {
      alert('a' + NaNMessage);
      return;
    }

    if (isNaN(b)) {
      alert('b' + NaNMessage);
      return;
    }

    if (isNaN(c)) {
      alert('c' + NaNMessage);
      return;
    }

    if (a !== 0) {
      determinant = b * b - 4 * a * c;

      if (determinant > 0) {
        x1 = (-b + Math.sqrt(determinant)) / (2 * a);
        x2 = (-b - Math.sqrt(determinant)) / (2 * a);
        alert('x1= ' + x1 + '; x2= ' + x2);

      } else if (determinant === 0) {
        x1 = (-b) / (2 * a);
        alert('x1 = x2 =' + x1);

      } else {
        alert('There are no real roots');

      }
    } else if (b !== 0) {
      x1 = (-c) / b;
      alert('x1,2 = ' + x1);

    } else {
      alert('Not a quadratic equation. a: ' + a + ', b: ' + b);

    }
  })();


  (function () {
    console.log('');
    console.log('Write a script that finds the greatest of given 5 variables.');

    var currentNum,
      greatestNum = Number.NEGATIVE_INFINITY,
      numCount = 5,
      currentCount = 0;

    alert('Enter 5 numbers to get the greatest of them');

    while (currentCount < numCount) {
      currentNum = parseFloat(prompt('Enter number ' + (currentCount + 1), 0));

      if (isNaN(currentNum)) {
        alert('Not a number!');
        return;
      }

      greatestNum = Math.max(greatestNum, currentNum);

      currentCount += 1;
    }

    alert('Greatest number is ' + greatestNum);
  })();

  (function () {
    console.log('');
    console.log('Write a script that converts a number in the range [0...999] ' +
      'to a text corresponding to its English pronunciation.');

    function onesName(number) {
      switch(number) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return 'not a number: ' + number;
      }
    }

    function tensName(number) {
      switch(number) {
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
        case 20: return 'twenty';
        case 30: return 'thirty';
        case 40: return 'fourty';
        case 50: return 'fifty';
        case 60: return 'sixty';
        case 70: return 'seventy';
        case 80: return 'eighty';
        case 90: return 'ninety';
        default:
          if (number < 10) {
            return onesName;

          } else {
            var ones = number % 10,
              tens = number - ones;

            return tensName(tens) + ' ' + onesName(ones);
          }
      }
    }

    function hundredsName(number) {
      switch(number) {
        case 100: return 'one hundred';
        case 200:
        case 300:
        case 400:
        case 500:
        case 600:
        case 700:
        case 800:
        case 900: return onesName(number / 100) + ' hundreds';
        default:
          if (number < 100) {
            return tensName(number);
          } else {
            var hundreds = Math.floor(number / 100) * 100,
              tens = number - hundreds;

            return hundredsName(hundreds) + ' ' + tensName(tens);
          }
      }
    }

    var num = getRandomInt(0, 999);

    console.log(num, ': ', hundredsName(num));
  })();

  //https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

})();
