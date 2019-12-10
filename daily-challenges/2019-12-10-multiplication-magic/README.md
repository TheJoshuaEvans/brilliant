# Multiplication Magic
Link to the original challenge: [https://brilliant.org/daily-problems/magic-square-1/](https://brilliant.org/daily-problems/magic-square-1/)

I hit a road block working on this simple problem, so I got lazy and wrote a Nodejs program to solve it. This program checks all possible magic squares for ones that are valid. It turns out that it doesn't take very long at all for a modern computer to crunch 362,880 possible permutations. The next step if I was to continue this would be to figure out how to ignore reflections efficiently. I also made it output in a fun way - adding a little spice

# Output
Running the application provides the following output:
```
$ node app.js
Generating Permutations...
Generated 362880 Permutations

Calculating Valid Permutations...
  Finished 0 out of 362880 perms (0%)
  Finished 36288 out of 362880 perms (10%)
  Finished 72576 out of 362880 perms (20%)
  Finished 108864 out of 362880 perms (30%)
  Finished 145152 out of 362880 perms (40%)
  Finished 181440 out of 362880 perms (50%)
  Finished 217728 out of 362880 perms (60%)
  Finished 254016 out of 362880 perms (70%)
  Finished 290304 out of 362880 perms (80%)
  Finished 326592 out of 362880 perms (90%)
Found 8 valid permutations:

|--------------------|
| 3    | 729  | 243  |
|--------------------|
| 6561 | 81   | 1    |
|--------------------|
| 27   | 9    | 2187 |
|--------------------|


|--------------------|
| 3    | 6561 | 27   |
|--------------------|
| 729  | 81   | 9    |
|--------------------|
| 243  | 1    | 2187 |
|--------------------|


|--------------------|
| 27   | 9    | 2187 |
|--------------------|
| 6561 | 81   | 1    |
|--------------------|
| 3    | 729  | 243  |
|--------------------|


|--------------------|
| 27   | 6561 | 3    |
|--------------------|
| 9    | 81   | 729  |
|--------------------|
| 2187 | 1    | 243  |
|--------------------|


|--------------------|
| 243  | 1    | 2187 |
|--------------------|
| 729  | 81   | 9    |
|--------------------|
| 3    | 6561 | 27   |
|--------------------|


|--------------------|
| 243  | 729  | 3    |
|--------------------|
| 1    | 81   | 6561 |
|--------------------|
| 2187 | 9    | 27   |
|--------------------|


|--------------------|
| 2187 | 1    | 243  |
|--------------------|
| 9    | 81   | 729  |
|--------------------|
| 27   | 6561 | 3    |
|--------------------|


|--------------------|
| 2187 | 9    | 27   |
|--------------------|
| 1    | 81   | 6561 |
|--------------------|
| 243  | 729  | 3    |
|--------------------|


Process took 1.983 seconds
```
# Answer
All permutations have 81 at the center - so 81 is the answer
