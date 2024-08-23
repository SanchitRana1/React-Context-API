import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const {setUser} = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(userInfo)
  };

  return (
    <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
      <h2>Login</h2>

      <input
        type="text"
        name="userName"
        id=""
        placeholder="userName"
        onChange={handleChange}
        value={userInfo?.userName}
      />
      <input
        type="password"
        name="password"
        id=""
        placeholder="password"
        onChange={handleChange}
        value={userInfo?.password}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
