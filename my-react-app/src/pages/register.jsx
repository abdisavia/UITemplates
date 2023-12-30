import FormRegister from "../components/Fragments/FormRegis";
import AuthLayouts from "../components/Layouts/AuthLayouts";

function RegisterPage(){
    return(
        <div className="flex justify-center items-center h-screen w-full bg-Auth bg-center bg-no-repeat bg-cover">
            <AuthLayouts >
                <h1 className="font-bold text-blue-500 text-3xl mb-1">Register</h1>
                <p className="text-slate-400 text-sm mb-2">Daftar untuk mulai menjelajah</p>
                <FormRegister/>
            </AuthLayouts>
        </div>
    )
};

export default RegisterPage;