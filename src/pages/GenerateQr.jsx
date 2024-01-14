import React, { useState } from "react";
import ConvertToImage from "../components/ConvertToImage";

const GenerateQr = () => {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <ConvertToImage
            title="Generate QR-code from your data"
            input={input}
            setInput={setInput}
            handleInputChange={handleInputChange}
        />
    );
};

export default GenerateQr;
