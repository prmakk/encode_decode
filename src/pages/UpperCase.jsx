import React, { useState } from 'react'
import ConvertBlankPage from '../components/ConvertBlankPage';

const UpperCase = () => {
    const [input, setInput] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const setToLowerCase = (text) => {
        try {
            setOutputValue(text.toUpperCase());
        } catch (e) {
            setOutputValue('Error');
        }
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
        setToLowerCase(e.target.value);
    }

    return (
        <ConvertBlankPage
            title='Convert to upper case'
            input={input}
            setInput={setInput}
            outputValue={outputValue}
            setOutputValue={setOutputValue}
            handleInputChange={handleInputChange}
        />
    );
}

export default UpperCase