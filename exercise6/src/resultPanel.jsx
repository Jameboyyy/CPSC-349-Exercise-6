import React from 'react';

const ResultPanel = ({ value }) => {
    return (
        <div className="calculator__display">
            <input type="text" value={value} readOnly />
        </div>
    );
}

export default ResultPanel;
