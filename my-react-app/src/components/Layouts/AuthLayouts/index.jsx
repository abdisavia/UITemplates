function AuthLayouts(props){
    const {title,subtitle,children} = props;
    return(
        <div className="p-10 rounded-md border bg-white shadow-lg shadow-slate-600">
            {children}
        </div>
    )
};

export default AuthLayouts;