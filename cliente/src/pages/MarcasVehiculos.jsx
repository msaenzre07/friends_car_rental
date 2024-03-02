import React,  { useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "bootstrap/dist/css/bootstrap.min.css";


import Swal from 'sweetalert2';


const MarcasVehiculos = () => {
// variables que add valores en los campos
const [id, setId] = useState();
const[marca, setMarca] = useState("");

const [editar, setEditar] =useState(false);

//Lista de Marcas-se inicializa una lista vacía 
const [marcasList, setMarcas] = useState ([]);
 
//CRUD-Add Marcas
const addMarcas = ()=>{
  axios.post("http://localhost:3001/api/addMarcas",{
    marca: marca,
  }).then(()=>{
    getMarcas();
    limpiarCampos();
    Swal.fire({
      title: "<strong>Registro exitoso!!!</strong>",
      html: "<i>La marca <strong> "+marca+" </strong>fue registrada con exito!!!</i>",
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

//CRUD-update  marca
const updateMarcas =  ()=>{
  axios.put("http://localhost:3001/updateMarcas",{
    id: id,
    marca: marca,
  }).then(()=>{
    getMarcas();
    limpiarCampos();
    Swal.fire({
      title: "<strong>Actualización exitosa!!!</strong>",
      html: "<i>La marca <strong> "+marca+" </strong>fue actualizada con exito!!!</i>",
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

//CRUD-delete  Marcas
const deleteMarcas = (val)=>{
 
  Swal.fire({
    title: "Confirmar eliminado?",
    html: "<i>Realmente desea eliminar a <strong> "+val.marca+" </strong>fue actualizado con exito!!!</i>",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/api/delete/${val.id}`).then(()=>{
          getMarcas();
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
          text: "No se logro eliminar la marca!",
          footer:JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
        })
      });         
    }
  });
}

//Limpiar campos
const limpiarCampos= ()=>{
 setId("");
 setMarca("")
 setEditar(false);
}

//CRUD-Editar Marcas
const editarMarca = (val) =>{
  setEditar(true);
  setId(val.id);
  setMarca(val.marca);
 }

//CRUD-Add a una Lista de Marcas (viene los datos que obtenemos desde la API
const getMarcas = ()=>{
  axios.get("http://localhost:3001/Marcas").then((response)=>{
   setMarcas(response.data);//asigna las marcas y hace una llamada de los datos desde API
  alert("Marca registrada");
  });
}
  getMarcas();


 return (
        <Helmet title="Marcas de Vehículos">
        <CommonSection title="Marcas de Vehículos" />
          <section >
            <Container>
              <Row>
              <div className="container_marcas">
              
        <div className="card text-center">
         <div className="card-header">
         Gestión de Marcas de vehículos
        </div>
      <div className="card-body">
      <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">Marca: </span>
      <input type="text" value ={marca}
      onChange={(event)=>{
        setMarca(event.target.value);
      }}
      className="form-control" placeholder="Ingrese una marca de un vehículo" aria-label="Marca" aria-describedby="basic-addon1"/>
      </div>
      </div>

      <div className="card-footer text-body-muted">
        {
          editar? 
          <div>
          <button className='btn btn-warning m-2' onclick={updateMarcas}>Actualizar</button>
          <button className='btn btn-info m-2' onclick={limpiarCampos}>Cancelar</button>
          </div>  
          :<button className='btn btn-success' onclick={addMarcas}>Registrar</button>
        }
          
        </div>
      </div>

      <table className="table table-striped">
     <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Marca</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
  {
    marcasList.map((val,key)=>{
        return <tr key={val.id}>
                <th>{val.id}</th>
                <td>{val.marca}</td>
                <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button"
                  onClick={()=>{
                    editarMarca(val);
                  }}
                  
                  className="btn btn-info">Editar</button>
                  <button type="button" oclick={()=>{
                     deleteMarcas(val.id);

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
export default MarcasVehiculos;














