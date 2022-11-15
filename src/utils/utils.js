import gaussian from "gaussian";

export function sign(value) {
  return value < 0 ? -1 : 1;
}


export function isEven(value) {
  return value % 2 === 0;
}

export function isOdd(value) {
  return value % 2 === 1;
}

export function toBinaryVector(value) {
  let digits = [];
  while (value > 0) {
    let digit = value % 2;
    digits.unshift(digit);
    value = value >>> 1;
  }
  let N = 16;
  const L = Math.log2(N - 1); // TODO: remove hardcoding of N
  while (digits.length < L) {
    digits.unshift(0);
  }
  return digits;
}

export function toBinaryString(value) {
  return toBinaryVector(value).join("");
}

export function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

export function generateRandomDeltas({ stages, mean, variance, pufCount }) {
  const distribution = gaussian(mean, variance);
  const randoms = distribution.random(2 * stages * pufCount);
  const pufDeltas = [];
  let offset = 0;
  for (let j = 0; j < pufCount; j++) {
    const deltas = [];
    for (let i = 0; i < 2 * stages; i += 2) {
      deltas.push({
        0: randoms[i + offset],
        1: randoms[i + 1 + offset]
      });
    }
    pufDeltas.push(deltas);
    offset += 2 * stages;
  }
  return pufDeltas;
}