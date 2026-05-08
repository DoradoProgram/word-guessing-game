import { useEffect, useState } from "react";
import {
    collection,
    getDocs,   
    query
} from "firebase/firestore";


import { db } from "../../firebase/firebaseConfig";


function Scores(){
    const[scores, setScores] = useState([]);

    useEffect(() => {
        const fetchScores = async () => {
            const querySnapshot =
            await getDocs(collection(db, "scores"));
        
        const data =
           querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
           }));

           setScores(data);
        };

     fetchScores();}, []);


    return(
        <div>
            <h1>Leadeboard</h1>
            {
                scores.map((score) => (
                    <div key={score.id}>
                        <p>
                            {score.userEmail} - {score.score}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default Scores;