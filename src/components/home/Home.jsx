import React, { useState , useEffect} from "react";
import DynamicCard from "../utilities/DynamicCard";
import { CARD_DATA, PRODUCTS } from "../../constants/constants";
import Contact from "../contactUs/Contact";
import url from "../../api/endpoints";
import axios from "axios";
export default function Home() {
  const [apiResponse, setApiResponse] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(url?.dev?.productApi);
  //       console.log("Response:", response.data);
  //       setApiResponse(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen mt-8 bg-white-400 text-amber-900">
        <h1 className="text-4xl font-bold mb-4">
          Craftsmanship in Every Detail
        </h1>
        <p className="text-lg text-center mb-6">
          We specialize in bespoke wooden furniture, cabinetry, and custom
          woodwork. With years of experience in carpentry, we bring your vision
          to life with precision and quality. Whether you're looking for
          handcrafted furniture or home renovations, we provide a range of
          services tailored to your needs.
        </p>
        <button className="bg-amber-900 text-white font-semibold py-2 px-4 rounded">
          Explore Our Work
        </button>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((card, index) => (
            <DynamicCard
              key={index}
              title={card.productName}
              description={card.productDescription}
              imageUrl={card.productImage}
              price={card.productPrice}
              bgColor={card.bgColor}
              productDetails= {card}
            />
          ))}
        </div>
      </div>

      {/* Additional Content Sections */}
      {/* <div className="p-8 bg-amber-800 text-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p className="mb-4">
          At our carpenter shop, we offer a wide range of services including
          custom furniture making, cabinetry, and home renovations. Whether you
          need a bespoke dining table or fitted wardrobes, our skilled craftsmen
          are here to bring your vision to life.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <p className="mb-4">
          We specialize in high-quality wooden products such as:
          <ul className="list-disc list-inside mt-2">
            <li>Custom Furniture (tables, chairs, beds)</li>
            <li>Kitchen Cabinets and Storage Solutions</li>
            <li>Wooden Doors and Windows</li>
            <li>Outdoor Furniture (benches, picnic tables)</li>
            <li>Decorative Wooden Accents (shelving, art pieces)</li>
          </ul>
          Each product is crafted with precision and care, ensuring durability
          and style.
        </p>

        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <p className="mb-4">
          Our team of expert carpenters is dedicated to providing top-notch
          solutions tailored to your needs. We pride ourselves on using
          sustainable materials and innovative techniques to create functional
          and beautiful pieces that enhance your space.
        </p>
      </div> */}

      {/* More Content for Scrolling */}
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <Contact />
      </div> */}
    </div>
  );
}
