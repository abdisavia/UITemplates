import AuthLayouts from "../components/Layouts/AuthLayouts/index";
import FormLogin from "../components/Fragments/FormLogin";

function Login(){
    return(
        <div className="flex justify-center items-center h-screen w-full bg-Auth bg-center bg-no-repeat bg-cover">
            <AuthLayouts>
                <FormLogin/>
            </AuthLayouts>
        </div>
    )
};

export default Login;