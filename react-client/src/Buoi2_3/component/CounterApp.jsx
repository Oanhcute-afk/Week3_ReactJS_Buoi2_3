import { useState } from "react";
import "../css/CounterApp.css"
function CounterApp(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <h2 className={count > 10? "danger":""}>{count}</h2>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>{count>0 && setCount(count-1)}}>-</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>
        </div>
    )
}
export default CounterApp;