import InputAndLabels from "../../Elements/Input";
import Button from "../../Elements/Button";

function FormRegister(props){
    return(
        <form method="post" action="">
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
            <InputAndLabels
            type="password"
            placeholder="*****"
            name="Konfimasi Password"
            variant="light"
            />
            <Button>Register</Button>
        </form>
    )
};

export default FormRegister;