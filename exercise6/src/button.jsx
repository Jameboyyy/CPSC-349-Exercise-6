import React from 'react';

const Button = ({ value, onClick }) => {

const additionalClass = value === 'C' ? 'clear__btn' : 'number__btn';

const buttonClass = `calc__btn ${additionalClass}`;

    return (
        <button className={buttonClass} onClick={() => onClick(value)}>
            {value}
        </button>
    );
}

export default Button;
