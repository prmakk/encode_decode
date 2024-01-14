import React from "react";

const ImageSettingsInput = ({title, value, setImageSettings, imageSettings, min, max}) => {
    return (
        <div className="input">
            <div className="input__title">
                <p>{title}</p>
            </div>
            <p>{value}</p>
            <input
                type="range"
                min={min}
                max={max}
                onChange={(e) =>
                    setImageSettings({ ...imageSettings, [title]: e.target.value })
                }
                value={imageSettings[title]}
            />
        </div>
    );
};

export default ImageSettingsInput;
