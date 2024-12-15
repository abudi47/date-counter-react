import { useState } from "react";

import "./App.css";

function App() {
  const [day, SetDay] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + day);

  return (
    <>
      <div className="">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="">
        <button onClick={() => SetDay((c) => c - step)}>-</button>
        <span>count:{day}</span>
        <button onClick={() => SetDay((c) => c + step)}>+</button>
      </div>

      <div>
        <h3>
          {" "}
          {day} days from today is {date.toDateString()}{" "}
        </h3>
      </div>
    </>
  );
}

export default App;
