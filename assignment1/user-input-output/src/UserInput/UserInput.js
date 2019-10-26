import React from 'react'

const userInput = (props) => {
    const input = {
        backgroundColor: '#eee',
        border: '1px solid blue',
        borderColor: '#f23',
        margin: '16px'
    };

    return (
        <div>
            <label>Enter you name</label>
            <input
                style={input}
                onChange={props.changeUsername}
                value={props.username}/>
        </div>

    )
};

export default userInput;