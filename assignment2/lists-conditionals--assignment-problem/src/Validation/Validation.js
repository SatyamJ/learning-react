import React from 'react';

const validation = (props) => {
    const stringLength = props.stringLength;
    if (stringLength < 5) {
        return (
            <p>Text too short</p>
        );
    } else {
        return (
            <p>Text long enough</p>
        );
    }
};

export default validation;
