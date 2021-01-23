/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
// DANGER: function is not referentially transparent (does not return same output for same input)!
export const shuffleArray = <T>(array: T[]): T[] => {
  const arrayCopy: T[] = [ ...array ];
  arrayCopy.forEach((item: T, index: number) => {
    const secondIndex: number = Math.floor(Math.random() * (index + 1));
    [ arrayCopy[ index ], arrayCopy[ secondIndex ] ] = [ arrayCopy[ secondIndex ], arrayCopy[ index ] ];
  });
  return arrayCopy;
};

export const sortNumbersArrayAscending = (a: number, b: number) => (a > b ? 1 : -1);
