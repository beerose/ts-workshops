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

enum NumericEnum {
  Yes,
  No,
}
let nameOfA = NumericEnum[NumericEnum.A];

enum StringEnum {
  Yes = 'Yes',
  No = 'No',
}
let b = StringEnum.Yes;
let nameOfB = StringEnum[StrEnum.Yes]; // Error
/**
 * Element implicitly has an 'any' type
 * because expression of type 'any' can't be used
 * to index type 'typeof StringEnum'.(7053)
 */

enum MyEnum {
  a = 1,
  b = 2,
}

const f = (e: MyEnum) => {};
f(2345); // ✅🤯😱
