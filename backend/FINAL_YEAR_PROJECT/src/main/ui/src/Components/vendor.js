import React, { useState } from "react";

const VendorForm = () => {
const [formData, setFormData] = useState({
name: "",
vendorId: "",
email: "",
address: "",
postalCode: "",
country: "",
vendorcategory: "",
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
const [opamount, setopamount] = useState('');

const handleOPChange = (event) => {
  const opValue = event.target.value;
  if (!isNaN(event.target.value) ) {
    setopamount(opValue);
  }
};
const [creditlimit, setcrlimit] = useState('');

const handlelimitChange = (event) => {
  const crValue = event.target.value;
  if (!isNaN(event.target.value) ) {
    setcrlimit(crValue);
  }
};
const [limitday, setlimitday] = useState('');

const handlelimitdayChange = (event) => {
  const limitdayValue = event.target.value;
  if (!isNaN(event.target.value) ) {
    setlimitday(limitdayValue);
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
<h1 style={{ fontSize: "60px", fontWeight: "bold", textAlign: "center", color: "steelblue",fontFamily:"serif" }}>Vendor Form</h1>
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
Vendor ID:
<input type="text" required name="vendorId" value={formData.vendorId} onChange={handleChange} placeholder="Enter ID" style={{ fontSize: "18px", textAlign: "left" }} />
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
Opening Amount:
<input type="text" required name="opamount" value={opamount} onChange={handleOPChange} style={{ fontSize: "18px", textAlign: "left" }} />
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
Vendor Category:
<select required name="vendorcate" value={formData.vendorcategory} onChange={handleChange} style={{ fontSize: "18px", textAlign: "left" }}>

  <option value="">Select</option>
  <option value="area">Sales</option>
  <option value="customer">HR</option>
  <option value="other">Purchase</option>
  
</select>
</label>
</div>
<br />
<div style={{ flex:1,textAlign: "right" }}>
<label style={{ fontSize:"30px",fontWeight: "bold",fontFamily:"serif" }}>
Credit-Limit-Amount:
<input type="text" required name="creditlimit" value={creditlimit} onChange={handlelimitChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
</div>
<br />
<div style={{ marginBottom: "20px", display: "flex" }}>
<div style={{ flex:1,textAlign: "left" }}>
<label style={{ fontSize: "30px",fontWeight: "bold" ,fontFamily:"serif" }}>
Credit-Limit-Days:
<input type="text" required name="limitdays" value={limitday} onChange={handlelimitdayChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
<br />
<div style={{ flex:1,textAlign: "right" }}>
<label style={{ fontSize:"30px",fontWeight: "bold",fontFamily:"serif"}}>
Attachments:
<input type="file" required name="attachments" onChange={handleFile} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
</div>
</div>
<br />

<div style={{ flex:1,textAlign: "left" }}>
<label style={{ fontSize: "30px",fontWeight: "bold" ,fontFamily:"serif" }}>
Contact:
<input type="text" required name="contact" value={contact} onChange={handleContactChange} style={{ fontSize: "18px", textAlign: "left" }} />
</label>
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
export default VendorForm;