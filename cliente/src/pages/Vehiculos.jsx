import React, { useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "bootstrap/dist/css/bootstrap.min.css";

import Swal from "sweetalert2";

const Vehiculos = () => {
  // variables que add valores en los campos
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [transmision, setTransmision] = useState("");
  const [kilometraje, setKilometraje] = useState ("");
  const[precio_dia, setPrecio_dia] =useState ("");
  const [imagen, setImagen] =useState ("");
  const[disponibilidad, setDisponibilidad] =useState ("");
  const [id, setId] = useState();

  const [editar, setEditar] = useState(false);

  //Lista de Vehiculos-se inicializa una lista vacía
  const [vehiculosList, setVehiculos] = useState([]);

  //CRUD-Add Vehiculos
  const addVehiculos = () => {
    axios.post("http://localhost:3001/api/create", {
    
        marca: marca,
        modelo: modelo,
        color: color,
        transmision: transmision,
        kilometraje: kilometraje,
        precio_dia: precio_dia,
        imagen: imagen,
        disponibilidad: disponibilidad
      })
      .then(() => {
        getVehiculos();
        limpiarCampos();
        Swal.fire({
          title: "<strong>Registro exitoso!!!</strong>",
          html:
            "<i>El vehículo <strong> " +
            marca +
            " </strong>fue registrado con exito!!!</i>",
          icon: "sucess",
          timer: 3000,
        }).catch(function (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              JSON.parse(JSON.stringify(error)).message === "Network Error"
                ? "Intente más tarde"
                : JSON.parse(JSON.stringify(error)).message,
          });
        });
      });
  };

  //CRUD-update  Vehiculos ruta
  const updateVehiculos = () => {
    axios
      .put("http://localhost:3001/updateVehiculos", {
        id: id,
     
        marca: marca,
        modelo: modelo,
        color: color,
        transmision: transmision,
        kilometraje: kilometraje,
        precio_dia: precio_dia,
        imagen: imagen,
        disponibilidad: disponibilidad
      })
      .then(() => {
        getVehiculos();
        limpiarCampos();
        Swal.fire({
          title: "<strong>Actualización exitosa!!!</strong>",
          html:
            "<i>El vehículo <strong> " +
            marca +
            " </strong>fue actualizado con exito!!!</i>",
          icon: "sucess",
          timer: 3000,
        }).catch(function (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              JSON.parse(JSON.stringify(error)).message === "Network Error"
                ? "Intente más tarde"
                : JSON.parse(JSON.stringify(error)).message,
          });
        });
      });
  };

  //CRUD-delete  Vehiculos ruta
  const deleteVehiculos = (val) => {
    Swal.fire({
      title: "Confirmar eliminado?",
      html:
        "<i>Realmente desea eliminar a <strong> " +
        val.marca +
        " </strong>fue actualizado con exito!!!</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3001/api/delete/${val.id}`)
          .then(() => {
            getVehiculos();
            limpiarCampos();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: val.marca + "fue eliminado",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch(function (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se logro eliminar el vehículo!",
              footer:
                JSON.parse(JSON.stringify(error)).message === "Network Error"
                  ? "Intente más tarde"
                  : JSON.parse(JSON.stringify(error)).message,
            });
          });
      }
    });
  };

  //VERIFICAR LOS CAMPOS QUE NO SE LIMPIAR Y PONER LA VARIABLE AQUI O QUITAR
  const limpiarCampos = () => {
    
    setMarca("");
    setModelo("");
    setColor("");
    setTransmision("");
    setKilometraje("");
    setPrecio_dia("");
    setImagen("");
    setDisponibilidad("");
    setId("");
    setEditar(false);
  };

  //CRUD-Editar vehículos
  const editarVehiculo = (val) => {
    setEditar(true);
    
    setMarca(val.marca);
    setModelo(val.modelo);
    setColor(val.color);
    setTransmision(val.transmision);
    setKilometraje(val.kilometraje);
    setPrecio_dia(val.precio_dia);
    setImagen(val.imagen);
    setDisponibilidad(val.disponibilidad);
    setId(val.id);
  };

  //CRUD- Add a una Lista de Vehiculos (viene los datos que obtenemos desde la API
  const getVehiculos = () => {
    axios.get("http://localhost:3001/Vehiculos").then((response) => {
      setVehiculos(response.data); //asigna los vehiculos y hace una llamada de los datos desde API
      alert("Vehículo registrado");
    });
  };
  getVehiculos();

  return (
    <Helmet title="Mantenimiento de Vehículos">
      <CommonSection title="Mantenimiento de Vehículos" />
      <section>
        <Container>
          <Row>
            <div className="container_cars">
              <div className="card text-center">
                <div className="card-header">Gestión de vehículos</div>
                <div className="card-body">
                  

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Marca:{" "}
                    </span>
                    <input
                      type="text"
                      value={marca}
                      onChange={(event) => {
                        setMarca(event.target.value);
                      }}
                      className="form-control"
                      placeholder="Ingrese una marca"
                      aria-label="Marca"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Modelo:{" "}
                    </span>
                    <input
                      type="number"
                      value={modelo}
                      onChange={(event) => {
                        setModelo(event.target.value);
                      }}
                      className="form-control"
                      placeholder="Ingrese un modelo"
                      aria-label="Modelo"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Color:{" "}
                    </span>
                    <input
                      type="text"
                      value={transmision}
                      onChange={(event) => {
                        setColor(event.target.value);
                      }}
                      className="form-control"
                      placeholder="Ingrese tipo de transmisión"
                      aria-label="transmisión"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Transmisión:{" "}
                    </span>
                    <input
                      type="text"
                      value={transmision}
                      onChange={(event) => {
                        setTransmision(event.target.value);
                      }}
                      className="form-control"
                      placeholder="Ingrese tipo de transmisión"
                      aria-label="transmisión"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Kilometraje:{" "}
                    </span>
                    <input
                      type="text"
                      value={transmision}
                      onChange={(event) => {
                        setKilometraje(event.target.value);
                      }}
                      className="form-control"
                      placeholder="Ingrese tipo de transmisión"
                      aria-label="transmisión"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Precio_día:{" "}
                    </span>
                    <input
                      type="text"
                      value={transmision}
                      onChange={(event) => {
                        setPrecio_dia(event.target.value);
                      }}
                      className="form-control"
                      placeholder="Ingrese tipo de transmisión"
                      aria-label="transmisión"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Imagen:{" "}
                    </span>
                    <input
                      type="text"
                      value={transmision}
                      onChange={(event) => {
                        setImagen(event.target.value);
                      }}
                      className="form-control"
                      placeholder="Ingrese tipo de transmisión"
                      aria-label="transmisión"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Disponibilidad:{" "}
                    </span>
                    <input
                      type="text"
                      value={transmision}
                      onChange={(event) => {
                        setDisponibilidad(event.target.value);
                      }}
                      className="form-control"
                      placeholder="Ingrese tipo de transmisión"
                      aria-label="transmisión"
                      aria-describedby="basic-addon1"
                    />
                  </div>



                </div>
                <div className="card-footer text-body-muted">
                  {editar ? (
                    <div>
                      <button
                        className="btn btn-warning m-2"
                        onclick={updateVehiculos}
                      >
                        Actualizar
                      </button>
                      <button
                        className="btn btn-info m-2"
                        onclick={limpiarCampos}
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <button className="btn btn-success" onclick={addVehiculos}>
                      Registrar
                    </button>
                  )}
                </div>
              </div>

              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Color</th>
                    <th scope="col">Transmisión</th>
                    <th scope="col">Kilometraje</th>
                    <th scope="col">Precio_día</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Disponibilidad</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {vehiculosList.map((val, key) => {
                    return (
                      <tr key={val.id}>
                        <th>{val.id}</th>
                       
                        <td>{val.marca}</td>
                        <td>{val.modelo}</td>
                        <td>{val.color}</td>
                        <td>{val.transmision}</td>
                        <td>{val.kilometraje}</td>
                        <td>{val.precio_dia}</td>
                        <td>{val.imagen}</td>
                        <td>{val.disponibilidad}</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              type="button"
                              onClick={() => {
                                editarVehiculo(val);
                              }}
                              className="btn btn-info"
                            >
                              Editar
                            </button>
                            <button
                              type="button"
                              oclick={() => {
                                deleteVehiculos(val.id);
                              }}
                              className="btn btn-danger"
                            >
                              Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
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
export default Vehiculos;
