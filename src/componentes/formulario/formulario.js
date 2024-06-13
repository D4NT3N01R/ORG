import { useState } from "react"
import "./formulario.css"
import Campo from "../CampoTexto/Campo.js"
import ListaOpcion from "../ListaOpciones/ListaOpcion.js"
import Boton from "../boton/boton.js"
import { v4 as uuid } from "uuid"
const Formulario = (props)=> {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo]=useState("")
    const [color, actualizarColor]=useState("")
    const {registrarColaborador,crearEquipo} = props
    const manejarenvio =(evento)=>{
        console.log("Manejar el envio")
        evento.preventDefault()
        let datosEnviar ={
            id:uuid(),
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
            registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo =(e) =>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})
    }
    return <section className="formulario">
        
        <form onSubmit={manejarenvio}>
            <h2>Rellena el formulario para crear el colaborar</h2>
            <Campo titulo="Nombre" placeholder="Ingresar Nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingresa el puesto a ocupar" required valor={puesto}actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar url de la foto" required valor ={foto} actualizarValor={actualizarFoto}/>
            <ListaOpcion valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>
            <Boton>
                Crear
            </Boton>
            
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo titulo="Titulo" placeholder="Ingresar Titulo" required valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo titulo="Color" placeholder="Ingresa el color en Hex" required valor={color}actualizarValor={actualizarColor} type="color"/>
            <Boton>
                Registrar Equipo
            </Boton>
            </form>
          
    </section>
}

export default Formulario