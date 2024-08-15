import React, { useState } from "react";
import '../css/page.css';
import Checkbox from "./checkbox";

function PageBox({pageText}){

    const [checkedValue, setCheckedValue] = useState(false)
    const [selected, setSelected] = useState(false)
    const [visited, setVisited] = useState(false)
    const [clickedOnce, setClickedOnce] = useState(false);
    const [visitedChanged, setVisitedChanged] = useState(false)
    
    // handlers for pagebox
    function handlePageClick(e){
        e.preventDefault()
        if(!clickedOnce && !selected){
            setCheckedValue(!selected)
            setSelected(!selected)
            setClickedOnce(true)
        }
    }

    function handleMouseDown(e){
        e.preventDefault()
        if(!clickedOnce && selected){
            setCheckedValue(!selected)
            setSelected(!selected)
            setClickedOnce(true)
        }
    }

    // handlers for checkbox
    function handleCheckboxDoubleClick(e){
        e.stopPropagation()
        setCheckedValue(!selected)
        setSelected(!selected)
    }

    function handleCheckboxClick(e){
        e.stopPropagation()
        e.preventDefault()
        if(!visited && !selected){
            setVisited(true)
            setVisitedChanged(true)
        }else{
            setCheckedValue(!checkedValue)
            setVisitedChanged(true)
            setVisited(false)
        }
    }

    function handleMouseLeave(e){
        e.preventDefault()
        setCheckedValue(selected)
        setClickedOnce(false)
        if(visited !== visitedChanged){
            setVisited(visitedChanged)
        }
    }

    return (
        <div className={`page-textbox ${clickedOnce?"active-disabled":"active-enabled"}`} onClick={handlePageClick} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave}>
            <span>{pageText}</span>
            <Checkbox checkedValue={checkedValue} handleCheckboxClick={handleCheckboxClick} 
                handleCheckboxDoubleClick={handleCheckboxDoubleClick} visited={visited}/>
        </div>
    );
}

export default PageBox;