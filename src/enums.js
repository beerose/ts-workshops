'use strict';
var Direction;
(function(Direction) {
  Direction[(Direction['Up'] = 0)] = 'Up';
  Direction[(Direction['Down'] = 1)] = 'Down';
  Direction[(Direction['Left'] = 2)] = 'Left';
  Direction[(Direction['Right'] = 3)] = 'Right';
})(Direction || (Direction = {}));

('use strict');
var Direction;
(function(Direction) {
  Direction['Up'] = 'UP';
  Direction['Down'] = 'DOWN';
  Direction['Left'] = 'LEFT';
  Direction['Right'] = 'RIGHT';
})(Direction || (Direction = {}));

('use strict');
var NumericEnum;
(function(NumericEnum) {
  NumericEnum[(NumericEnum['Yes'] = 0)] = 'Yes';
  NumericEnum[(NumericEnum['No'] = 1)] = 'No';
})(NumericEnum || (NumericEnum = {}));
let nameOfA = NumericEnum[NumericEnum.A];
var StringEnum;
(function(StringEnum) {
  StringEnum['Yes'] = 'Yes';
  StringEnum['No'] = 'No';
})(StringEnum || (StringEnum = {}));
let b = StringEnum.Yes;
let nameOfB = StringEnum[StrEnum.Yes];
