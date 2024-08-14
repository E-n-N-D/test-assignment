import React from "react";
import '../css/scroller.css'

function Scroller({pages}){
    return (
        <div className='scrollable-container'>
            {pages.map((page) => (
                <>
                    {page}
                </>
            ))}
        </div>
    )
}

export default Scroller;