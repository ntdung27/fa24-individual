import { useState } from "react";
import "./App.css";
import ShowStudent from "./components/ShowStudent";

function App() {
  // -----------STATE
  const [color, setColor] = useState("purple");
  const handleClick = () => {
    setColor("gray");
  };
  // -----------COMPONENTS
  const student = {
    fullname: "Nguyen Thuy Dung",
    age: 20,
    address: "Quang Ninh",
    isMarried: false,
  };
  // -------------RETURN
  return (
    <>
      <ShowStudent student={student}></ShowStudent>
      <div>
        <button onClick={handleClick}>Change Color</button>
        <div
          style={{ background: color, width: 100, height: 100, color: "white" }}
        >
          Content
        </div>
      </div>
    </>
  );
}

export default App;
