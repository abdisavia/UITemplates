import React from "react";
import InputAndLabels from "../../Elements/Input";
import Button from "../../Elements/Button";
function FormLogin(){
    return(
        <form className="">
            <InputAndLabels
            type="email"
            placeholder="example@gmail.com"
            name="Email"
            variant="light"
            />
            <InputAndLabels
            type="password"
            placeholder="*****"
            name="Password"
            variant="light"
            />
            <Button>Login</Button>
        </form>
    )
}

export default FormLogin;