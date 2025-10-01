import React from 'react';

const Arrow = ({sideClass, handleFun}) => {
    return (
        <div className="arrow-wrapper" onClick={handleFun}>
            <div className="round">
                <div id="cta">
                    <span className={`arrow ${sideClass}`}></span>
                </div>
            </div>
        </div>
    );
};

export default Arrow