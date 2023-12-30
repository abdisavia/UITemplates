import React from "react";
import Label from "./Label";
import Input from "./Input";
function InputAndLabels(props){
    const {type="text", variant="dark", placeholder="", name=""} = props
    return(
        <div className="font-sans mb-3">
            <Label labelFor={name}>{name}</Label>
            <Input type={type} variant={variant} placeholder={placeholder} name={name}/>
        </div>
    )
};

export default InputAndLabels;