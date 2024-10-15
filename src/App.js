import "./App.css";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const keyPressedref = useRef(false);
  const [keyState, setKeyState] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "4") {
      !keyPressedref.current ? setKeyState("PRESSED") : setKeyState("HOLDING");
      keyPressedref.current = true;
    }
  };

  const handleKeyRelease = (event) => {
    if (event.key === "4") {
      setKeyState("RELEASE");
      keyPressedref.current = false;
      setTimeout(() => {
        setKeyState("");
      }, 250);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return <div className="App">KEY 4 IS: {keyState}</div>;
};

export default App;
