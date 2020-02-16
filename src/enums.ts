{
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
}

{
  enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
  }
}

enum MyEnum {
  a = 1,
  b = 2,
}

const f = (e: MyEnum) => {};
f(2345); // ✅🤯😱
