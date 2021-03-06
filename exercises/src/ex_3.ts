/**
 * Exercise 3: Discriminated Unions and Exhaustive checking
 */

type AppState =
  | { status: 'init'; message: string; itemsCount: 0 }
  | { status: 'loading'; message: string }
  | { status: 'succes'; itemsCount: number }
  | { status: 'error'; errorCode: number; errorMessage: string };

/**
 * Let's say we have an AppState type as above. It's a discriminated union.
 * It's an union type and has a discriminant -- `status`.
 *
 * Depending on the status we want to display proper message.
 * So, basically we can make a switch case and handle all possible statuses.
 * Cool, but.. what would happen if we changed AppState type and forgot to update
 * `getDisplayMessage` function? Bugs 😱.
 *
 * We want TypeScript to verify that we've covered all the possible values.
 * Exhaustive switch is how we can do it.
 *
 * Task: fill the body of `exhaustiveCheck` and then use it inside of the `getDisplayMessage` function.
 */

function exhaustiveCheck(param: never): never {
  /** implement me! */
}
const getDisplayMessage = (state: AppState) => {
  switch (state.status) {
    case 'init':
      return 'Oh, hi!';
    case 'loading':
      return 'Wait a second...';
    case 'succes':
      return 'YEAH';
    case 'error':
      return 'Oops!';
  }
};
