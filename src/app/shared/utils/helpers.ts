export function getRandomInt(max) {
  let num = Math.floor(Math.random() * Math.floor(max));
  return (num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1);
}
