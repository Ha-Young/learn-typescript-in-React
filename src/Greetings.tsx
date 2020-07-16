import React from "react";

type GreetingsProps = {
  name: string;
  mark?: string; // defaultProps로 쓰려면 ? 해줘야된다.
  array?: string[];
};

const Greetings: React.FC<GreetingsProps> = ({
  name,
  mark,
  array = ["a", "b", "c"],
}) => {
  // 아래와 같이 map 쓸 수 없다. array type이 string|undefined이기 때문
  // array.map()

  return (
    <div>
      Hello,{name} {mark}
    </div>
  );
};

// default 쓰지 말고 파라미터에 default값으로 주자.
Greetings.defaultProps = {
  mark: "!",
  array: ["a", "b", "c"],
};

export default Greetings;
