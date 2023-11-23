(() => {
  // {
  //   const o = {
  //     a: 1,
  //     b: 2,
  //     __proto__: {
  //       b: 3,
  //       c: 4,
  //     },
  //   };
  //   console.log(o.a);
  //   console.log(o.b);
  //   console.log(o.c);
  //   console.log(o.d);
  // }
  // {
  //   const o = {
  //     a: 1,
  //     b: 2,
  //     __proto__: {
  //       b: 3,
  //       c: 4,
  //       __proto__: {
  //         d: 5,
  //       },
  //     },
  //   };
  //   console.log(o.a);
  //   console.log(o.b);
  //   console.log(o.c);
  //   console.log(o.d);
  // }
  // {
  //   const parent = {
  //     value: 2,
  //     method() {
  //       return this.value + 1;
  //     },
  //   };
  //   console.log(parent.method());
  //   const child = {
  //     __proto__: parent,
  //   };
  //   console.log(child.method());
  //   child.value = 4;
  //   console.log(child.method());
  //   console.log(parent.method());
  // }

  {
    const boxes = [
      {
        value: 1,
        getValue() {
          return this.value;
        },
      },
      {
        value: 2,
        getValue() {
          return this.value;
        },
      },
      {
        value: 3,
        getValue() {
          return this.value;
        },
      },
    ];
  }

  {
    const boxPrototype = {
      getValue() {
        return this.value;
      },
    };
    const boxes = [
      {
        value: 1,
        __proto__: boxPrototype,
      },
      {
        value: 2,
        __proto__: boxPrototype,
      },
      {
        value: 3,
        __proto__: boxPrototype,
      },
    ];
  }

  {
    function Box(value) {
      this.value = value;
    }

    Box.prototype.getValue = function () {
      return this.value;
    };

    const boxes = [new Box(1), new Box(2), new Box(3)];
  }

  {
    function Box(value) {
      this.value = value;
    }

    Box.prototype.getValue = function () {
      return this.value;
    };
    console.log(Object.getPrototypeOf(Box) === Function.prototype);
    console.log(Object.getPrototypeOf(new Box()) === Box.prototype);
  }

  {
    function Box(value) {
      this.value = value;
    }

    Box.prototype.getValue = function () {
      return this.value;
    };

    const box = new Box(1);
    console.log(box.getValue());

    Box.prototype.getValue = function () {
      return this.value + 1;
    };
    console.log(box.getValue());
  }
})();
