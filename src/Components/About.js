import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#292d31',
        backgroundColor: props.mode === 'dark' ? '#565859' : 'white',
    }

    return (
        <div className="container my-3 py-2">
            <h1 style={{ color: props.mode === 'dark' ? 'white' : '#292d31' }}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyse your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you the ability to analyse your text quickly and efficiently, providing insights into word count, character count, and more. It also offers features for text manipulation, such as converting to uppercase or lowercase, removing extra spaces, and copying text to the clipboard.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. It is designed to be a simple and efficient tool for users to analyze their text without any cost. Whether you are a student, writer, or anyone who needs to keep track of character or word limits, TextUtils is a convenient solution that is accessible to everyone.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is compatible with all modern browsers. Whether you are using Chrome, Firefox, Safari, Edge, or any other popular browser, you can access and use TextUtils without any issues. The tool is designed to work seamlessly across different platforms and devices, ensuring that users can analyze their text regardless of the browser they prefer.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}