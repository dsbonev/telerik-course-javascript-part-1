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
    console.log('Labyrinth Escape');

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

  (function () {
    console.log('');
    console.log('Listy');

    function Solve(input) {
      var runtimeEnv = {},
        pattern = /^\s*def\s+(\w+)\s+(\w*)\s*\[([^\]]+)\]/,
        min = function (args) {
          var result = args[0];

          for (var i = 1, length = args.length; i < length; i += 1) {
            var item = args[i];

            if (item < result) {
              result = item;
            }
          }

          return result;
        },
        max = function (args) {
          var result = args[0];

          for (var i = 1, length = args.length; i < length; i += 1) {
            var item = args[i];

            if (item > result) {
              result = item;
            }
          }

          return result;
        },
        sum = function (args) {
          var result = 0;

          for (var i = 0, length = args.length; i < length; i += 1) {
            result += args[i];
          }

          return result;
        },
        avg = function (args) {
          var result = Math.floor(sum(args) / args.length);

          return result;
        },
        callFunction = function (name, args) {
          args = parseArgs(args);

          switch (name) {
            case 'sum': return sum(args);
            case 'min': return min(args);
            case 'max': return max(args);
            case 'avg': return avg(args);
            case '': return args;
          }
        },
        interpret = function (varName, functionName, functionArgs) {
          runtimeEnv[varName] = callFunction(functionName, getArgs(functionArgs));
        },
        trim = function (str) {
          return str.trim();
        },
        getArgs = function (argsString) {
          return argsString.split(',').map(trim);
        },
        parseArgs = function (args) {
          var result = [];

          for (var i = 0; i < args.length; i += 1) {
            var arg = parseArg(args[i]);

            if (isArray(arg)) {
              for (var j = 0; j < arg.length; j += 1) {
                result.push(parseArg(arg[j]));
              }

            } else {
              result.push(arg);

            }
          }

          return result;
        },
        parseArg = function (arg) {
          var result = runtimeEnv[arg];

          if (result === undefined) {
            result = parseInt(arg, 10);

            if (isNaN(result)) {
              throw new Error('undefinded variable ' + arg);
            }
          }

          return result;
        },
        isArray = function (arg) {
          return Object.prototype.toString.call(arg).slice(8,-1) === 'Array';
        },
        match;

      for (var i = 0, inputSize = input.length; i < inputSize - 1; i += 1) {
        var line = input[i];

        match = pattern.exec(line);

        try {
          interpret(match[1], match[2], match[3]);
        } catch (e) {
          //continue;
        }

      }

      var lastLine = input[inputSize - 1];
      match = /^\s*(\w*)\s*\[([^\]]+)\]/.exec(lastLine);

      var result = callFunction(match[1], getArgs(match[2]));

      //if (isArray(result)) {
       // result = result[0];
      //}

      return result.toString();
    }

    console.log('expected: 42, actual:', Solve([
      'def func sum[5, 3, 7, 2, 6, 3]',
      'def func2 [5, 3, 7, 2, 6, 3]',
      'def func3 min[func2]',
      'def func4 max[5, 3, 7, 2, 6, 3]',
      'def func5 avg[5, 3, 7, 2, 6, 3]',
      'def func6 sum[func2, func3, func4]',
      //TODO possible empty command line
      ' sum[func6, func4]'
    ]));
  })();
})();
