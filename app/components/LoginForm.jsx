"use client";
import { useContext, useState } from "react";
import Cookies from "js-cookie";

import { useRouter } from "next/navigation";
//import { AppContext } from "/context/AppContext";
import { AuthContext } from "/context/AuthContext";

function LoginForm() {
  const router = useRouter();
  const login = useContext(AuthContext);
  
  const [password, setPassword] = useState("Tq--100100");
  const [error, setError] = useState("");
  const [email, setEmail] = useState('igbasanx@gmail.com');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify({ email, password }));
    try {
      const response = await fetch("https://trainsquare-web-api2.azurewebsites.net/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if(response.ok){
        const result = await response.json();
        const  token =result.token;
        
      const roles =result.roles;
      console.log(200);
      console.log(result);
      Cookies.set('token', token);
      
        
      if (roles.includes("SuperAdmin")) {
        console.log("superadmin role");
       
        router.push("/"); 
        
      } 
      else {
        console.log("superadmin error");
        
        
      }
        
      }
      else{
        console.log("Log error");
        
        alert("Access denied");
      }
      
    }
    catch(error){
      console.log('error');
    
      console.log(error);
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
     
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
     
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm