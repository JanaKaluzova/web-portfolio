import { getAuth, onAuthStateChanged, UserInfo } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import Home from "./Home";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <div>{user ? <Home /> : <Login />}</div>;
};

export default Dashboard;
