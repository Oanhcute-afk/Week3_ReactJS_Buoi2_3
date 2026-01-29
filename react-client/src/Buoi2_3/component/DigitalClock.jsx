import { useEffect, useState } from "react";

function DigitalClock(){
    const [time, setTime] = useState(new Date().getTime());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date().getTime());
        },1000);

        return ()=> clearInterval(id);
    },[]);
    return( <h2>{time.toLocaleString()}</h2>)
}
export default DigitalClock;