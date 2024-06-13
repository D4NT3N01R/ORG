
import "./Campo.css"

const Campo = (props)=>{
    console.log("Datos", props)
    const placeholderModifier =`${props.placeholder}...`
   const{type="text"} = props
   
   

    const manejarCambio = (e)=>{
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        
        <input placeholder= {placeholderModifier} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}/>
    </div>

}

export default Campo;