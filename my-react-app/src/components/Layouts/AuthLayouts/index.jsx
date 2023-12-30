function AuthLayouts(props){
    const {children} = props;
    return(
        <div className="p-10 rounded-md border bg-white shadow-lg shadow-slate-600">
            <h1 className="font-bold text-blue-500 text-3xl mb-1">Login</h1>
            <p className="text-slate-400 text-sm mb-2">Masuk untuk mulai menjelajah</p>
            {children}
        </div>
    )
};

export default AuthLayouts;