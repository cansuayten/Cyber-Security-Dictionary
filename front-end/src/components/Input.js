import React from "react";

const Input = props => {
    const {label,error,name,onChange} = props;
    const className = error ? "form-control is-invalid": "form-control"
    return (
            <div className="form-group">
                <label style ={{fontSize:"17px"}} >{label}</label>
                <input style ={{marginTop:"10px",
            fontSize:"17px"}} className={className} name={name} onChange={onChange}/>
                <div className="invalid-feedback">{error}</div>
            </div>
    );
}
export default Input;