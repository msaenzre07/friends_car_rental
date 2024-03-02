import React from "react";
import { Col } from "reactstrap";
import "../../styles/car-item.css";

const CarItem = (props) => {
    const { imgUrl, model, carName, automatic, price, passenger } = props.item;
  
    return (
      <Col lg="4" md="4" sm="6" className="mb-5">
        <div className="car__item">
         <div className="car__img">
            <img src={imgUrl} alt="" className="w-100" />
          </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Día</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-roadster-fill"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-compass-discover-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-team-line"></i> {passenger}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <p ></p>
          </button>
          <button className=" w-50 car__item-btn car__btn-details">
            <p></p>
          </button>
          </div>
        </div>
    </Col>
 );   
};

export default CarItem;