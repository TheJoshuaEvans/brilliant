'use strict';

/**
 * Code taken from rosettacode:
 * http://rosettacode.org/wiki/Permutations#JavaScript
 * 
 * @param {*[]} a Array of values to find permutations of
 */
function generatePerms(a) {
  if (a.length < 2) return [a];
  var c, d, b = [];
  for (c = 0; c < a.length; c++) {
      var e = a.splice(c, 1),
          f = generatePerms(a);
      for (d = 0; d < f.length; d++) b.push([e].concat(f[d]));
      a.splice(c, 0, e[0])
  } return b
}

function findValidPerms(perms) {
  // Manually define indexes to multiply
  const indexes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const target = 531441;
  const validPerms = [];

  console.group();
  for (let i=0; i<perms.length; i++) {
    // Do some logging to let us know things are processing
    if (i % (perms.length * 0.1) === 0) console.log(`Finished ${i} out of ${perms.length} perms (${(i/perms.length)*100}%)`);

    const perm = perms[i];
    let isValid = true;
    for (let j=0; j<indexes.length; j++) {
      if (perm[indexes[j][0]] * perm[indexes[j][1]] * perm[indexes[j][2]] !== target) {
        isValid = false
        break;
      }
    }

    if (!isValid) continue;

    validPerms.push(perm);
  }
  console.groupEnd(); 
  
  return validPerms;
}

function renderPerms(perms) {
  perms.forEach((perm) => {
    // First pad the numbers, we know the maximum number of digits is 4
    perm = perm.map((num) => num + ['', ' ', '  ', '   '][4 - num.toString().length])

    console.log(`
|--------------------|
| ${perm[0]} | ${perm[1]} | ${perm[2]} |
|--------------------|
| ${perm[3]} | ${perm[4]} | ${perm[5]} |
|--------------------|
| ${perm[6]} | ${perm[7]} | ${perm[8]} |
|--------------------|
`)
  });
}

// Main program
(() => {
  const startTime = Date.now();
  console.log('Generating Permutations...');
  const permutations = generatePerms([1, 3, 9, 27, 81, 243, 729, 2187, 6561]);
  console.log(`Generated ${permutations.length} Permutations\n`);

  console.log('Calculating Valid Permutations...');
  const validPermutations = findValidPerms(permutations);
  console.log(`Found ${validPermutations.length} valid permutations:`);
  renderPerms(validPermutations);
  console.log(`\nProcess took ${(Date.now() - startTime) / 1000} seconds`);
})()
