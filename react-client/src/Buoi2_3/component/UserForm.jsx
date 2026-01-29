import { useState } from "react";
function UserForm(){
      const [form, setForm] = useState({
        name: "",
        email:"",
        age:""
      });

      const handleChange = (e)=>{
        const {name, value} = e.target;
        setForm({...form, [name]:value});
      }
      return (
        <div>
            <h2>User Form</h2>
            <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange}/>
            <br />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <br />
            <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
            <p><b>Tên:</b> {form.name || "Chưa nhập"}</p>
            <p><b>Email:</b> {form.email || "Chưa nhập"}</p>
            <p><b>Tuổi:</b> {form.age || "Chưa nhập"}</p>
        </div>
      )
}
export default UserForm;