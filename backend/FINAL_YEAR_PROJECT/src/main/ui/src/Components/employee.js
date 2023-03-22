import React, { useState } from "react";

const EmployeeForm = () => {
    
const [formData, setFormData] = useState({
name: "",
employeeId: "",
email: "",
address: "",
postalCode: "",
country: "",
department: "",
dob: "",
joiningDate: "",
registrationDate: "",
attachments: ""
});
const [contact, setContact] = useState('');

  const handleContactChange = (event) => {
  
    if (!isNaN(event.target.value) ) {
      setContact(event.target.value);
    }
  };

const handleChange = (event) => {
setFormData({
...formData,
[event.target.name]: event.target.value
});
}
const [cnic, setCnic] = useState('');

const handleCnicChange = (event) => {
  const cnicValue = event.target.value;
  if (!isNaN(event.target.value) ) {
    setCnic(cnicValue);
  }
};
const [ntn, setNTN] = useState('');

const handlentnChange = (event) => {
  const ntnValue = event.target.value;
  if (!isNaN(event.target.value) ) {
    setNTN(ntnValue);
  }
};
const [postalcode, setcode] = useState('');

const handlecodeChange = (event) => {
  const codeValue = event.target.value;
  if (!isNaN(event.target.value) ) {
    setcode(codeValue);
  }
};
const handleFile = (event) => {
setFormData({
...formData,
attachments: event.target.files[0]
});
}
const [formSubmitted, setFormSubmitted] = useState(false);
const handleSubmit = (event) => {
  event.preventDefault();
  if (event.currentTarget.checkValidity() === false) {
      event.stopPropagation();
  } else {
    setFormSubmitted(true);
  }
}

return (
<div style={{ textAlign: "center", backgroundColor: "linen", padding: "50px" }}>
<h1 style={{ fontSize: "60px", fontWeight: "bold", textAlign: "center", color: "steelblue",fontFamily:"serif" }}>Employee Form</h1>
{formSubmitted ? <div>Form submitted successfully!</div> :
<form onSubmit={handleSubmit}>
<div style={{ marginBottom: "20px", display: "flex" }}>
<div style={{ flex:1,textAlign: "left" }}>
<label style={{ fontSize: "30px" ,fontWeight: "bold",fontFamily:"serif" }}>
Name:
<input type="text" required name="name"  value={formData.name} onChange={handleChange}placeholder="Enter name" style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
<br />
<div style={{ flex: 1, textAlign: "right" }}>
<label style={{ fontWeight: "bold",fontSize: "30px" ,fontFamily:"serif" }}>
Employee ID:
<input type="text" required name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="Enter ID" style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
</div>
<br />
<div style={{ marginBottom: "20px", display: "flex" }}>
<div style={{ flex:1,textAlign: "left" }}>
<label style={{ fontWeight: "bold",fontSize:"30px",fontFamily:"serif" }}>
Email:
<input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="@gmail.com" name="email" value={formData.email} onChange={handleChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
<br />
<div style={{ flex:1,textAlign: "right" }}>
<label style={{ fontWeight: "bold",fontSize:"30px",fontFamily:"serif" }}>
CNIC:
<input type="text" name="cnic" value={cnic} placeholder="CNIC without space" onChange={handleCnicChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
</div>
<br />
<div style={{ marginBottom: "20px", display: "flex" }}>
<div style={{ flex:1,textAlign: "left" }}>
<label style={{ fontWeight: "bold",fontSize:"30px",fontFamily:"serif"  }}>
NTN:
<input type="text" required name="ntn" value={ntn} onChange={handlentnChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
<br />
<div style={{ flex:1,textAlign: "right" }}>
<label style={{ fontWeight: "bold",fontSize:"30px",fontFamily:"serif"  }}>
Address:
<input type="text" required name="address" value={formData.address} onChange={handleChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
</div>
<br />
<div style={{ marginBottom: "20px", display: "flex" }}>
<div style={{ flex:1,textAlign: "left" }}>
<label style={{ fontWeight: "bold",fontSize:"30px",fontFamily:"serif"  }}>
Postal Code:
<input type="text" required name="postalCode" value={postalcode} onChange={handlecodeChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>

<br />
<div style={{ flex:1,textAlign: "right" }}>
<label style={{ fontSize: "30px",fontWeight: "bold",fontFamily:"serif" }}>
Country:
<input type="text" required name="country" value
={formData.country} onChange={handleChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
</div>
<br />
<div style={{ marginBottom: "20px", display: "flex" }}>
<div style={{ flex:1,textAlign: "left" }}>
<label style={{ fontSize:"30px",fontWeight: "bold",fontFamily:"serif"}}>
Department:
<select required name="department" value={formData.department} onChange={handleChange} style={{ fontSize: "18px", textAlign: "left" }}>

  <option value="">Select</option>
  <option value="Sales">Sales</option>
  <option value="HR">HR</option>
  <option value="Purchase">Purchase</option>
  <option value="Inventory">Inventory</option>
  <option value="Production">Production</option>
  <option value="Accounts">Accounts</option>
</select>
</label>
</div>
<br />
<div style={{ flex:1,textAlign: "right" }}>
<label style={{ fontSize:"30px",fontWeight: "bold",fontFamily:"serif" }}>
Date-of-Birth:
<input type="date" required name="dob" value={formData.dob} onChange={handleChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
</div>
<br />
<div style={{ marginBottom: "20px", display: "flex" }}>
<div style={{ flex:1,textAlign: "left" }}>
<label style={{ fontSize: "30px",fontWeight: "bold" ,fontFamily:"serif" }}>
Joining Date:
<input type="date" required name="joiningDate" value={formData.joiningDate} onChange={handleChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
<br />
<div style={{ flex:1,textAlign: "right" }}>
<label style={{ fontSize: "30px",fontWeight: "bold" ,fontFamily:"serif" }}>
Registration Date:
<input type="date" required name="registrationDate" value={formData.registrationDate} onChange={handleChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
</div>
<br />
<div style={{ marginBottom: "20px", display: "flex" }}>
<div style={{ flex:1,textAlign: "left" }}>
<label style={{ fontSize:"30px",fontWeight: "bold",fontFamily:"serif"}}>
Attachments:
<input type="file" required name="attachments" onChange={handleFile} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
<br />
<div style={{ flex:1,textAlign: "right" }}>
<label style={{ fontSize: "30px",fontWeight: "bold" ,fontFamily:"serif" }}>
Contact:
<input type="text" required name="contact" value={contact} onChange={handleContactChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
  
<button>
<input type="submit" value="Submit Form" style={{  fontWeight:"bold", fontSize: "30px", padding: "10px 20px",fontFamily:"serif", backgroundColor: "lightsteelblue", color: "black", borderColor: "black" }} />
</button>
</div>
</form>}
</div>
);
};
export default EmployeeForm