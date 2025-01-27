import { useState } from "react";
import Button from "../ui/components/Button";
import Login from "./User/Login";
import Register from "./User/Register";


const Home = () => {
  const [openTab, setOpenTab] = useState("login")
  return (
   <div className="main">
     <div className="main-container rounded display-flex-column">
        <div className="nav display-flex g-6">
            <div onClick={()=> setOpenTab("login")} className={openTab == "login" ? "active" : "inactive"}>
              Login
            </div>
            <div onClick={()=> setOpenTab("register")} className={openTab == "register" ? "active" : "inactive"}>
              Cadastro
            </div>
        </div>
        <div className="content display-flex-column p-24">
          {openTab == "login" && (  
            <Login></Login>
          )}
          {openTab == "register" && (  
            <Register></Register>
          )}
        </div>
     </div>
   </div>
  );
};

export default Home;
