import React, { useState } from "react";
import ConvertBlankPage from "../components/ConvertBlankPage";

const BinaryDecode = () => {
    const [input, setInput] = useState("");
    const [outputValue, setOutputValue] = useState("");

    const decodeFromBinary = (text) => {
        try {
            const binaryArray = text.split(" ");
            let result = "";
            binaryArray.forEach((bin) => {
                const charCode = parseInt(bin, 2);
                const char = String.fromCharCode(charCode);
                result += char;
            });

            return setOutputValue(result);
        } catch (e) {
            setOutputValue("Error");
        }
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
        decodeFromBinary(e.target.value);
    };

    return (
        <ConvertBlankPage
            title="Decode from Binary format"
            input={input}
            setInput={setInput}
            outputValue={outputValue}
            setOutputValue={setOutputValue}
            handleInputChange={handleInputChange}
        />
    );
};

export default BinaryDecode;
