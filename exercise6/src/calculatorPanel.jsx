import React from 'react';
import Button from './button';
import ResultPanel from './resultPanel';

const CalculatorPanel = ({ currentInput, onInput }) => {
    const buttonRows = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['C', '0', '=', '+']
    ];

    return (
        <div className="calculator__skel">
            <ResultPanel value={currentInput} />
            {buttonRows.map((row, rowIndex) => (
                <div key={rowIndex} className="button-row">
                    {row.map((buttonValue, buttonIndex) => (
                        <Button key={buttonIndex} value={buttonValue} onClick={() => onInput(buttonValue)} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default CalculatorPanel;
