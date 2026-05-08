import { auth } from "../../firebase/firebaseConfig";


function Profile(){

    return(
        <div>
            
            <h1>Profile</h1>

            <p>Email: {auth.currentUser?.email}</p>

        </div>
    );
}

export default Profile;