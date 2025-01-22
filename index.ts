// Complexity "O(1)"
function formulaApproach(n: number): number {
  return n * (n + 1)/2
}

// Complexity "O(n)"
function cycleApproach(n: number): number {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

// Complexity "O(n)", but this function use more computed resources
function recursionApproach(n: number): number {
  if(n === 1) return n;
  return n + recursionApproach(n-1);
}

export { recursionApproach, cycleApproach, formulaApproach }
