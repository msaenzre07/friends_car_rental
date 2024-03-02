import React from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
    return (
        <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
    const { imgUrl, title, description } = item;
  
    return (
      <Col lg="4" md="6" sm="6" className="mb-5">
        <div className="blog__item">
          <img src={imgUrl} alt="" className="w-100" />
          <div className="blog__info p-3">
            <Link to={`/blog/${title}`} className="blog__title">
              {title}
            </Link>
            <p className="section__description mt-3">
            {description.length > 200
              ? description.substr(0, 200)
              : description}
            </p>      
          </div>
        </div>
   </Col>
  );   
};

export default BlogList;