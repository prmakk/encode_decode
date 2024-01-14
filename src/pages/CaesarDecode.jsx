import React, { useEffect, useState } from 'react'
import ConvertBlankPage from '../components/ConvertBlankPage';

const CaesarDecode = () => {
    const [input, setInput] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [shift, setShift] = useState(0);

    const caesarCipherDecrypt = (text, shift) => {
        let result = "";

        for (let i = 0; i < text.length; i++) {
            let char = text[i];

            if (char.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);

                if (code >= 65 && code <= 90) {
                    char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
                } else if (code >= 97 && code <= 122) {
                    char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
                }
            }

            result += char;
        }
    
        return setOutputValue(result);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
        caesarCipherDecrypt(e.target.value, shift);
    }

    useEffect(() => {
        caesarCipherDecrypt(input, shift)
    }, [input, shift])

    useEffect(() => {
        if(shift < 0 && shift > 26){
            setShift(0)
        }
    }, [shift])

    return (
        <ConvertBlankPage
            title="Decrypt your Caesar's cipher"
            input={input}
            setInput={setInput}
            outputValue={outputValue}
            setOutputValue={setOutputValue}
            shift={shift}
            setShift={setShift}
            handleInputChange={handleInputChange}
        />
    );
}

export default CaesarDecode