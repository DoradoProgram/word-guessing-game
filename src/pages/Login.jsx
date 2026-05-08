import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";


function Login(){
    const[email,setEmail] = useState("");
    const[password, setPassword] = useState("");
    const login = async() => {
        try{
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Login Success");
        }catch (error){
            alert(error.message);
        }
    };

    return(
        <div>
            <h1>Login</h1>


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



            <button onClick={login}>
                Login
            </button>
        </div>
    );
};

export default Login;