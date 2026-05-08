import { useState } from "react";
import { db, auth } from "../../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";


function Play(){


    const words = ["react", "firebase", "javascript"];
    const randomWord =
       words[Math.floor(Math.random() * words.length)];


    const[guess, setGuess] = useState("");
    const[message, setMessage] = useState("");

    const checkGuess = async () => {
        
        if(guess === randomWord){
            setMessage("Correct!");
            await addDoc(collection(db,"scores"), {
                userEmail: auth.currentUser?.email,
                score:100,
                date: new Date()
            });
        } else{
            setMessage("Try Again");
        }
    };

    return(
        <div>
            <h1>Play Game</h1>

            <p>Guess the word!</p>

            <input 
             type="text"
             onChange={(e) => setGuess(e.target.value)}
             />

            <button onClick={checkGuess}>
                Submit
            </button>


            <h2>{message}</h2>
        </div>
    );

}


export default Play;