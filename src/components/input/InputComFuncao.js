export default function InputComFuncao({ className, type, placeholder, name, id, onChange, onClick }){
    return (
        <input className={className} type={type} required placeholder={placeholder} name={name} id={id} onChange={onChange} onClick={onClick} />
    )
}