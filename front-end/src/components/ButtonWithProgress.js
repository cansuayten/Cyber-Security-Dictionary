import React from 'react';

const ButtonWithProgress = (props) => {

const {onClick, pendingApiCall, disabled, text} = props
    return (
        <button style = {{paddingTop:"15px",
    paddingBottom:"15px",
paddingLeft:"30px",
paddingRight:"30px"}} className="btn btn-primary" 
            onClick={onClick}
            disabled={disabled}>
            {pendingApiCall ? <span className="spinner-border spinnder-border-sm"></span> : ''}
            {text}
        </button>
    );
};
export default ButtonWithProgress;