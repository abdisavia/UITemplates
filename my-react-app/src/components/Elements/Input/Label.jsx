
function Label(props){
    const {labelFor = "",children} = props; 
    return(
        <label htmlFor={labelFor} className="block mb-2">
            {children}
        </label>
    )
};

export default Label;