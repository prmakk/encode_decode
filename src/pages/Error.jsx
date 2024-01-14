import React from "react";
import { Link } from "react-router-dom";

const Error = ({message}) => {
    return(
        <div className="error">
            <h3>{message}</h3>
            <Link to={'/'}>Home page</Link>
        </div>
    );
};

export default Error;
