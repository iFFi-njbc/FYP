import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Button of uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const[text, setText] = useState("Enter your text here :");

  return (
<div>
<div className="mb-3">
    <h1>{props.title}</h1>
    {/* <label for="myBlock" className="form-label">{props.title}</label> */}

    <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBlock" rows="5"></textarea>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert</button>
    
</div>
<div className='container my-3'>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
</div>

</div>
  )
}

TextForm.prototype = {
    title : PropTypes.string
}

TextForm.defaultProps = {
    title : "Enter your Text here : "
}
