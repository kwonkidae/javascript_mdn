(()=>{
  // 'use strict';
  const obj = {
    prop: 42
  };

  Object.freeze(obj);

  obj.prop = 33;
  console.log(obj.prop);
})();

(()=>{
  var obj = {
    prop: function(){},
    foo: 'bar'
  };

  obj.foo = 'baz';
  obj.lumpy = 'woof';
  delete obj.prop;

  var o = Object.freeze(obj);

  console.log(o === obj);
  console.log(Object.isFrozen(obj));

  obj.foo = 'quux';
  obj.quaxxor = 'the friendly duck';

  console.log(obj);

  function fail() {
    // 'use strict';
    obj.foo = 'sparky';
    let result = delete obj.foo;
    console.log(result);
    result = delete obj.quaxxor;
    console.log(result);
  }
  fail();

  // Object.defineProperty(obj, 'ohai', { value: 17 });
  // Object.defineProperty(obj, 'foo', { value: 'eit' });

  // Object.setPrototypeOf(obj, {x: 20});
  // obj.__proto__ = { x : 20 };

  console.log(Object.prototype)
})();

(()=>{
  let a = [0];
  Object.freeze(a);

  a[0] = 1;
  // a.push(2);
  console.log(a);
})();

(()=>{
  let obj = {
    internal: {}
  };

  Object.freeze(obj);

  obj.internal.a = 'aValue';
  console.log(obj);

  // shallow freeze
  var employee = {
    name: "Mayank",
    designation: "Developer",
    address: {
      street: "Rohini",
      city: "Delhi"
    }
  };

  Object.freeze(employee);
  employee.name = 'Dummy';
  employee.address.city = 'Noida';

  console.log(employee);

  var obj2 = {
    internal: {
      a: null
    }
  };

  deepFreeze(obj2);

  obj2.internal.a = 'anotherValue';
  console.log(obj2);
})();

function deepFreeze(object) {
  var propNames = Object.getOwnPropertyNames(object);

  for (let name of propNames) {
    let value = object[name];

    object[name] = value && typeof value === "object" ? deepFreeze(value) : value;
  }

  return Object.freeze(object);
}


