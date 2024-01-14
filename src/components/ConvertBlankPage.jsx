import React from "react";
import CopyButton from "../ui/CopyButton/CopyButton";
import ClearButton from "../ui/ClearButton/ClearButton";

const ConvertBlankPage = ({title, input, setInput, outputValue, shift, setShift, setOutputValue, handleInputChange}) => {
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
                    <div className="navigation">
                    <ClearButton setInput={setInput} setOutputValue={setOutputValue}/>
                    {/* input ONLY for caesar */}
                    {setShift
                    ?
                    <div className="navigation__caesar">
                        <p>Set shift: </p>
                        <input type="number" min={0} max={26} onChange={e => setShift(parseInt(e.target.value))} value={shift} />
                    </div>
                    :
                    null
                    }
                    </div>
                </div>
                <div className="convert__textareas-result">
                    <p>Result:</p>
                    <textarea
                        placeholder="Your result will be here"
                        disabled={true}
                        value={outputValue}
                    />
                </div>
            </div>
            <div className="convert__copy">
                <CopyButton outputValue={outputValue}/>
            </div>
        </div>
    );
};

export default ConvertBlankPage;
