import React, { useState } from "react";
import ConvertBlankPage from "../components/ConvertBlankPage";

const BinaryEncode = () => {
    const [input, setInput] = useState("");
    const [outputValue, setOutputValue] = useState("");

    const encodeToBinary = (text) => {
        try {
            let binary = "";
            for (let i = 0; i < text.length; i++) {
                let charCode = text.charCodeAt(i).toString(2);
                while (charCode.length < 8) {
                    charCode = "0" + charCode;
                }
                binary += charCode + " ";
            }
            return setOutputValue(binary.trim());
        } catch (e) {
            setOutputValue("Error");
        }
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
        encodeToBinary(e.target.value);
    };

    return (
        <ConvertBlankPage
            title="Encode to Binary format"
            input={input}
            setInput={setInput}
            outputValue={outputValue}
            setOutputValue={setOutputValue}
            handleInputChange={handleInputChange}
        />
    );
};

export default BinaryEncode;
