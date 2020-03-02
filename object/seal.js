// 'use strict';
(() => {
  const object1 = {
    property1: 42,
  };

  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1);

  delete object1.property1;
  console.log(object1.property1);
})();

(() => {
  // 'use strict';
  var obj = {
    prop: function() {},
    foo: 'bar',
  };

  obj.foo = 'baz';
  obj.lumpy = 'woof';
  delete obj.prop;

  var o = Object.seal(obj);
  console.log(o === obj);
  console.log(Object.isSealed(obj) === true);

  obj.foo = 'quux';
  console.log(obj);

  // Object.defineProperty(obj, 'foo', { get: function() {return 'g';}});

  obj.quaxxor = 'the friendly duck';
  delete obj.foo;

  function fail() {
    // 'use strict';
    delete obj.foo;
    obj.sparky = 'arg';
  }

  fail();

  // Object.defineProperty(obj, 'ohai', { value: 17});
  Object.defineProperty(obj, 'foo', { valaue: 'eit ' });
})();
