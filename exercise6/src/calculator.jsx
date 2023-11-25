import React, { useState } from 'react';
import CalculatorPanel from './calculatorPanel';

const Calculator = () => {
    const [currentInput, setCurrentInput] = useState('');

    const handleInput = (value) => {
        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            clearInput();
        } else {
            setCurrentInput(currentInput + value);
        }
    };

    const calculateResult = () => {
        try {
            // Replace 'x' with '*' for multiplication
            const sanitizedInput = currentInput.replace(/x/g, '*');
            const result = eval(sanitizedInput);
            setCurrentInput(String(result));
        } catch (error) {
            setCurrentInput('Error');
        }
    };

    const clearInput = () => {
        setCurrentInput('');
    };

    return (
        <div className="calculator">
            <CalculatorPanel currentInput={currentInput} onInput={handleInput} />
        </div>
    );
};

export default Calculator;
