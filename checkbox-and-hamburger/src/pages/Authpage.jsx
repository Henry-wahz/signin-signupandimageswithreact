
import "./Authpage.css"
import Signup from "./Signup"
import Signin from "./Signin";
import { useState } from "react";



export default function Authpage() {
    const [tab, setTab]=useState("signin")
    return (<>
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">
                    <h1 className="moon">🌙</h1>
                    <h2>
                        Lady Midnight
                    </h2>
                    <p>Private gallery</p>
                </div>
                <div className="auth-button" >
                    <button onClick={()=>setTab("signin")} className={`${tab ==="signin"? "active" : ""}`}>Sign In</button>
                    <button onClick={()=>setTab("signup")} className={`${tab ==="signup"? "active" : ""}`}>Sign Up</button>
                </div>
             <div>
                 {tab === "signin" ?  (<Signin />) : ( <Signup />)}
             </div>
            </div>

        </div>

    </>)

}