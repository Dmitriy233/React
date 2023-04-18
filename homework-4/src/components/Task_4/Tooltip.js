import React from "react";

const Tooltip = ({ tooltipX, tooltipY, content}) => {
    return (
         <div
      style={{
        position: 'fixed',
        left: tooltipX+5,
        top: tooltipY+5,
        backgroundColor: 'white',
        padding: '10px',
        zIndex: 5,
        borderRadius: '4px',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
      }}
    >
      {content}
    </div>
    );
};
export default Tooltip