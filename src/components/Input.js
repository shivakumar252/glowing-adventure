

function Input({label,placeholder,value,onChange,type}) {
    return (
        <>
        <label className="label-header" >{label}</label>
    <input type={type} placeholder={placeholder} value={value} onChange={onChange}></input>
        </>
    )
}

export default Input