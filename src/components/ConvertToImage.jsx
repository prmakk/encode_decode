import React from "react";
import { QRCodeSVG } from "qrcode.react";
import ClearButton from "../ui/ClearButton/ClearButton";

const ConvertToImage = ({title, input, setInput, handleInputChange}) => {
    return (
        <div className="convert">
            <div className="convert__title">
                <h3>{title}</h3>
            </div>
            <div className="convert__textareas">
                <div className="convert__textareas-input">
                    <textarea
                        placeholder="Type or paste your text..."
                        onInput={handleInputChange}
                        value={input}
                    />
                    <ClearButton setInput={setInput}/>
                </div>
                <div className="convert__textareas-result">
                    <p>Result:</p>
                    {input.length > 0
                    ?
                    <QRCodeSVG className="qrcode" value={input}/>
                    :
                    <p style={{textAlign:'center', fontSize:'16px'}}>Enter something to generate a QR-code</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ConvertToImage;
