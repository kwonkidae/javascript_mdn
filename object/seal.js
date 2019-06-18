// 'use strict';
(() => {
  const object1 = {
    property1: 42
  }

  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1);

  delete object1.property1;
  console.log(object1.property1);
})();
