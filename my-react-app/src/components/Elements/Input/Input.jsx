function Input(props){
    const {type = "text", variant="dark", name="", placeholder} = props;
    const cls = () => {
        let cl="block ps-2 rounded-md  w-80 h-10  focus:ring focus:outline-none focus:border-none focus:ring-blue-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500  invalid:text-pink-500 invalid:border-pink-600  disabled:bg-slate-50 "
        if(variant == "dark"){
            cl = cl + "border border-black"
        }else if(variant == "light"){
            cl = cl + "border border-slate-500"
        }
        return cl
    }
    return(
        <input type={type}  name={name} className={cls()} placeholder={placeholder}/>
    )
};

export default Input;