import React from 'react';

const Description = ({name, value}) => {
    return (
        <div className={name}>{value}</div>
    );
};

export default Description