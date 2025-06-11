import { useContext } from "react";
import AuthContext from "./AuthContext";

const Profile =()=>{
    const { user, toggleLogging } = useContext(AuthContext)
return(
    <>
        <p>Hello {user.isLoggedIn ? user.name : 'Guest'}</p>
        <button onClick={toggleLogging}>log</button>
    </>
)
} 

export default Profile;