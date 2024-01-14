import React from 'react'
import styles from './ClearButton.module.css'

const ClearButton = ({setInput, setOutputValue}) => {

    const clearAll = () => {
        if(setOutputValue){
            setOutputValue('')
            setInput('')
        }else{
            setInput('')
        }
    }
    return (
        <button
            className={styles.clearBtn}
            onClick={clearAll}
        >
            Clear
        </button>
    );
}

export default ClearButton