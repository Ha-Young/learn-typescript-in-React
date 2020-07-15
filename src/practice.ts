// return type - number
// parameter x - number / y - number
function sum(x: number, y: number): number {
  return x + y;
}

const result = sum(1, 2);

// return type - number
// paramter numbers = number[]
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

// return type - 미설정
function returnNothing() {
  console.log("어쩌고저쩌고");
}

returnNothing(); // 자동으로 return type이 void가 된다.

// return type - string, number union
function returnStringOrNumber(): string | number {
  return 4;
}
