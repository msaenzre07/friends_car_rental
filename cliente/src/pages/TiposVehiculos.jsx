import React,  { useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "bootstrap/dist/css/bootstrap.min.css";


import Swal from 'sweetalert2';


const TiposVehiculos = () => {
// variables que add valores en los campos
const [id, setId] = useState();
const[tipo, setTipo] = useState("");

const [editar, setEditar] =useState(false);

//Lista de Marcas-se inicializa una lista vacía 
const [tiposVehiculosList, setTiposVehiculos] = useState ([]);
 
//CRUD-Add Tipo de Auto
const addTipos = ()=>{
  axios.post("http://localhost:3001/api/addTipos",{
    tipo: tipo,
  }).then(()=>{
    getTipos();
    limpiarCampos();
    Swal.fire({
      title: "<strong>Registro exitoso!!!</strong>",
      html: "<i>El tipo de vehículo <strong> "+tipo+" </strong>fue registrado con exito!!!</i>",
      icon: 'sucess',
      timer: 3000
    }).catch(function(error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
      })
    });        
  });
}

//CRUD-update  tipo auto
const updateTipos =  ()=>{
  axios.put("http://localhost:3001/updateTipos",{
    id: id,
    tipo: tipo,
  }).then(()=>{
    getTipos();
    limpiarCampos();
    Swal.fire({
      title: "<strong>Actualización exitosa!!!</strong>",
      html: "<i>El tipo de vehículo <strong> "+tipo+" </strong>fue actualizado con exito!!!</i>",
      icon: 'sucess',
      timer: 3000
    }).catch(function(error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
      })
    }); 
  });
}

//CRUD-delete  tipos autos
const deleteTipos = (val)=>{
 
  Swal.fire({
    title: "Confirmar eliminado?",
    html: "<i>Realmente desea eliminar a <strong> "+val.tipo+" </strong>fue actualizado con exito!!!</i>",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/api/delete/${val.id}`).then(()=>{
          getTipos();
          limpiarCampos();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: val.marca+'fue eliminado',
            showConfirmButton: false,
            timer: 1500
          });   
      }).catch(function(error){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se logro eliminar el tipo de vehículo!",
          footer:JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
        })
      });         
    }
  });
}

//Limpiar campos
const limpiarCampos= ()=>{
 setId("");
 setTipo("")
 setEditar(false);
}

//CRUD-Editar Marcas
const editarTipo = (val) =>{
  setEditar(true);
  setId(val.id);
  setTipo(val.tipo);
 }

//CRUD-Add a una Lista de tipos de autos (viene los datos que obtenemos desde la API
const getTipos = ()=>{
  axios.get("http://localhost:3001/Marcas").then((response)=>{
   setTiposVehiculos(response.data);//asigna los tipos de autos y hace una llamada de los datos desde API
  alert("Tipo de vehículo registrado");//test
  });
}
  getTipos();


 return (
        <Helmet title="Tipos de Vehículos">
        <CommonSection title="Tipos de Vehículos" />
          <section >
            <Container>
              <Row>
              <div className="container_tipos">
              
        <div className="card text-center">
         <div className="card-header">
         Gestión de tipos de vehículos
        </div>
      <div className="card-body">
      <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">Marca: </span>
      <input type="text" value ={tipo}
      onChange={(event)=>{
        setTipo(event.target.value);
      }}
      className="form-control" placeholder="Ingrese un tipo de vehículo" aria-label="Tipo" aria-describedby="basic-addon1"/>
      </div>
      </div>

      <div className="card-footer text-body-muted">
        {
          editar? 
          <div>
          <button className='btn btn-warning m-2' onclick={updateTipos}>Actualizar</button>
          <button className='btn btn-info m-2' onclick={limpiarCampos}>Cancelar</button>
          </div>  
          :<button className='btn btn-success' onclick={addTipos}>Registrar</button>
        }
          
        </div>
      </div>

      <table className="table table-striped">
     <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Tipo</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
  {
    tiposVehiculosList.map((val,key)=>{
        return <tr key={val.id}>
                <th>{val.id}</th>
                <td>{val.tipo}</td>
                <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button"
                  onClick={()=>{
                    editarTipo(val);
                  }}
                  
                  className="btn btn-info">Editar</button>
                  <button type="button" oclick={()=>{
                     deleteTipos(val.id);

                  }}className="btn btn-danger">Eliminar</button>
                    </div>
                  </td>
                </tr>
               })
             }
      </tbody>
       ...
</table>
      </div>
     </Row>
     </Container>
    </section>
  </Helmet>
  );
};
export default TiposVehiculos;














