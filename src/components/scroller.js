import React, { useRef, useState } from "react";
import '../css/scroller.css';

function Scroller({ pages }) {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartY(e.pageY - containerRef.current.offsetTop);
        setScrollTop(containerRef.current.scrollTop);
        containerRef.current.classList.add('active');
    };

    const handleMouseLeaveOrUp = () => {
        setIsDragging(false);
        containerRef.current.classList.remove('active');
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const y = e.pageY - containerRef.current.offsetTop;
        const walk = (y - startY) * 2;
        containerRef.current.scrollTop = scrollTop - walk;
    };

    return (
        <div
            className="scrollable-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
        >
            {pages.map((page, index) => (
                <div key={index} className="scrollable-item">
                    {page}
                </div>
            ))}
        </div>
    );
}

export default Scroller;
