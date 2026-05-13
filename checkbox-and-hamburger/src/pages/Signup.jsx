// Signp.jsx( name input box, email box, pass box and create btn)
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export default function Signup() {
  const [name, setName]= useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword]=useState("")
  const [error, setError]=useState("")

//error = false (empty string)
  async function handleSignup(){
        if(!name || !email|| !password){
           return setError("Please fill in all the boxes")
        }
        try{
          await createUserWithEmailAndPassword(auth,email,password)
        }catch(errorz){
          setError(errorz.message)

        }
  }
   return(
    <>
    {error && <p style={{color: "red"}}>{error}</p>}
   <div className="input-box">

     <label > Name</label>
    <input type="text" placeholder="Display name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
    />

   </div>
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
    onChange={(e)=> setPassword(e.target.value)}
    />
    </div>
    <button className="sign-button" onClick={handleSignup}>Create acount</button>

    


    </>
   )
}