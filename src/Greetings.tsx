import React from "react";

type GreetingsProps = {
  name: string;
  mark: string; // defaultProps로 쓰려면 ? 해줘야된다.
};

function Greetings({ name, mark }: GreetingsProps) {
  return (
    <div>
      Hello,{name} {mark}
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
