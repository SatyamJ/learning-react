import React from 'react';

const withWrappedComponent = (WrappedComponent, classes) => {
    return (props) => {
        return (
            <div className={classes}>
                <WrappedComponent {...props}/>
            </div>
        )
    };
};

export default withWrappedComponent;
