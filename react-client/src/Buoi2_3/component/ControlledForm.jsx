import { useState } from "react";

function ControlledForm (){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    return(
        <>
        <form action="">
        <input type="text" placeholder="your name" onChange={e=>{setName(e.target.value)}} />
        <br />
        <input type="text" placeholder="your email" onChange={e=>{setEmail(e.target.value)}}/>

        </form>
        <p>Your name: {name}</p>
        <p>Your email: {email}</p>
        </>
    )
}
export default ControlledForm;