(() => {
  const symbol1 = Symbol();
  const symbol2 = Symbol(42);
  const symbol3 = Symbol('foo');

  console.log(typeof symbol1);
  console.log(symbol3.toString());
  console.log(Symbol('foo') === Symbol('foo'));

  let sym = Symbol('foo');
  console.log(typeof sym);
  var symObj = Object(sym);
  console.log(typeof symObj);

  var obj = {};

  obj[Symbol('a')] = 'a';
  obj[Symbol.for('b')] = 'b';
  obj['c'] = 'c';
  obj.d = 'd';

  for (var i in obj) {
    console.log(i);
  }

  var _sym = Symbol('foo');
  var obj = { [_sym]: 1 };
  console.log(obj[_sym]);
  console.log(obj[Object(_sym)]);
})();
