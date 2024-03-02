/* Import images from all-images/blog-img directory */
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "¿Quiéres recorrer algo especial?",
    imgUrl: img01,
    description:
      " Te ofrecemos una amplia gama de vehículos y precios que más se ajusten a tus necesidades.",
  },

  {
    id: 2,
    title: "Compromiso de mejor precio",
    imgUrl: img02,
    description:
      "En nuestra flota encontrarás autos económicos, ven y descubra excelentes precios y disfruta de tu viaje.",
  },

  {
    id: 3,
    title: "¡Preparamos tu auto de alquiler!",
    imgUrl: img03,
    description:
      " Nuestro servicio de atención al cliente está disponible de 09:00 a.m a 05:00 p.m. los 7 días de la semana, para brindarte la ayuda y el respaldo que necesites. ¿Qué estás esperando? ",
    
  },
];

export default blogData;
