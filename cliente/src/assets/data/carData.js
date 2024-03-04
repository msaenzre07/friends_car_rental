/* Import all images from assets/imagens directory */
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.jpg";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.jpg";

const carData = [
    {
      id: 1,
      brand: "Tesla",
      carName: "Tesla Malibu",
      imgUrl: img01,
      model: "Modelo 2023",
      price: 50,
      passenger: "4 personas",
      automatic: "Automatico",
    },

    {
        id: 2,
        brand: "Toyota",
        carName: "Toyota Aventador",
        imgUrl: img02,
        model: "Modelo 2000",
        price: 50,
        passenger: "4 personas",
        automatic: "Automatico",
    },
    
      {
        id: 3,
        brand: "BMW",
        carName: "BMW X3",
        imgUrl: img03,
        model: "Modelo 2002",
        price: 65,
        passenger: "4 personas",
        automatic: "Automatico",
      },
    
      {
        id: 4,
        brand: "Nissan",
        carName: "Nissan Mercielago",
        imgUrl: img04,
        model: "Modelo 2004",
        price: 70,
        passenger: "4 personas",
        automatic: "Automatico",
      },
    
      {
        id: 5,
        brand: "Ferrari",
        carName: "Ferrari Camry",
        imgUrl: img05,
        model: "Modelo 2001",
        price: 45,
        passenger: "4 personas",
        automatic: "Automatico",
      },
    
      {
        id: 6,
        brand: "Mercedes",
        carName: "Mercedes Benz XC90",
        imgUrl: img06,
        model: "Modelo 2022",
        price: 85,
        passenger: "4 personas",
        automatic: "Automatico",
      },
    
      {
        id: 7,
        brand: "Audi",
        carName: "Audi Fiesta",
        imgUrl: img07,
        model: "Modelo 2024",
        price: 50,
        passenger: "4 personas",
        automatic: "Automatico",
      },
    
      {
        id: 8,
        brand: "Colorado",
        carName: "Rolls Royce Colorado",
        imgUrl: img08,
        price: 50,
        passenger: "4 personas",
        automatic: "Automatico",
      },
    ];
    
    export default carData;
    