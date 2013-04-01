(function () {
  'use strict';

  (function () {
    console.log('');
    console.log('Max Sum');

    function Solve(input) {
      var length = parseInt(input[0], 10),
        numbers = input.slice(1).map(function (item) {
          return parseInt(item, 10);
        }),
        findMaxSum = function(items, startIndex) {
          var maxSum,
            sum = 0;

          for (var i = startIndex; i < numbers.length; i += 1) {
            sum += numbers[i];

            if (sum > maxSum || maxSum === undefined) {
              maxSum = sum;
            }
          }

          return maxSum;
        },
        sum,
        maxSum;

      for (var i = 0; i < length; i += 1) {
        sum = findMaxSum(numbers, i);

        if (sum > maxSum || maxSum === undefined) {
          maxSum = sum;
        }
      }

      return maxSum.toString();
    }

    console.log('expected: 7, actual:', Solve(['2', '3', '4']));
    console.log('expected: 16, actual:', Solve(['8', '1', '6', '-9', '4', '4', '-2', '10', '-1']));
  })();

  (function () {
    console.log('');
    console.log('Max Sum');

    function Solve(input) {
      var parseIntBaseTen = function (numberString) {
          return parseInt(numberString, 10);
        },
        rowCount = parseIntBaseTen(input[0].split(' ')[0]),
        colCount = parseIntBaseTen(input[0].split(' ')[1]),
        startRow = parseIntBaseTen(input[1].split(' ')[0]),
        startCol = parseIntBaseTen(input[1].split(' ')[1]);

      var matrix = [];

      for (var row = 0; row < rowCount; row += 1) {
        matrix[row] = input[row + 2].split('');
      }

      var path = [],
        row = startRow,
        col = startCol,
        pathSum = 0,
        calcNumberValue = function (row, col, colCount) {
          return row * colCount + (col + 1);
        },
        result;

      while (true) {
        var cellValue = matrix[row][col];

        if (cellValue === true) {
          result = 'lost ' + path.length;
          break;
        }

        path.push(cellValue);

        pathSum += calcNumberValue(row, col, colCount);

        matrix[row][col] = true;

        switch (cellValue) {
          case 'l': col -= 1; break;
          case 'r': col += 1; break;
          case 'u': row -= 1; break;
          case 'd': row += 1; break;
        }

        if (row < 0 || row >= rowCount || col < 0 || col >= colCount) {
          result = 'out ' + pathSum;
          break;
        }
      }

      return result.toString();
    }

    console.log('expected: out 45, actual:', Solve(['3 4', '1 3', 'lrrd', 'dlll', 'rddd']));
    console.log('expected: lost 21, actual:', Solve(['5 8', '0 0', 'rrrrrrrd', 'rludulrd', 'durlddud', 'urrrldud', 'ulllllll']));
  })();
})();
