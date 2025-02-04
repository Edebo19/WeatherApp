import React, { useRef } from "react";

const Scroll = ({ children, className = "" }) => {
  const scrollRef = useRef();

  const handleMouseDown = (e) => {
    const oldX = e.pageX
    const scrollLeft = scrollRef.current.scrollLeft

    const handleMouseMove =(e)=>{
        const  newX = e.pageX
        const offSet = newX - oldX

        scrollRef.current.scrollLeft = scrollLeft - offSet
        
    }
    const handleMouseUp =()=>{
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mouseup", handleMouseUp)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  };

  return (
    <div className={className} ref={scrollRef} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};

export default Scroll;
