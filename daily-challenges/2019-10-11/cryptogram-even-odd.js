/*
  PROMPT
  
  Each variable is a single digit
  ABC + BCA = CDE

  E is Even
  C is Odd
  A is Odd (inference)

  All values are integers
  All values are unique

  -----------------------
  What is B's parity?
  -----------------------
*/

const ALL_DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ODD_DIGITS = [1, 3, 5, 7, 9];
const EVENT_DIGITS = [0, 2, 4, 6, 8];

/**
 * Takes three arrays and returns all possible combinations of those three arrays
 * 
 * @param {number[]} arr1 The first array
 * @param {number[]} arr2 The second array
 * @param {number[]} arr3 The third array
 * 
 * @return {number[]} All possibilities
 */
const threeArrayCombinations = (arr1, arr2, arr3) => {
  const ret = [];
  arr1.forEach((arr1Value) => {
    arr2.forEach((arr2Value) => {
      arr3.forEach((arr3Value) => {
        ret.push(Number(arr1Value.toString() + arr2Value.toString() + arr3Value.toString()));
      });
    });
  });

  return ret;
}

/**
 * Takes a number and determines if all the digits are unique (also works with strings/characters)
 * 
 * @param {number} num Number to determine digit uniqueness
 * 
 * @return {boolean} true if all digits are unique, false otherwise
 */
const areDigitsUnique = (num) => {
  // Convert to string
  str = num.toString()
  for (let i=0; i<str.length; i++) {
    const char = str[i];

    // If splitting on any character gives more than 2 elements, that character appears more than once
    if (str.split(char).length !== 2) return false;
  }

  return true;
}

(async () => {
  // Define all possible digits for all variables
  const possible = {
    A: ODD_DIGITS.slice(),
    B: ALL_DIGITS.slice(),
    C: ODD_DIGITS.slice(),
    D: ALL_DIGITS.slice(),
    E: EVENT_DIGITS.slice(),
    ABC: null,
    BCA: null,
    CDE: null
  }

  // All possible values for the three terms
  possible.ABC = threeArrayCombinations(possible.A, possible.B, possible.C);
  possible.BCA = threeArrayCombinations(possible.B, possible.C, possible.A);
  possible.CDE = threeArrayCombinations(possible.C, possible.D, possible.E);

  // Filter out all possibilities where different digits have the same value
  possible.ABC = possible.ABC.filter((val) => areDigitsUnique(val));
  possible.BCA = possible.BCA.filter((val) => areDigitsUnique(val));
  possible.CDE = possible.CDE.filter((val) => areDigitsUnique(val));
  
  // Add ABC and BCA together, and see if it's included in the list of CDE - save the values
  const confirmed = [];
  possible.ABC.forEach((abcValue) => {
    possible.BCA.forEach((bcaValue) => {
      // Disregard cases where digits with the same name are different
      if (abcValue.toString()[0] !== bcaValue.toString()[2]) return; // Case: A
      if (abcValue.toString()[1] !== bcaValue.toString()[0]) return; // Case: B
      if (abcValue.toString()[2] !== bcaValue.toString()[1]) return; // Case: C

      const sum = abcValue + bcaValue;
      const sumString = sum.toString();

      // If the sum doesn't have 3 digits it's out
      if (sumString.length !== 3) return;

      const A = abcValue.toString()[0];
      const B = abcValue.toString()[1];
      const C = abcValue.toString()[2];
      const D = sumString[1];
      const E = sumString[2];

      // If the first digit of the new sum doesn't equal C, it's out
      if (sumString[0] !== C) return;

      // If all values aren't unique, it's out
      if (!areDigitsUnique(A + B + C + D + E)) return;

      // Save all values that are included in possible CDE solutions
      if (!possible.CDE.includes(sum)) return;
      confirmed.push(`${abcValue} + ${bcaValue} = ${sum}`);
    });
  });

  confirmed.forEach((val) => console.log(val));
  /*
    Output:
    123 + 231 = 354
    145 + 451 = 596
    157 + 571 = 728
    325 + 253 = 578

    ---------------------
    Answer:
    B can be even OR odd!
    ---------------------
  */
})();
