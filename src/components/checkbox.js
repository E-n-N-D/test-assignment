import React from "react";
import "../css/checkbox.css"

function Checkbox({checkedValue, handleCheckboxClick, handleCheckboxDoubleClick, visited}){
    return (
        <div className="checkbox-container">
            <input type="checkbox" onClick={handleCheckboxClick} onDoubleClick={handleCheckboxDoubleClick}
                className={visited?"box-visited":"box-unvisited"} checked={checkedValue} />
        </div>
    )
}

export default Checkbox;