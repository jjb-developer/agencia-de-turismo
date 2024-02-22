import Navbar from "../Nav/Navbar";
import { useEffect, useState } from "react";
import { loginHandler } from "../../utils/login.js";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData,setUserData]=useState(null);

  const navigate=useNavigate();
    async function handleSubmit(e) {
    e.preventDefault();
    //llamo a login.js
    const res= await loginHandler(username, password);
    setUserData(res)
    console.log(res)
}

useEffect(()=>{
    if(userData){
        navigate('/')
    }
},[userData])


  return (
    <>
      <section className="absolute left-0 top-0 bg-gray-50">
        <Navbar />
      </section>
      <section className="bg-blue-200 w-full h-screen flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col p-4 gap-y-2"
        >
          <label>Username</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="frutiCremix"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            name=""
            id=""
            placeholder="******"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="flex items-center justify-center w-full h-auto">
            <button
              type="submit"
              className="bg-blue-400 text-white font-bold max-w-24 p-2 rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
