import { useRef, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const inputRef = useRef();

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime(t => t + 10);
      }, 10);
    }
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    pause();
    setTime(0);
  };

  const addLap = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>{time} ms</h2>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      <br />
      <input ref={inputRef} placeholder="Lap name" />
      <button onClick={addLap}>Add Lap</button>
    </div>
  );
}

export default Stopwatch;
