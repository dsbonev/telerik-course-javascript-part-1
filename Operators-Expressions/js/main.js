(function () {
  'use strict';

  (function () {
    console.log('');
    console.log('Write an expression that checks if given integer is odd or even');

    function isEven(x) {
      return x % 2 === 0;
    }

    var current = 1,
      max = 10;

    while (current < max) {
      console.log(current, 'is', isEven(current) ? 'even' : 'odd');
      current += 1;
    }
  })();

  (function () {
    console.log('');
    console.log('Write a boolean expression that checks for given integer' +
      ' if it can be divided (without remainder) by 7 and 5 in the same time');

    function isDivisibleByFiveAndSeven(x) {
      return x % 7 === 0 && x % 5 === 0;
    }

    var current = 1,
      max = 100;

    while (current < max) {
      if (isDivisibleByFiveAndSeven(current)) {
        console.log(current, 'is divisible by 7 and 5');
      }

      current += 1;
    }
  })();

  (function () {
    console.log('');
    console.log('Write an expression that calculates rectangle’s area by given width and height');

    function Rectangle(width, height) {
      this.width = width;
      this.height = height;
    }

    Rectangle.prototype.getArea = function () {
      return this.width * this.height;
    };

    Rectangle.prototype.toString = function () {
      return ['Rectangle {width: ', this.width, ', height: ', this.height, '}'].join('');
    };

    var rectangle = new Rectangle(getRandomInt(1, 10), getRandomInt(1, 10));

    console.log(rectangle.toString(), 'area is', rectangle.getArea());
  })();

  (function () {
    console.log('');
    console.log('Write an expression that checks for given integer if its third digit (rtl) is 7');

    function isThirdDigitSeven(x) {
      var remainder = Math.floor(x / 100) % 10;
      return remainder === 7;
    }

    [0, 699, 700, 799, 800, 1700, 1701].forEach(function (item) {
      if (isThirdDigitSeven(item)) {
        console.log(item, ' has 7 as its third digit');
      }
    });
  })();

  (function () {
    console.log('');
    console.log('Write a boolean expression ' +
      'for finding if the bit 3 (counting from 0) of a given integer is 1 or 0');

    function isThirdBitOne(x) {
      var index = 3,
        mask = 1 << index,
        masked = x & mask,
        indexBit = masked >> index;

      return indexBit === 1;
    }

    ['11111', '11000', '10000', '10100', '00000', '1000', '1100', '0100'].forEach(function (item) {
      console.log(item, '(', parseInt(item, 2), ')', 'has',
        isThirdBitOne(parseInt(item, 2)) ? '1' : '0', 'at bit index 3');
    });
  })();

  (function () {
    console.log('');
    console.log('Write an expression ' +
      'that checks if given point (x,  y) is within a circle K(O, 5)');

    function Point(x, y) {
      this.x = x;
      this.y = y;
    }

    Point.prototype.toString = function () {
      return ['Point {x: ', this.x, ', y: ', this.y, '}'].join('');
    };

    function Circle(center, radius) {
      this.center = center;
      this.radius = radius;
    }

    Circle.prototype.contains = function (point) {
      return Math.pow(point.x - this.center.x, 2) +
        Math.pow(point.y - this.center.y, 2) <
        Math.pow(this.radius, 2);
    };

    Circle.prototype.toString = function () {
      return ['Circle {center: ', this.center.toString(), ', radius: ', this.radius, '}'].join('');
    };

    var circle = new Circle(new Point(0, 0), 5),
      point = new Point(getRandomInt(0, circle.radius * 2), getRandomInt(0, circle.radius * 2));

    console.log(circle.toString(), 'contains', point.toString(), ':', circle.contains(point));
  })();

  (function () {
    console.log('');
    console.log('Write an expression ' +
      'that checks if given positive integer number n (n ≤ 100) is prime');

    function isPrime(num) {
      var divider = 2,
        maxDivider = Math.floor(Math.sqrt(num)),
        result = true;

      while(result && divider <= maxDivider) {
        if (num % divider === 0) {
          result = false;
        }

        divider += 1;
      }

      return result;
    }

    var num = getRandomInt(2, 100);
    console.log(num, 'is prime:', isPrime(num));
  })();

  (function () {
    console.log('');
    console.log('Write an expression ' +
      'that calculates trapezoid\u0027s area by given sides a and b and height h');

    function Trapezoid(a, b, height) {
      this.a = a;
      this.b = b;
      this.height = height;
    }

    Trapezoid.prototype.getArea = function () {
      return ((this.a + this.b) / 2) * this.height;
    };

    Trapezoid.prototype.toString = function () {
      return ['Trapezoid {a: ', this.a, ', b: ', this.b, ', height: ', this.height, '}'].join('');
    };

    var trapezoid = new Trapezoid(getRandomInt(1, 10), getRandomInt(1, 10), getRandomInt(1, 10));

    console.log(trapezoid.toString(), 'area is', trapezoid.getArea());
  })();

  (function () {
    console.log('');
    console.log('Write an expression ' +
      'that checks for given point (x, y) if it is within the circle K( (1,1), 3) ' +
      'and out of the rectangle R(top=1, left=-1, width=6, height=2)');

    function Point(x, y) {
      this.x = x;
      this.y = y;
    }

    Point.prototype.toString = function () {
      return ['Point {x: ', this.x, ', y: ', this.y, '}'].join('');
    };

    function Circle(center, radius) {
      this.center = center;
      this.radius = radius;
    }

    Circle.prototype.contains = function (point) {
      return Math.pow(point.x - this.center.x, 2) +
        Math.pow(point.y - this.center.y, 2) <
        Math.pow(this.radius, 2);
    };

    Circle.prototype.toString = function () {
      return ['Circle {center: ', this.center.toString(), ', radius: ', this.radius, '}'].join('');
    };

    function Rectangle(topLeft, width, height) {
      this.topLeft = topLeft;
      this.width = width;
      this.height = height;
    }

    Rectangle.prototype.contains = function (point) {
      var isRight = point.x > this.topLeft.x,
        isLeft = point.x < this.topLeft.x + this.width,
        isBelow = point.y < this.topLeft.y,
        isAbove = point.y > this.topLeft.y - this.height;

      return isRight && isLeft && isBelow && isAbove;
    };

    Rectangle.prototype.toString = function () {
      return ['Rectangle {top: ', this.topLeft.y, ', left: ', this.topLeft.x,
        ', width: ', this.width, ', height: ', this.height, '}'].join('');
    };

    var circle = new Circle(new Point(1, 1), 3),
      rectangle = new Rectangle(new Point(-1, 1), 6, 2),
      point = new Point(getRandomInt(rectangle.topLeft.x * 2, circle.radius * 2),
        getRandomInt((rectangle.topLeft.y - rectangle.height) * 2, circle.radius * 2)),
      inCircle = circle.contains(point),
      inRectangle = rectangle.contains(point);

    console.log(circle.toString(), 'contains', point.toString(), ':', inCircle);
    console.log(rectangle.toString(), 'contains', point.toString(), ':', inRectangle);
    console.log('In circle and out of rectangle:', inCircle && !inRectangle);
  })();

  //https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

})();
