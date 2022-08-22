import React from 'react';
import './css/styles.css';
import image_1 from "../src/img/FoodGallery/1N3A8620.jpg"
import image_2 from "../src/img/FoodGallery/1N3A8620.jpg"
import image_3 from "../src/img/FoodGallery/1N3A8626.jpg"
import image_4 from "../src/img/FoodGallery/1N3A8631.jpg"
import image_5 from "../src/img/FoodGallery/1N3A8637.jpg"
import image_6 from "../src/img/FoodGallery/1N3A8637.jpg"


const Food = () => {
  return (
    <div className="FoodGallery">
      <div className="InsideFoodGallery">
        <img className="FoodImages" src={image_1} alt="imageOne"/>
        <img className="FoodImages" src={image_2} alt="imageOne"/>
        <img className="FoodImages" src={image_3} alt="imageOne"/>
        <img className="FoodImages" src={image_4} alt="imageOne"/>
        <img className="FoodImages" src={image_5} alt="imageOne"/>
        <img className="FoodImages" src={image_6} alt="imageOne"/>
      </div>
    </div>
  );
}

export default Food;