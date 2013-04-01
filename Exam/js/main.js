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
})();
