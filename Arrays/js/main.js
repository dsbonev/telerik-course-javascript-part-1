(function () {
  'use strict';

  (function () {
    console.log('');
    console.log('Write a script that ' +
      'allocates array of 20 integers and ' +
      'initializes each element by its index multiplied by 5. ' +
      'Print the obtained array on the console.');

    var numCount = 20,
      numbers = [];

    for (var i = 0; i < numCount; i += 1) {
      numbers.push(i * 5);
    }

    console.log(numbers.toString());
  })();

  (function () {
    console.log('');
    console.log('Write a script that ' +
      'compares two char arrays lexicographically (letter by letter).');

    var first = [],
      second = [],
      fillWithRandomChars = function (array) {
        var length = array.length,
          lowerBoundCharCode = 'a'.charCodeAt(0),
          upperBoundCharCode = 'z'.charCodeAt(0);

        for (var i = 0; i < length; i += 1) {
          array[i] = String.fromCharCode(getRandomInt(lowerBoundCharCode, upperBoundCharCode));
        }
      },
      compare = function (first, second) {
        var smallerLength = Math.min(first.length, second.length);

        for (var i = 0; i < smallerLength; i += 1) {
          var firstChar = first[i],
            secondChar = second[i];

          if (firstChar === secondChar) {
            continue;

          } else {
            if (firstChar < secondChar) {
              return -1;

            } else {
              return 1;

            }
          }
        }

        if (first.length < second.length) {
          return -1;

        } else if (first.length > second.length) {
          return 1;

        } else {
          return 0;

        }
      };

    first.length = getRandomInt(5, 9);
    fillWithRandomChars(first);

    second.length = getRandomInt(5, 9);
    fillWithRandomChars(second);

    console.log('Compare', first.toString(), 'and', second.toString());
    var result = compare(first, second);
    if (result < 0) {
      console.log('first:', first.toString());
      console.log('second:', second.toString());

    } else if (result === 0) {
      console.log('arrays are equal');

    } else {
      console.log('first:', second.toString());
      console.log('second:', first.toString());

    }
  })();

  (function () {
    console.log('');
    console.log('Write a script that ' +
      'finds the maximal sequence of equal elements in an array.');

    var numbers = [];

    numbers.length = 10;

    for (var i = 0; i < numbers.length; i += 1) {
      numbers[i] = getRandomInt(5, 9);
    }

    console.log('numbers:', numbers.toString());

    var maximalSeq = [numbers[0]],
      currentSeq = [numbers[0]];

    numbers.reduce(function (prev, current, index) {
      if (prev === current) {
        currentSeq.push(current);

        if (currentSeq.length > maximalSeq.length) {
          maximalSeq = currentSeq;

        }
      } else {
        currentSeq = [current];

      }

      if (maximalSeq.length >= 2) {
        for (var i = 0; i < (maximalSeq.length - 1) - 1; i += 1) {
          if (maximalSeq[i] !== maximalSeq[i + 1]) {
            throw 'AssertionError: not an equal elements sequence ' + maximalSeq.toString() +
                '; was at index ' + index;
          }
        }
      }

      return current;
    });

    console.log('result:', maximalSeq.toString());
  })();

  (function () {
    console.log('');
    console.log('Write a script that ' +
      'finds the maximal increasing sequence in an array.');

    var numbers = [];

    numbers.length = 10;

    for (var i = 0; i < numbers.length; i += 1) {
      numbers[i] = getRandomInt(0, 9);
    }

    console.log('numbers:', numbers.toString());

    var maximalSeq = [numbers[0]],
      currentSeq = [numbers[0]];

    numbers.reduce(function (prev, current, index) {
      if (prev < current) {
        currentSeq.push(current);

        if (currentSeq.length > maximalSeq.length) {
          maximalSeq = currentSeq;

        }
      } else {
        currentSeq = [current];

      }

      if (maximalSeq.length >= 2) {
        for (var i = 0; i < (maximalSeq.length - 1) - 1; i += 1) {
          if (maximalSeq[i] >= maximalSeq[i + 1]) {
            throw 'AssertionError: not an increasing sequence ' + maximalSeq.toString() +
                '; was at index ' + index;
          }
        }
      }

      return current;
    });

    console.log('result:', maximalSeq.toString());
  })();

  (function () {
    console.log('');
    console.log('Write a script ' +
      'to sort an array. Use the "selection sort" algorithm');

    var numbers = [];

    numbers.length = 10;

    for (var i = 0; i < numbers.length; i += 1) {
      numbers[i] = getRandomInt(0, 9);
    }

    console.log('numbers:', numbers.toString());

    var minNumIndex,
      sorted = [],
      findMinNumIndex = function (item, index) {
        if (item < numbers[minNumIndex]) {
          minNumIndex = index;
        }
      };

    while (numbers.length >= 1) {
      minNumIndex = 0;

      numbers.forEach(findMinNumIndex);

      sorted.push(numbers.splice(minNumIndex, 1)[0]);
    }


    console.log('result:', sorted.toString());
  })();

  (function () {
    console.log('');
    console.log('Write a program ' +
      'that finds the most frequent number in an array');

    var numbers = [];

    numbers.length = 10;

    for (var i = 0; i < numbers.length; i += 1) {
      numbers[i] = getRandomInt(0, 9);
    }

    console.log('numbers:', numbers.toString());

    var numToCount = {};

    numbers.forEach(function (item) {
      var count = numToCount[item];

      if (count === undefined) {
        count = 0;
      }

      count += 1;
      numToCount[item] = count;
    });

    var maxCount = 0,
      mostFrequentNum;

    Object.keys(numToCount).forEach(function (item) {
      var count = numToCount[item];

      if (count > maxCount) {
        mostFrequentNum = item;
        maxCount = count;
      }
    });

    console.log('result:', mostFrequentNum, 'occurred', maxCount, 'times');
  })();

  (function () {
    console.log('');
    console.log('Write a program ' +
      'that finds the index of given element in a sorted array of integers ' +
      'by using the binary search algorithm');

    var numbers = [],
      binarySearch = function (items, item) {
        var min = 0,
          max = items.length - 1,
          middle = Math.floor((min + max) / 2);

        while(items[middle] !== item && min < max){
          if (item < items[middle]){
            max = middle - 1;

          } else if (item > items[middle]){
            min = middle + 1;

          }

          middle = Math.floor((min + max) / 2);
        }

        return (items[middle] !== item) ? -1 : middle;
      };

    numbers.length = 10;

    for (var i = 0; i < numbers.length; i += 1) {
      numbers[i] = getRandomInt(0, 9);
    }

    numbers.sort();

    console.log('numbers:', numbers.toString());

    for (i = 0; i < numbers.length; i += 1) {
      console.log('index of', i, ':', binarySearch(numbers, i));
    }
  })();

  //https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

})();
