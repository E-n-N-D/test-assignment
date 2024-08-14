import React from "react";
import '../css/page.css';
import Checkbox from "./checkbox";

function PageBox({pageText}){
    return (
        <div className="page-textbox">
            <span>{pageText}</span>
            <Checkbox />
        </div>
    );
}

export default PageBox;