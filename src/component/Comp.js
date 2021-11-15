import React from "react";

const Comp = ({box1,box2,box3,box4,box5,box6,Action}) => {
    return(
        
            <div className="Column" onClick={Action}>
                <div ref={box6} className="box"></div>
                <div ref={box5} className="box"></div>
                <div ref={box4} className="box"></div>
                <div ref={box3} className="box"></div>
                <div ref={box2} className="box"></div>
                <div ref={box1} className="box"></div>
            </div>
        
    )
    
}

export default Comp