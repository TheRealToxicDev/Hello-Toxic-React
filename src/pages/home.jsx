import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";

// Our language strings
const strings = [
  "Hello Toxic",
  "Bonjour Toxic"
  "Salut Toxic",
  "Hola Toxic",
  "안녕 Toxic",
  "Hej Toxic"
];

// Utility function to choose a random value from the language array
function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}

export default function Home() {
  const [hello, setHello] = React.useState(strings[0]);
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  const handleChangeHello = () => {
    // Choose a new Hello from our languages
    const newHello = randomLanguage();
    // And set it in our components state
    setHello(newHello);
  };
  return (
    <>
      <h1 className="title">{hello}!</h1>
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src="https://cordx.lol/u/cb9373"
          className="illustration"
          onClick={handleChangeHello}
          alt="Illustration click to change language"
        />
      </animated.div>
      <div className="navigation">
        <animated.div onMouseEnter={trigger}>
          <a className="btn--click-me" onClick={handleChangeHello} style={{color: '#7289DA'}}>
            Psst, click me
          </a>
        </animated.div>
      </div>
    </>
  );
}
