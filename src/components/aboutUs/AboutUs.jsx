import React from 'react';
import { TEAM_MEMBERS } from '../../constants/constants';
import DynamicCard from "../utilities/DynamicCard";
export default function AboutUs() {
  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-amber-800">About Us</h2>
      <p className="mb-6 text-center text-gray-700">
        Welcome to Dummy Carpenter shop, where craftsmanship meets passion. With over 10 years of experience in woodworking, we take pride in delivering high-quality, custom solutions for all your carpentry needs.
      </p>
      
      <h3 className="text-3xl font-semibold mb-4 text-amber-800">Our Mission</h3>
      <p className="mb-4 text-gray-700">
        Our mission is to provide exceptional carpentry services that combine quality materials with expert craftsmanship. We aim to create beautiful, functional spaces that enhance the lives of our customers.
      </p>

      <h3 className="text-3xl font-semibold mb-4 text-amber-800">Our Values</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Integrity: We believe in honest and transparent practices.</li>
        <li>Quality: We use only the best materials and techniques.</li>
        <li>Customer Satisfaction: Your happiness is our priority.</li>
        <li>Sustainability: We are committed to eco-friendly practices.</li>
      </ul>

      <h3 className="text-3xl font-semibold mb-4 text-amber-800">Meet the Team</h3>
      <p className="mb-4 text-gray-700">
        Our team consists of skilled artisans who are passionate about woodworking. Each member brings unique talents and expertise, ensuring that we can handle any project, big or small.
      </p>
      {TEAM_MEMBERS.map((card, index) => (
            <DynamicCard
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              bgColor={card.bgColor}
            />
          ))}
      <h3 className="text-3xl font-semibold mb-4 text-amber-800">Get in Touch</h3>
      <p className="mb-4 text-gray-700">
        We invite you to visit our shop or contact us for a consultation. Let’s work together to bring your ideas to life!
      </p>
    </div>
  );
}
