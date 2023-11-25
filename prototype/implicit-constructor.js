(() => {
  // const object = { a: 1 };
  // console.log(Object.getPrototypeOf(object) === Object.prototype);

  // const array = [1, 2, 3];
  // console.log(Object.getPrototypeOf(array) === Array.prototype);

  // const regexp = /adc/;
  // console.log(Object.getPrototypeOf(regexp) === RegExp.prototype);

  // console.log(Number.prototype + 1);
  // console.log(Array.prototype.map((x) => x + 1));
  // console.log(String.prototype + 'a');
  // console.log(RegExp.prototype.source);
  // console.log(Function.prototype);
  // {
  //   function Constructor() {}

  //   console.log(Object.getPrototypeOf(Constructor) === Function.prototype);
  //   console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
  //   console.log(Function.prototype.__proto__ === Object.prototype);
  // }

  {
    // function Base() {}
    // function Derived() {}
    // Object.setPrototypeOf(Derived.prototype, Base.prototype);
    // const obj = new Derived();
    // obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
  }

  {
    function doSomething() {}
    doSomething.prototype.foo = 'bar';
    console.log(doSomething.prototype);
    console.log(Function.prototype);

    const doSomethingFromArrowFunction = () => {};
    console.log(doSomethingFromArrowFunction.prototype);
  }

  {
    function doSomething() {}
    doSomething.prototype.foo = 'bar';
    const doSomeInstancing = new doSomething();
    doSomeInstancing.prop = 'some value';
    console.log('doSomeInstancing.prop:', doSomeInstancing.prop);
    console.log('doSomeInstancing.foo:', doSomeInstancing.foo);
    console.log('doSomething.prop:', doSomething.prop);
    console.log('doSomething.foo:', doSomething.foo);
    console.log('doSomething.prototype.prop:', doSomething.prototype.prop);
    console.log('doSomething.prototype.foo:', doSomething.prototype.foo);
  }

  {
    // Objects created with syntax constructs
    const o = { a: 1 };
    // o ---> Object.prototype ---> null

    const b = ['yo', 'whadup', '?'];
    // b ---> Array.prototype ---> Object.prototype ---> null

    function f() {
      return 2;
    }
    // f ---> Function.prototype ---> Object.prototype ---> null

    const p = { b: 2, __proto__: o };
    // p ---> o ---> Object.prototype ---> null
  }

  {
    // With constructor functions
    function Graph() {
      this.vertices = [];
      this.edges = [];
    }

    Graph.prototype.addVertex = function (v) {
      this.vertices.push(v);
    };

    const g = new Graph();
  }

  {
    const a = { a: 1 };
    // a ---> Object.prototype ---> null
    const b = Object.create(a);
    // b ---> a ---> Object.prototype ---> null
    const c = Object.create(b);
    // c ---> b ---> a ---> Object.prototype ---> null
    const d = Object.create(null);
    // d ---> null (d is an object that has null directly as its prototype)
    console.log(d.hasOwnProperty);
  }

  {
    class Rectangle {
      constructor(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
      }
    }

    class FilledRectangle extends Rectangle {
      constructor(height, width, color) {
        super(height, width);
        this.name = 'Filled rectangle';
        this.color = color;
      }
    }

    const filledRectangle = new FilledRectangle(5, 10, 'blue');
    // filledRectangle ---> FilledRectangle.prototype ---> Rectangle.prototype ---> Object.prototype ---> null

    {
      const obj = { a: 1 };
      const anotherObj = { b: 2 };
      Object.setPrototypeOf(obj, anotherObj);
      // obj ---> anotherObj ---> Object.prototype ---> null
    }

    {
      const obj = {};

      obj.__proto__ = { barProp: 'bar val' };
      obj.__proto__.__proto__ = { fooProp: 'foo val' };
      console.log(obj.fooProp);
      console.log(obj.barProp);
    }
  }

  {
    function Graph() {
      this.verticles = [];
      this.edges = [];
    }

    Graph.prototype.addVertex = function (v) {
      this.vertices.push(v);
    };

    const g = new Graph();
    // g ---> Graph.prototype ---> Object.prototype ---> null

    console.log(g.hasOwnProperty('vertices'));
    console.log(Object.hasOwn(g, 'vertices'));

    console.log(g.hasOwnProperty('nope'));
    console.log(Object.hasOwn(g, 'nope'));

    console.log(g.hasOwnProperty('addVertex'));
    console.log(Object.hasOwn(g, 'addVertex'));

    console.log(Object.getPrototypeOf(g).hasOwnProperty('addVertex'));
  }
})();
