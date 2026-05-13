// Singin.jsx ( input box, passwort box, enter gallery button)
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


export default function Signin(){
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [error, setError]=useState("")
      
    const navigate= useNavigate()
    async function handleSignin() {
        if (!email || !password){
            return setError ("Please fill in all the boxes")
        }try{
            await signInWithEmailAndPassword(auth,email,password)
            navigate("/Gallery")
        }catch(errorz){
            setError(errorz.message)
        }
        
    }
    return (

       <>
      
    
   {error && <p style={{color :" red"}}>{error}</p>}
   <div className="input-box">
     <label>Email</label>
    <input type="email" placeholder="Display @example.com"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
    />

   </div>
    <div className="input-box">
        <label>Password</label>
    <input type="password" placeholder="Min. 6 character"
    value={password}
    onChange={(e)=> setPassword(e.target.value)} />
    </div>
    <button className="sign-button" onClick={handleSignin}>Create acount</button>
       </>
    )
}

