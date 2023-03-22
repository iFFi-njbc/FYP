import  React  from "react"; 
import {  useState } from "react";

    const CustomerForm = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    code: "",
    cnic: "",
    postalCode: "",
    state: "",
    category: "",
    contact: "",
    openingAmount: "",
    creditLimitAmount: "",
    creditLimitDays: "",
    attachments: ""
    });
    
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
    const [contact, setContact] = useState('');
    
    const handleContactChange = (event) => {
      const contactValue = event.target.value;
      if (!isNaN(event.target.value) ) {
        setContact(contactValue);
      }
    };
    const [openingAmount, setOa] = useState('');
    
    const handleOaChange = (event) => {
      const oaValue = event.target.value;
      if (!isNaN(event.target.value) ) {
        setOa(oaValue);
      }
    };
    const [creditLimitAmount, setCla] = useState('');
    
    const handleClaChange = (event) => {
      const claValue = event.target.value;
      if (!isNaN(event.target.value) ) {
        setCla(claValue);
      }
    };
    const [creditLimitDays, setCld] = useState('');
    
    const handleCldChange = (event) => {
      const cldValue = event.target.value;
      if (!isNaN(event.target.value) ) {
        setCld(cldValue);
      }
    };
    const [code, setcode] = useState('');
    
    const handlecodeChange = (event) => {
      const codeValue = event.target.value;
      if (!isNaN(event.target.value) ) {
        setcode(codeValue);
      }
    };
    const [postalcode, setpcode] = useState('');
    
    const handlepcodeChange = (event) => {
      const pcodeValue = event.target.value;
      if (!isNaN(event.target.value) ) {
        setpcode(pcodeValue);
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
    <div style={{ textAlign: "left", backgroundColor: "linen", padding: "50px" }}>
    <h1 style={{ fontSize: "60px", fontWeight: "bold", textAlign: "center", color: "steelblue",fontFamily:"serif" }}>Customer Form</h1>
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
    Customer Code:
    <input type="text" required name="code" value={code} onChange={handlecodeChange} placeholder="Enter code" style={{ fontSize: "18px", textAlign: "left" }} />
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
    Contact:
    <input type="text" required name="contact" value={contact} onChange={handleContactChange} style={{ fontSize: "18px", textAlign: "left" }} />
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
    <input type="text" required name="postalCode" value={postalcode} onChange={handlepcodeChange} style={{ fontSize: "18px", textAlign: "left" }} />
    </label>
    </div>
    <br />
    <div style={{ flex:1,textAlign: "right" }}>
    <label style={{ fontSize: "30px",fontWeight: "bold",fontFamily:"serif" }}>
    State:
    <input type="text" required name="state" value={formData.state} onChange={handleChange} style={{ fontSize: "18px", textAlign: "left" }} />
    </label>
    </div>
    </div>
    <br />
    <div style={{ marginBottom: "20px", display: "flex" }}>
    <div style={{ flex:1,textAlign: "left" }}>
    <label style={{ fontSize:"30px",fontWeight: "bold",fontFamily:"serif"}}>
    Category:
    <select required name="category" value={formData.category} onChange={handleChange} style={{ fontSize: "18px", textAlign: "left" }}>
    
      <option value="">Select</option>
      <option value="Sales">Sales</option>
      <option value="HR">HR</option>
      <option value="Purchase">Purchase</option>
      <option value="Inventory">Inventory</option>
[10:23 am, 31/01/2023] hiza: <option value="Production">Production</option>
      <option value="Accounts">Accounts</option>
    </select>
    </label>
    </div>
    <br />
    <div style={{ flex:1,textAlign: "right" }}>
    <label style={{ fontSize:"30px",fontWeight: "bold",fontFamily:"serif" }}>
    Opening Amount:
    <input type="text" required name="openingAmount" value={openingAmount} onChange={handleOaChange} style={{ fontSize: "18px", textAlign: "left" }} />
    </label>
    </div>
    </div>
    <br />
    <div style={{ marginBottom: "20px", display: "flex" }}>
    <div style={{ flex:1,textAlign: "left" }}>
    <label style={{ fontSize: "30px",fontWeight: "bold" ,fontFamily:"serif" }}>
    Credit Limit Amount:
    <input type="text" required name="creditLimitAmount" value={creditLimitAmount} onChange={handleClaChange} style={{ fontSize: "18px", textAlign: "left" }} />
    </label>
    </div>
    <br />
    <div style={{ flex:1,textAlign: "right" }}>
    <label style={{ fontSize: "30px",fontWeight: "bold" ,fontFamily:"serif" }}>
    Credit Limit Days:
    <input type="text" required name="creditLimitDays" value={creditLimitDays} onChange={handleCldChange} style={{ fontSize: "18px", textAlign: "left" }} />
    </label>
    </div>
    </div>
    <br />
    <label style={{ fontSize:"30px",fontWeight: "bold",fontFamily:"serif"}}>
    Attachments:
    <input type="file" required name="attachments" onChange={handleFile} style={{ fontSize: "18px", textAlign: "left" }} />
    </label>
    <br />
    <div style={{ display: "flex", justifyContent: "center" }}>
      
    <button>
    <input type="submit" value="Submit Form" style={{  fontWeight:"bold", fontSize: "30px", padding: "10px 20px",fontFamily:"serif", backgroundColor: "lightsteelblue", color: "black", borderColor: "black" }} />
    </button>
    </div>
    </form>}
    </div>
    );
    };
    export default CustomerForm;