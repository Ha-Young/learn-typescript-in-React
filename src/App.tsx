import React from "react";
import Greetings from "./Greetings";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name);
  };
  return <Greetings name="TypeScript in React" onClick={onClick} />;
};
export default App;
