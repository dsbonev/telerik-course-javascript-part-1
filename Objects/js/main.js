(function () {
  'use strict';

  (function () {
    console.log('');
    console.log('Write functions for working with shapes in standard Planar coordinate system.');

    function AbstractShape() {
    }

    AbstractShape.prototype.toString = function () {
      var result = [];

      result.push(this.constructor.name);
      result.push(JSON.stringify(this));

      return result.join('');
    };

    function Point(x, y) {
      this.x = x;
      this.y = y;
    }
    extend(Point, AbstractShape);

    function Line(p1, p2) {
      this.p1 = p1;
      this.p2 = p2;
    }
    extend(Line, AbstractShape);

    Line.prototype.length = function () {
      var horizontalDiff = Math.abs(this.p1.x - this.p2.x),
        verticalDiff = Math.abs(this.p1.y - this.p2.y);

      return Math.sqrt(Math.pow(horizontalDiff, 2) + Math.pow(verticalDiff, 2));
    };

    function Triangle() {
    }

    Triangle.validSides = function (a, b, c) {
      if (a instanceof Array) {
        return this.validSides.apply(this, a);
      }

      return a.length() + b.length() > c.length() &&
        a.length() + c.length() > b.length() &&
        b.length() + c.length() > a.length();
    };

    var lines = [];

    lines.length = 3;

    for (var i = 0; i < lines.length; i += 1) {
      lines[i] = new Line(
        new Point(getRandomInt(0, 9), getRandomInt(0, 9)),
        new Point(getRandomInt(0, 9), getRandomInt(0, 9))
      );
    }

    lines.forEach(function (item) {
      console.log('distance is', item.length(), 'for line', item.toString());
    });

    console.log('can form triangle:', Triangle.validSides(lines));
  })();

  (function () {
    console.log('');
    console.log('Write a function that removes all elements with a given value');

    Array.prototype.remove = function (item) {
      for (var i = 0; i < this.length; i += 1) {
        if (this[i] === item) {
          this.splice(i, 1);
        }
      }

      return this;
    };

    var numbers = [];

    numbers.length = 10;

    for (var i = 0; i < numbers.length; i += 1) {
      numbers[i] = getRandomInt(0, 9);
    }

    console.log('numbers:', numbers.toString());

    var value = numbers[getRandomInt(0, 9)];
    console.log('after removing value', value, ':', numbers.remove(value).toString());
  })();

  (function () {
    console.log('');
    console.log('Write a function that makes a deep copy of an object');

    var deepCopy = function (obj) {
      switch (Object.prototype.toString.call(obj).slice(8,-1)) {
        case 'Undefined': return undefined;
        case 'Null': return null;
        case 'Object': var result = {};
          for (var p in obj) {
            result[p] = deepCopy(obj[p]);
          }
          return result;
        case 'Array': var result = [];
          obj.forEach(function (item) {
            result.push(deepCopy(item));
          });
          return result;
        case 'Number':
        case 'String':
        case 'Boolean': return obj.valueOf();
        case 'Date': return new Date(obj.valueOf());
        case 'Function': return eval('(' + obj.toString() + ')');
      }
    };

    var items = [
      {arr: [1]},
      [1],
      1,
      new Number(1),
      'text',
      new String('text'),
      true,
      new Boolean(true),
      Date.now(),
      function (a) {return a;}
    ];

    items.forEach(function (item) {
      console.log('original:', item.toString());

      var copy = deepCopy(item);
      console.log('copy:', copy.toString());
    });
  })();

  (function () {
    console.log('');
    console.log('Write a function that checks if a given object contains a given property');

    function hasProperty(obj, property) {
      return property in obj;
    }

    function Person() {
    }
    Person.prototype.isPerson = 'true';

    function Student() {
    }
    extend(Student, Person);
    Student.prototype.isStudent = 'true';

    var student = new Student();
    console.log('isPerson in student:', hasProperty(student, 'isPerson'));
    console.log('isStudent in student:', hasProperty(student, 'isStudent'));
  })();

  (function () {
    console.log('');
    console.log('Write a function that ' +
      'finds the youngest person in a given array of persons and prints his/hers full name');

    function Person(firstname, lastname, age) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
    }

    Person.prototype.toString = function () {
      return JSON.stringify(this);
    };

    function youngestPerson(people) {
      var result = people[0];

      for (var i = 1; i < people.length; i += 1) {
        if (people[i].age < result.age) {
          result = people[i];
        }
      }

      return result;
    }

    var people = [
      new Person('Бай', 'Иван', 50),
      new Person('Малечко', 'Палечко', 10),
      new Person('Дядо', 'Коледа', 100)
    ];

    console.log('people:', people.toString());
    console.log('youngest:', youngestPerson(people).toString());

    console.log('');
    console.log('Write a function that groups an array of persons by age, first or last name');

    function group(objects, property) {
      var propValueToObjects = {};

      objects.forEach(function (item) {
        var propValue = item[property];

        var keyExists = false;

        for (var key in propValueToObjects) {
          if (key === propValue.toString()) {
            propValueToObjects[propValue].push(item);
            keyExists = true;
            break;
          }
        }

        if (!keyExists) {
          var objects = [item];
          propValueToObjects[propValue] = objects;
        }
      });

      return propValueToObjects;
    }

    people = [
      new Person('Бай', 'Иван', 50),
      new Person('Дядо', 'Иван', 70),
      new Person('Бай', 'Кольо', 100),
      new Person('Чичо', 'Гошо', 100)
    ];

    console.log('people:', people.toString());
    console.log('by first name:', JSON.stringify(group(people, 'firstname')));
    console.log('by last name:', JSON.stringify(group(people, 'lastname')));
    console.log('by age:', JSON.stringify(group(people, 'age')));
  })();

  //https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // classical inheritance
  function Proxy() {}
  function extend(Child, Parent) {
    // inherit prototype properties
    Proxy.prototype = Parent.prototype;

    // protect the shared prototype from modifications by subtypes
    Child.prototype = new Proxy();

    // set the constructor property explicitly
    // otherwise the value will be read from the Parent.prototype
    // childInstance == new Child() ->
    //   childPrototype == proxyInstance == new Proxy() ->
    //     (proxyPrototype == parentPrototype).constructor == Parent
    Child.prototype.constructor = Child;
  }
})();
