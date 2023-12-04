export default function Input({className, type, placeholder, name, id, onchange}){
    return (
        <input className={className} type={type} placeholder={placeholder} name={name} id={id} onChange={onchange} />
    )
}