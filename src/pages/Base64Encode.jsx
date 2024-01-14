import React, { useState } from "react";
import ConvertBlankPage from "../components/ConvertBlankPage";

const Base64Encode = () => {
    const [input, setInput] = useState('')
    const [encodedValue, setEncodedValue] = useState('')

    const encodeToBase64 = (text) => {
        try {
            const encoded = btoa(text);
            setEncodedValue(encoded);
        } catch (e) {
            setEncodedValue('Error');
        }
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
        encodeToBase64(e.target.value);
    }

    return (
        <ConvertBlankPage
            title='Encode to Base64 format'
            input={input}
            setInput={setInput}
            outputValue={encodedValue}
            setOutputValue={setEncodedValue}
            handleInputChange={handleInputChange}
        />
    );
};

export default Base64Encode;
