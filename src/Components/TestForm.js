import React, { useState } from 'react'

export default function TestForm({ heading, mode, showAlert }) {
    const [text, setText] = useState("");

    const handleLowerCase = () => {
        setText(text.toLowerCase());
        showAlert("Converted to lowercase!", "success");
    }
    const handleCopy = () => {
        showAlert("Text copied to clipboard!", "success");
        navigator.clipboard.writeText(text);
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        //splits the text string into an array of words.
        //using a regular expression that matches one or more spaces as the delimiter.
        setText(newText.join(" ").trim());
    }
    return (
        <div className="container my-3 px-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
            <h2 className='mb-2'>{heading}</h2>
            <div className="mb-3">
                <textarea className={`form-control ${mode === 'dark' ? 'dark-placeholder' : 'light-placeholder'}`} id="myBox" rows="8"
                    placeholder='Enter text'
                    value={text} onChange={(e) => setText(e.target.value)}
                    style={{
                        backgroundColor: mode === 'dark' ? '#565859' : 'white',
                        color: mode === 'dark' ? 'white' : 'black',
                    }}>
                </textarea>
            </div>

            <button className="btn btn-primary ms-1 my-1" disabled={text.length === 0} onClick={() => { setText(text.toUpperCase()); showAlert("Converted to uppercase!", "success"); }}>
                Convert to Uppercase</button>
            <button className="btn btn-primary ms-1 my-1" disabled={text.length === 0} onClick={handleLowerCase}>
                Convert to Lowercase</button>
            <button className="btn btn-primary ms-1 my-1" disabled={text.length === 0} onClick={() => { setText(""); showAlert("Text cleared!", "success"); }}>
                Clear text</button>
            <button className="btn btn-primary ms-1 my-1" disabled={text.length === 0} onClick={handleCopy}>
                Copy text</button>
            <button className="btn btn-primary ms-1 my-1" disabled={text.length === 0} onClick={() => { removeExtraSpaces(); showAlert("Extra spaces removed!", "success"); }}>
                Remove Extra Spaces</button>

            <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                <h1>Text Summary</h1>
                <ul>
                    <li>Text has {text.split(".").length - 1} sentences.</li>
                    <li>Your text contains {text.trim().length} characters.</li>
                    <li>Your text contains {text.split(/[ ]+/).filter((word) => word.length > 0).length} words.</li>
                    <li>It will take approximately {0.008 * text.split(/[ ]+/).filter((word) => word.length > 0).length} minutes to read.</li>
                </ul>
                <h2>Preview</h2>
                <p className="display-6 lead">{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </div>
    )
}
