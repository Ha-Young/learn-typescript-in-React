import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
  children?: React.ReactNode;
};

function Greetings({
  name,
  mark,
  optional,
  onClick,
  children,
}: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello,{name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
