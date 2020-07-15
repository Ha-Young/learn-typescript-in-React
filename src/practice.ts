interface Person {
  name: string;
  age?: number; // ?는 프로퍼티가 있어도 되고 없어도 될때 쓴다.
}

interface Developer extends Person {
  skills: string[];
}

// type alias - interface와 같지만 더 다양한 일을 할 수 있다.
type Person = {
  name: string;
  age?: number; // ?는 프로퍼티가 있어도 되고 없어도 될때 쓴다.
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "김사람",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react", "typescript"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "oragne" | "yellow";
const color: Color = "oragne";
