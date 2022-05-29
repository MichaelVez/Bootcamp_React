import React, { useState } from "react";

export default function E183() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const handleSeconds = (e) => {
    setSeconds(e.target.value);
    setMinutes(e.target.value / 60);
    setHours(e.target.value / 3600);
  };
  const handleMinutes = (e) => {
    setSeconds(e.target.value * 60);
    setMinutes(e.target.value);
    setHours(e.target.value / 60);
  };
  const handleHours = (e) => {
    setSeconds(e.target.value * 3600);
    setMinutes(e.target.value * 60);
    setHours(e.target.value);
  };
  return (
    <div>
      <div>
        <span>Seconds</span>
        <input type='number' value={seconds} onChange={handleSeconds} />
      </div>
      <div>
        <span>Minutes</span>
        <input type='number' value={minutes} onChange={handleMinutes} />
      </div>
      <div>
        <span>Hours</span>
        <input type='number' value={hours} onChange={handleHours} />
      </div>
    </div>
  );
}
