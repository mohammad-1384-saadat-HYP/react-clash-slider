import React from 'react';

const State = ({isBorder, stat, second, value}) => {
    return (
        <div className={`one-third ${isBorder ? "" : "no-border"}`}>
            <div className="stat">{stat}{second ? <sup>S</sup> : ""}</div>
            <div className="stat-value">{value}</div>
        </div>
    );
};

export default State