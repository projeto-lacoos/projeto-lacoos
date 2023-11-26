export default function Input({className, type, placeholder, name, id, htmlFor}){
    return (
        <input className={className} htmlFor={htmlFor} type={type} required placeholder={placeholder} name={name} id={id}/>
    )
}