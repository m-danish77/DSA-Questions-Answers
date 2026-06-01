// Pattern 22 n = 4
// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

/*
 * EASY EXPLANATION:
 *
 * We want a square grid of size (2*n - 1) x (2*n - 1).
 * Example: if n = 4, grid is 7x7. Numbers go from 4 (outside) down to 1 (center).
 *
 * For any cell at (row, col): (Remember we start loop with 0)
 *
 * 1. How far is it from the top edge?      = row (which is i)
 * 2. How far from the bottom edge?         = (size-1) - row
 * 3. How far from the left edge?           = col (which is j)
 * 4. How far from the right edge?          = (size-1) - col
 *
 * 5. Pick the SMALLEST of these four numbers. That's the "layer" from the edge.
 *    - If you're on the very edge, smallest = 0.
 *    - One step inside, smallest = 1.
 *    - And so on.
 *
 * 6. The number to write in the cell is: n - smallest.
 *
 * That's it! The formula n - min(distance to any wall) creates the diamond pattern.
 */

function pattern22(n) {
  let size = 2 * n - 1;
  for (let i = 0; i < size; i++) {
    let str = "";

    for (let j = 0; j < size; j++) {
      let top = i;
      let left = j;
      let right = size - 1 - j;
      let bottom = size - 1 - i;

      let minDistance = Math.min(top, left, bottom, right);
      str += n - minDistance + " ";
    }
    console.log(str.trim());
  }
}
pattern22(4);
