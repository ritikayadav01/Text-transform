// rfc
import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpCase = () => {
    console.log("covert to uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoCase = () => {
    console.log("covert to uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  // this is will help to change other wise we won't be able to type
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy=()=>{
    var text=document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        {/* text="this "-->wrong way  */}
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="7"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-info" onClick={handleUpCase}>
          Convert to uppercase{" "}
        </button>
        <button className="btn btn-info mx-2" onClick={handleLoCase}>
          Convert to Lowercase{" "}
        </button>
        <button className="btn btn-info mx-2" onClick={handleCopy}>
          Copy to clipboard{" "}
        </button>
        <button className="btn btn-info mx-2" onClick={handleExtraSpaces}>
          Trim Extra Spaces {" "}
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 *text.split(" ").length} Minutes to read it </p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Write something above to preview "}</p>

      </div>
    </>
  );
}
