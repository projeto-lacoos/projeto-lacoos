export default function Input({className, type, name, id, placeholder }){
    return (
        <input className={className} type={type} required placeholder={placeholder} name={name} id={id}/>
    )
}