let count = 0;
count += 1;
count = "문자열"; // error 자동으로 타입 할당되어있음

const message: string = "hello world";
const done: boolean = false;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];

message.push(1); // error string[] 타입에 인트 추가 X

let mightBeUndefined: string | undefined = undefined; // Union Type
let nullableNumber: number | null = 10; // null

let color: "red" | "orange" | "yellow" = "red"; // literal string type (union)
color = "yellow";
color = "green"; // error liter string type에  없음
