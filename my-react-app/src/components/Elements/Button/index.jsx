function Button(props){
    const {type, children} = props;
    return(
        <button type={type} className="bg-blue-500 w-full py-2 px-3 rounded-md text-white font-bold hover:bg-blue-400 hover:transition-colors hover:ease-in-out">{children}</button>
    )
};

export default Button;