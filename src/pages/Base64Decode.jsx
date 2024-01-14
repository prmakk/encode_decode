import React, { useState } from 'react'
import ConvertBlankPage from '../components/ConvertBlankPage';

const Base64Decode = () => {
    const [input, setInput] = useState('');
    const [decodedValue, setDecodedValue] = useState('');

    const decodeFromBase64 = (text) => {
        try {
            const decoded = atob(text);
            setDecodedValue(decoded);
        } catch (e) {
            setDecodedValue('Error');
        }
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
        decodeFromBase64(e.target.value);
    }

    return (
        <ConvertBlankPage
            title='Decode from Base64 format'
            input={input}
            setInput={setInput}
            outputValue={decodedValue}
            setOutputValue={setDecodedValue}
            handleInputChange={handleInputChange}
        />
    );
};

export default Base64Decode