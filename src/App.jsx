import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <div className="counter">
          <h1>Counter App With React</h1>
          <h2>Counter Value: {count}</h2>
          <div className="buttons">
            <button
              onClick={() => {
                if (count >= 0) {
                  setCount(count + 1);
                } else {
                  setCount(count);
                }
              }}
            >
              Increase Value {count}
            </button>
            <button
              onClick={() => {
                if (count <= 0) {
                  setCount(count);
                } else {
                  setCount(count - 1);
                }
              }}
            >
              decrease Value {count}
            </button>
            <button
              onClick={() => {
                setCount(0);
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
