import React from 'react';
import { useState } from "react";
import UserProfileForm from "./users";
import CustomerForm from "./customer";
import VendorForm from "./vendor";
import EmployeeForm from "./employee";



function Form(){
const[page,setPage]=useState(0);
const FormTitles=["Users","Employee","Customer","Vendor"];
//function RedirectForm() {
  //  useEffect(() => {
    //  window.location.href = './employee';
   // }, []);
//}
const Display=()=>{
    if(page === 0){
        return <UserProfileForm />;
    }
    else if(page === 1){
        return <EmployeeForm />;
    }
    else if(page === 2){
        return <CustomerForm />;
    }
    else
    return <VendorForm />;
};

    return(
<div className="form">
    <div className="container">
<div className="header"></div>
<div className="body">{Display()}</div>
<div className="footer"></div>
<button  style={{backgroundColor: 'steelblue', color: 'white', margin: '10px'}} 
        disabled={page===FormTitles.length-1} 
        onClick={()=>{setPage((currPage)=>currPage+1);}}>
            Employee</button>
        <button    style={{backgroundColor: 'steelblue', color: 'white', margin: '10px'}}
        disabled={page===FormTitles.length-1} 
        onClick={()=>{setPage((currPage)=>currPage+2);}}>Customer</button>
        <button  style={{backgroundColor: 'steelblue', color: 'white', margin: '10px'}}
        disabled={page===FormTitles.length-1} 
        onClick={()=>{setPage((currPage)=>currPage+3);}}>Vendor</button>

    </div>

</div>
    );
};
export default Form;