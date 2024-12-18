import { useState } from "react";

import "./App.css";

function App() {
  const [day, SetDay] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + day);
  function handleReset() {
    SetDay(0);
    setStep(1)
  }

 

  return (
    <>
      <div className="">
        {/* <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button> */}
        <input type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}/>
          <span>{step}</span>
      </div>
      <div className="">
        <button onClick={() => SetDay((c) => c - step)}>-</button>
        {/* <span>count:{day}</span> */}
        <input type="text" 
               value={day}
               onChange={(e) => SetDay(+e.target.value)}/>
            
        <button onClick={() => SetDay((c) => c + step)}>+</button>
      </div>

      <div>
        <h3>
          {" "}
          {day} days from today is {date.toDateString()}{" "}
        </h3>
      </div>

     { (day!==0  || step !==1) ? <div>
        <button type="text" onClick={handleReset}>Reset</button>
      </div> : null}
    </>
  );
}

export default App;
