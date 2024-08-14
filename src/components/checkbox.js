import React from "react";
import "../css/checkbox.css"

function Checkbox(){
    return (
        <div className="checkbox-container">
            <input className="radio-button" type="checkbox"/>
        </div>
        // <div className="checkbox-container">
        //     <label className="custom-checkbox">
        //         <input type="checkbox" />
        //         <span className="checkmark"></span>
        //     </label>
        // </div>
    )
}

export default Checkbox;