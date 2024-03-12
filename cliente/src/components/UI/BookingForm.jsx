import React from "react";
import "../../styles/reservar.css";
import { Form, FormGroup } from "reactstrap";

import Swal from 'sweetalert2';

const BookingForm = () => {
    const submitHandler = (event) => {
    event.preventDefault();
};
return (
<Form onSubmit={submitHandler}>


<FormGroup className="booking__form d-inline-block me-4 mb-4">
<div className="Nombre:">
        <input type="text" placeholder="Nombre" />
        </div>
      </FormGroup>
   

      
      <div className="Apellidos:">
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
   
        <input type="text" placeholder="Apellidos" /> 
      </FormGroup>
      </div>

      <div className="Cantidad de días de alquiler:">
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      
        <input type="number" placeholder="number" />
        
      </FormGroup>
      </div>
      <div className="Fecha inicial de la reserva:">
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
    


        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      </div>


  
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <div className="Fecha final de la reserva:">  
        <input type="date" placeholder="Fecha del viaje" /></div>

      </FormGroup>


      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>
</Form>

    );
};
export default BookingForm;
    