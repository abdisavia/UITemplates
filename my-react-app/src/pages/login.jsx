import AuthLayouts from "../components/Layouts/AuthLayouts/index";
import FormLogin from "../components/Fragments/FormLogin";

function Register(){
    return( 
        <div className="flex justify-center items-center h-screen w-full bg-Auth bg-center bg-no-repeat bg-cover">
            <AuthLayouts >
                <h1 className="font-bold text-blue-500 text-3xl mb-1">Login</h1>
                <p className="text-slate-400 text-sm mb-2">Masuk untuk mulai menjelajah</p>
                <FormLogin/>
                <p className="text-slate-400 text-center text-sm mt-2"><a href="/register" className="border-b border-pink-500 text-pink-500 hover:text-pink-400 hover:border-pink-400">registrasi</a> apabila belum memiliki akun</p>
            </AuthLayouts>
        </div>           
    )
};

export default Register;