import React, { useState } from 'react'
import ConvertBlankPage from '../components/ConvertBlankPage';

const ReverseString = () => {
    const [input, setInput] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const setToLowerCase = (text) => {
        try {
            setOutputValue(text.split('').reverse().join(''));
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
            title='Reverse string'
            input={input}
            setInput={setInput}
            outputValue={outputValue}
            setOutputValue={setOutputValue}
            handleInputChange={handleInputChange}
        />
    );
}

export default ReverseString