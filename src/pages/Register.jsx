import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";


function Register(){
    const[email,setEmail] = useState('');
    const[password, setPassword] = useState('');
    const register = async() => {
      try{
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        alert("Registered Successfully");
      } catch(error) {
          alert(error.messasge);
      }
    };

    return(
        <div>
            <h1>Regsiter</h1>


            <input 
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
             />

            <input 
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} 
            />



            <button onClick={register}>
                Register
            </button>
        </div>
    );
}


export default Register;