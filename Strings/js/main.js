(function () {
  'use strict';

  //developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/startsWith#See also
  if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
      }
    });
  }

  (function () {
    console.log('');
    console.log('Write a function that reverses a string and returns it.');

    String.prototype.reverse = function () {
      var result = [];

      for (var i = this.length - 1; i >= 0; i -= 1) {
        result.push(this[i]);
      }

      return result.join('');
    };

    var text = 'Telerik';

    console.log('string:', text);
    console.log('reversed:', text.reverse());
  })();

  (function () {
    console.log('');
    console.log('Write a function ' +
      'to check if in a given expression the brackets are put correctly.');

    function areBracketsCorrect(expression) {
      var brackets = [],
        ch,
        result;

      for (var i = 0; i < expression.length; i += 1) {
        ch = expression[i];

        if (ch === '(') {
          brackets.push(ch);

        } else if (ch === ')') {
          if (brackets.length === 0) {
            result = false;
            break;
          }

          brackets.pop();
        }
      }

      if (result === undefined) {
        result = brackets.length === 0;
      }

      return result;
    }

    var expressions = [
      'a + (b + c)',
      'a + )b + c(',
      'a + (b + c))',
      '(a + (b + c)'
    ];

    expressions.forEach(function (expression) {
      console.log('expression:', expression);
      console.log('are brackets correct:', areBracketsCorrect(expression));
    });
  })();

  (function () {
    console.log('');
    console.log('Write a JavaScript function that ' +
      'finds how many times a substring is contained in a given text ' +
      '(perform case insensitive search).');

    function countOccurrences(word, text) {
      var result = 0,
        regexp = new RegExp(word, 'gi'),
        match;

      while ((match = regexp.exec(text)) !== null) {
        result += 1;
      }

      return result;
    }

    var text = 'We are living in an yellow submarine. ' +
      'We dont have anything else. ' +
      'Inside the submarine is very tight. ' +
      'So we are drinking all the day. ' +
      'We will move out of it in 5 days',
      word = 'in';

    console.log('text:', text);
    console.log('word:', word);
    console.log('occurrences:', countOccurrences(word, text));
  })();

  (function () {
    console.log('');
    console.log('You are given a text. ' +
      'Write a function that changes the text in all regions');

    function mixcase(text) {
      var result = [];

      for (var i = 0; i < text.length; i += 1) {
        result.push(getRandomInt(0, 1) === 1 ?
          upcase(text[i]) :
          lowcase(text[i])
        );
      }

      return result.join('');
    }

    function upcase(text) {
      return text.toUpperCase();
    }

    function lowcase(text) {
      return text.toLowerCase();
    }

    function getRegionTransformer(region) {
      switch (region) {
        case 'mixcase': return mixcase;
        case 'upcase': return upcase;
        case 'lowcase': return lowcase;
      }
    }

    function transform(text) {
      var pattern = /<(\w+)>(.*?)<\/\1>/gi,
        match,
        startIndex,
        tagName,
        innerText,
        endIndex = 0,
        result = [];

      while ((match = pattern.exec(text))) {
        startIndex = match.index;
        tagName = match[1].toLowerCase();
        innerText = match[2];
        result.push(text.substring(endIndex, startIndex));
        endIndex = pattern.lastIndex;

        var transformed = getRegionTransformer(tagName)(innerText);

        result.push(transform(transformed));
      }

      result.push(text.substring(endIndex));

      return result.join('');
    }

    var text = 'Курсът "<upcase><mixcase>JavaScript</mixcase> - част 1</upcase>" ' +
      'е <upcase>фундаментален</upcase> за <lowcase>УЕБ</lowcase>';

    console.log('text:', text);
    console.log('result:', transform(text));
  })();

  (function () {
    console.log('');
    console.log('Write a function that ' +
      'replaces non breaking white-spaces in a text with &nbsp;');

    //https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions#special-white-space
    //http://en.wikipedia.org/wiki/Non-breaking_space#Encodings
    var whitespaces = '" \f\n\r\t\v​\u00A0\u1680​\u180e' +
    '\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009' +
    '\u200a​\u2028\u2029​\u2028\u2029​\u202f\u205f\u2060\u3000\uFEFF"';

    console.log('whitespaces:', whitespaces);
    console.log('result:', whitespaces.replace(/[\u00A0\u202F\u2060\uFEFF]/g, '&nbsp;'));
  })();

  (function () {
    console.log('');
    console.log('Write a function that extracts the content of a html page given as text.');

    var html = '<html><head><title>Sample site</title></head>' +
      '<body><div>text<div>more text</div>and more...</div>in body</body></html>';

    console.log('html:', html);
    console.log('result:', html.replace(/(<\/?\w+>)+/g, ''));
  })();

  (function () {
    console.log('');
    console.log('Write a script that parses an URL address.');

    var url = 'http://www.devbg.org/forum/index.php';

    console.log('url:', url);

    var match = (/(\w+):\/\/([^\/]+)\/(.*)/).exec(url),
      result = {
        protocol: match[1],
        server: match[2],
        resource: match[3]
      };

    console.log('result:', JSON.stringify(result));
  })();

  (function () {
    console.log('');
    console.log('Write a JavaScript function that ' +
      'replaces in a HTML document given as string all the tags ' +
      '<a href="…">…</a> with corresponding tags [URL=…]…/URL]');

    var doc = '<p>Please visit <a href="http://academy.telerik.com">our site</a> ' +
      'to choose a training course. Also visit ' +
      '<a href=\u0027www.devbg.org\u0027>our forum</a> to discuss the courses.</p>';

    console.log('doc:', doc);
    console.log('result:', doc.replace(
      /<a.+?href=("|')(.+?)\1.*?>(.+?)<\/a>/gi,
      '[URL=$2]$3[/URL]')
    );
  })();

  (function () {
    console.log('');
    console.log('Write a function for extracting all email addresses from given text.');

    var text = 'Имейл: academy_java.script-part-1@telerik.com, $: sales2013-03@telerik.com';

    console.log('text:', text);
    console.log('result:', text.match(/[\w-]+[\w\.-]+@[\w\.-]+\.[a-z]{2,6}/g).toString());
  })();

  (function () {
    console.log('');
    console.log('Write a program that extracts from a given text all palindromes.');

    function isPalindrome(word) {
      for (var i = 0; i < Math.floor(word.length / 2); i += 1) {
        if (word[i] !== word[word.length - (i + 1)]) {
          return false;
        }
      }

      return true;
    }

    var text = '"ABBA", "lamal", "exe", "not"';

    console.log('text:', text);
    console.log('result:', text.match(/\w+/g).filter(isPalindrome).toString());
  })();

  (function () {
    console.log('');
    console.log('Write a function that formats a string using placeholders');

    function stringFormat(format) {
      var items = Array.prototype.slice.call(arguments, 1);

      return format.replace(/{(\d+)}/g, function (match, group1) {
        return toString(items[group1]);
      });
    }

    function toString(obj) {
      switch (Object.prototype.toString.call(obj).slice(8,-1)) {
        case 'Undefined': return '';
        case 'Null': return '';
        case 'Object': var result = [];
          result.push('{');

          for (var p in obj) {
            result.push(p + ': ' + toString(obj[p]));
            result.push(', ');
          }

          if (result.slice(-1)[0] === ', ') {
            result.pop();
          }
          result.push('}');
          return result.join('');
        case 'Array': var result = [];
          result.push('[');

          obj.forEach(function (item) {
            result.push(toString(item));
            result.push(', ');
          });

          if (result.slice(-1)[0] === ', ') {
            result.pop();
          }

          result.push(']');
          return result.join('');
        case 'Number':
        case 'String':
        case 'Boolean':
        case 'Date':
        case 'Function': return obj.toString();
      }
    };

    var text = 'Undefined: {0}, Null: {1}, Object: {2}, Empty: {3}, Array: {4}!';

    console.log('text:', text);
    console.log('result:', stringFormat(text,
      undefined, null, {k: 'v', nested: {k: 'v'}}, {},
      [
        {k: 'v'},
        [0],
        5,
        new Number(5),
        'str',
        new String('str'),
        true,
        new Boolean(true),
        new Date,
        function a(b, c) {return b + c;}
      ]
    ));


    console.log('');
    console.log('Write a function that creates a HTML UL using a template for every HTML LI');

    function generateList(items, itemTemplate) {
      var result = [];

      result.push('<ul>');

      items.forEach(function (item) {
        result.push('<li>');

        result.push(itemTemplate.replace(/-{(\w+)}-/g, function (match, group1) {
          return toString(item[group1]);
        }));

        result.push('</li>');
      });

      result.push('</ul>');

      return result.join('');
    }

    var people = [
      {name: 'Peter', age: 14, js: true},
      {name: 'Gosho', age: 18},
      {name: 'Ivan', age: 26, sex: 'yes'}
    ];
    var templateWrapper = document.getElementById("list-item");
    var template = templateWrapper.innerHTML;
    var peopleList = generateList(people, template);
    templateWrapper.innerHTML = peopleList;
    //peopleList = "<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>"

    console.log('template:', template);
    console.log('data:', toString(people));
    console.log('result:', templateWrapper.textContent);
  })();

  //https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
})();
