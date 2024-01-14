import React from "react";
import styles from './CopyButton.module.css'

const CopyButton = ({outputValue}) => {
    return (
        <button
            className={styles.copyBtn}
            onClick={() => {
                navigator.clipboard.writeText(outputValue);
            }}
        >
            <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-glyphs/30/007d57/copy.png"
                alt="copy"
            />
            Copy result
        </button>
    );
};

export default CopyButton;
