import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/formulario/formulario.js';
import MiOrg from './componentes/MiORG/index.js';
import Equipo from './componentes/equipo/index.js';
import Footer from './componentes/footer/index.jsx';
function App() {
        //nombre de variable //nombre de funcion
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([]) 

    const[equipos, actualizarEquipos]=useState([
        
      {
        id: uuid(),
        titulo:"Programación",
        colorPrimario:"#57C278",
        colorSecundario:"#D9F7E9"
      },
      {
        id: uuid(),
       titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
      },
      {id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
      },
      {id: uuid(),
      titulo:"Devs",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
      },
      {id: uuid(),
      titulo:"UX y diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
      },
      {id: uuid(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
      },
      {id: uuid(),
      titulo:"Innovación y gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
      },
  ])
       const cambiarMostrar = ()=>{
        actualizarMostrar(!mostrarFormulario)
       }
       //Registrar Colaborador
       const registrarColaborador = (colaborador) =>{
        console.log ("Nuevo colaborador", colaborador);
        //Spread Operator
        actualizarColaboradores([...colaboradores, colaborador]);
       }

       //Eliminar Colaborador
       const eliminarColaborador =(id)=>{
        console.log("Eliminar Colaborador")
        const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
        actualizarColaboradores(nuevosColaboradores)
       }
       //Actualizar color de equipo
       const actualizarColor =(color, id)=>{
        console.log("Actualizar:", color, id)
        const equiposActualizados = equipos.map((equipo)=>{
          if(equipo.id===id){
            equipo.colorPrimario = color
          }
          return equipo
        })

        actualizarEquipos(equiposActualizados)
       }
       //Crear equipos

       const crearEquipo=(nuevoEquipo)=>{
        console.log(nuevoEquipo)
        actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
       }
       const like =(id)=>{
        console.log("like",id)
        const colaboradoresActualizados = colaboradores.map((colaborador)=>{
          if(colaborador.id===id){
            colaborador.fav = !colaborador.fav
          }
          return colaborador
        })
        actualizarColaboradores(colaboradoresActualizados)
       }
      
   return (
    <div>
      <Header/>
      {mostrarFormulario ? <Formulario equipos={equipos.map((equipo)=> equipo.titulo)} registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}/> : <div/>}

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
    {
      equipos.map((equipo)=> <Equipo datos = {equipo} key={equipo.titulo}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador = {eliminarColaborador}
      actualizarColor = {actualizarColor}
      like={like}
      />)
      
    }
    <Footer/>
    </div>
  );
}

export default App;
