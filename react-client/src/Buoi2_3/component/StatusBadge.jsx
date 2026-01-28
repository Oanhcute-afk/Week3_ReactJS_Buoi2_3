import { useState } from "react";
import "../css/StatusBadge.css";

function StatusBadge({ status = "offline" }) {
  const [current, setCurrent] = useState(status);

  return (
    <div>
      <div className={`badge ${current}`}>{current}</div>

      <button onClick={() => setCurrent("online")}>Online</button>
      <button onClick={() => setCurrent("offline")}>Offline</button>
      <button onClick={() => setCurrent("busy")}>Busy</button>
    </div>
  );
}

export default StatusBadge;
