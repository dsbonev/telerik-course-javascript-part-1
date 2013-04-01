(function () {
  'use strict';

  (function () {
    console.log('');
    console.log('Durankulak numbers');

    function Solve(input) {
      var digitSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        durankulakNumber = input[0],
        getDigitValue = function (digit) {
          return digit.length === 1 ?
            digitSet.indexOf(digit) :
            (digitSet.indexOf(digit[0].toUpperCase()) + 1) * digitSet.length + digitSet.indexOf(digit[1]);
        };

      var digits = durankulakNumber.match(/[a-z]?[A-Z]/g);

      var result = 0;

      var digitCount = 0;
      for (var i = digits.length - 1; i >= 0; i -= 1) {
        result += getDigitValue(digits[i]) * Math.pow(168, digitCount);
        digitCount += 1;
      }

      return result.toString();
    }

    console.log('expected: 0, actual:', Solve(['A']));
    console.log('expected: 25, actual:', Solve(['Z']));
    console.log('expected: 168, actual:', Solve(['AA']));
    console.log('expected: 500, actual:', Solve(['BfI']));
    console.log('expected: 28392, actual:', Solve(['AAA']));
  })();

  (function () {
    console.log('');
    console.log('Joro the Rabbit');

    function Solve(input) {
      var numbers = input[0].split(', ').map(function (item) {
          return parseInt(item, 10);
        }),
        visitedPositions = [],
        maxVisitedPositionCount = 0,
        step,
        maxStep = numbers.length - 1;

      for (var i = 0; i < numbers.length; i += 1) {
        visitedPositions.length = 0;
        var currentPos = i;
        var currentValue = numbers[i];
        var nextPos = i
        var nextVal;

        while (visitedPositions.indexOf(nextPos += 1) < 0) {
          nextVal = numbers[nextPos];

          if (nextVal <= currentValue) {
            break;
          }

          currentPos = nextPos;

          visitedPositions.push(currentPos);
        }

        if (visitedPositions.length > maxVisitedPositionCount) {
          maxVisitedPositionCount = visitedPositions.length;
        }
      }

      return maxVisitedPositions.toString();
    }

    //console.log('expected: 4, actual:', Solve(['1, -2, -3, 4, -5, 6, -7, -8']));
  })();

  (function () {
    console.log('');
    console.log('Brackets code formatting');

    function Solve(input) {
      var lineCount = parseInt(input[0]),
        indentation = input[1],
        indentationLevel = 0,
        pattern = /{|}/g,
        formattedCode = [],
        getIndentation = function (indentation, repeatCount) {
          var result = [];

          for (var i = 0; i < repeatCount; i += 1) {
            result.push(indentation);
          }

          return result.join('');
        };

      for (var i = 2, len = input.length; i < len; i += 1) {
        var line = input[i];

        var match,
          matchStartIndex = 0,
          matchEndIndex = 0;

        while (match = pattern.exec(line)) {
          matchStartIndex = match.index;
          var formattedLine = line.substring(matchEndIndex, matchStartIndex).trim();
          matchEndIndex = pattern.lastIndex;

          if (formattedLine !== '') {
            formattedCode.push(getIndentation(indentation, indentationLevel) + formattedLine)
          }

          formattedCode.push(getIndentation(indentation, indentationLevel) + match[0] + '\n');

          if (match[0] === '{') {
            indentationLevel += 1;

          } else {
            indentationLevel -= 1;

          }
        }

        if (matchEndIndex === 0) {
          formattedCode.push(getIndentation(indentation, indentationLevel) + line.trim());
        }

        formattedCode.push('\n');
      }

      return formattedCode.join('');
    }

    console.log(Solve(['3', '>>', '{a{', '}', '}']));
  })();
})();
