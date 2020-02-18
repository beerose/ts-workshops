/**
 * Exercise 6: Generic React props
 */

import React from 'react';

/**
 * Let's say we have a Select component, which sort of extends HTML select element.
 * It's getting following props:
 *  options — list of options to display
 *  value — selected value
 *  onChange — on value change handler
 *
 * An option has two properties:
 *  value: string | number
 *  label: string
 *
 * Since our option values are now typed as string | number,
 * our onChange callback would also receive a value of type string | number.
 * This type doesn't model the behavior of the Select component correctly.
 * In other words, we're losing type information along the way.
 *
 * We can solve it by generic type T for the values of our options,
 * instead of using the type string | number everywhere.
 *
 * Task 1: Implement Option type as a generic type.
 */

type OptionValue = string | number;

type Option</** fill me! */> = {
  value: /** fill me! */;
  label: string;
};

/**
 * Task 2: Add generic parameter to the Props type and fill the blanks in its definition.
 */

type Props<T extends OptionValue> = {
  options: /** fill me! */;
  value: /** fill me! */;
  onChange: (value: /** fill me! */) => void;
};

/**
 * Task 3: Add generic parameter to the function and add type to `props` parameter.
 */
const Select = </** fill me! */>(props: /** fill me! */) => {
  const handleOnChange = (e: React.FormEvent<HTMLSelectElement>) => {
    console.log(e);
  };

  return (
    <select value={props.value} onChange={handleOnChange}>
      {props.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const ExampleComponent = () => (
  <Select<number>
    value={0}
    options={[
      { label: 'zero', value: 0 },
      { label: 'one', value: 1 },
    ]}
    onChange={() => {}}
  />
);
