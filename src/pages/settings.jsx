import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Settings(){
   const[darkMode, setDarkMode] = useState(false);
   const[sound, setSound] = useState(false);
   const navigate = useNavigate();
   const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle("dark-mode");
   } 

   const toggleSound = () => {
    setSound(!sound);
   }

   const logout = async() =>{
      try{
        await signOut(
            auth
        );
        navigate("/login");
      }catch(error){
       alert(error.message);
   } 
 }

 return(
    <div className="container">
        <h1>Settings</h1>

         <p>Dark Mode: {darkMode ? "ON" : "OFF"}</p>
        <button onClick={toggleDarkMode}>Darkmode</button>

        <p>Sound: {sound ? "ON" : "OFF"} </p>
        <button onClick={toggleSound}>Sound</button>


        <button onClick={logout}>Logout</button>
    </div>
 ); 
}

export default Settings;


