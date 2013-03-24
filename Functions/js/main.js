(function () {
  'use strict';

  (function () {
    console.log('');
    console.log('Write a function that ' +
      'returns the last digit of given integer as an English word.');

    function getDigitName(digit) {
      switch(digit) {
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
        default: return 'not a digit: ' + digit;
      }
    }

    function getLastDigit(number) {
      return number % 10;
    }

    var number = getRandomInt(100, 999);

    console.log('the last digit of', number, 'is', getDigitName(getLastDigit(number)));
  })();

  (function () {
    console.log('');
    console.log('Write a function that reverses the digits of given decimal number.');

    function reverse(number) {
      var digits = [];

      while (number >= 10) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
      }

      digits.push(number);

      return digits.join('');
    }

    var number = getRandomInt(100, 999);

    console.log('reversed version of', number, 'is', reverse(number));
  })();

  (function () {
    console.log('');
    console.log('Write a function that ' +
      'finds all the occurrences of word in a text');

    var text = 'В портфолиото от безплатни обучения на Академията ' +
      'се включва още една страхотна инициатива: ' +
      'тренировки по състезателно програмиране - Алго академия',
      word = 'Академия',
      indexesOf = (function () {
        function caseSensitiveIndexesOf(word, text) {
          var result = [];

          var index = text.indexOf(word);

          while (index >= 0) {
            result.push(index);
            index = text.indexOf(word, index + 1);
          }

          return result;
        }

        function caseInsensitiveIndexesOf(word, text) {
          var result = [],
            regexp = new RegExp(word, 'gi');

          var match = regexp.exec(text);

          while (match) {
            result.push(match.index);
            match = regexp.exec(text);
          }

          return result;
        }

        return function (word, text, caseSensitive) {
          return caseSensitive ?
            caseSensitiveIndexesOf(word, text) :
            caseInsensitiveIndexesOf(word, text);
        };
      })();

    console.log('text:', text);
    console.log('word:', word);
    console.log('occurrences');
    console.log('case sensitive:', indexesOf(word, text, true).toString());
    console.log('case insensitive:', indexesOf(word, text).toString());
  })();

  (function () {
    console.log('');
    console.log('Write a function ' +
      'to count the number of divs on the web page.');

    function getDivCount(document) {
      return document.querySelectorAll('div').length;
    }

    document.body.appendChild(document.createElement('div'));

    console.log('result:', getDivCount(document));
  })();

  (function () {
    console.log('');
    console.log('Write a function that ' +
      'counts how many times given number appears in given array. ' +
      'Write a test function to check if the function is working correctly.');

    var numbers,
      occurrenceCount = function (items, item) {
        var result = 0;

        var index = items.indexOf(item);

        while (index >= 0) {
          result += 1;
          index = items.indexOf(item, index + 1);
        }

        return result;
      },
      testOccurrenceCount = function (items, item, expectedCount) {
        console.log('items:', items.toString());

        var count = occurrenceCount(items, item);

        console.log('occurrence count of', item, ':',
          'expected:', expectedCount,
          'actual:', count,
          'passed:', count === expectedCount ? 'true' : 'false');
      };

    numbers = [];
    testOccurrenceCount(numbers, 1, 0);

    numbers = [-1, 1, 1, 3];
    testOccurrenceCount(numbers, -1, 1);
    testOccurrenceCount(numbers, 0, 0);
    testOccurrenceCount(numbers, 1, 2);
    testOccurrenceCount(numbers, 2, 0);
    testOccurrenceCount(numbers, 3, 1);
    testOccurrenceCount(numbers, 4, 0);
  })();

  (function () {
    console.log('');
    console.log('Write a function that ' +
      'checks if the element at given position in given array of integers ' +
      'is bigger than its two neighbors (when such exist)');

    var numbers = [],
      isBiggerThanNeighbors = function (items, index) {
        if (index < 0 || index >= items.length) {
          return false;
        }

        if (items.length < 3) {
          return false;
        }

        var isFirst = index === 0,
          isLast = index === items.length - 1;

        if (isFirst || isLast) {
          return false;
        }

        var item = items[index],
          leftNeighbor = items[index - 1],
          rightNeighbor = items[index + 1];

        return item > leftNeighbor && item > rightNeighbor;
      };

    numbers.length = 10;

    for (var i = 0; i < numbers.length; i += 1) {
      numbers[i] = getRandomInt(0, 9);
    }

    console.log('numbers:', numbers.toString());

    for (i = -1; i <= numbers.length; i += 1) {
      console.log('is bigger than neighbors at index', i, ':', isBiggerThanNeighbors(numbers, i));
    }

    console.log('');
    console.log('Write a Function that ' +
      'returns the index of the first element in array ' +
      'that is bigger than its neighbors, or -1, if there’s no such element.' +
      'Use the function from the previous exercise.');

    var indexOfFirstItemBiggerThanNeigbors = function (items) {
      for (var i = 0; i < items.length; i += 1) {
        if (isBiggerThanNeighbors(items, i)) {
          return i;
        }
      }

      return -1;
    };

    console.log('numbers:', numbers.toString());
    console.log('result:', indexOfFirstItemBiggerThanNeigbors(numbers));
  })();

  //https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

})();
