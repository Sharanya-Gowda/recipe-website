import React from 'react';
import {Navigate,Outlet} from "react-router-dom";

const Privaterouter =() =>{
    const user=localStorage.getItem("user");
    console.log("USER",user);
    return (
        <div>
            {user ? <Outlet /> :<Navigate to="login" /> }
        </div>
    )
}
export default Privaterouter;