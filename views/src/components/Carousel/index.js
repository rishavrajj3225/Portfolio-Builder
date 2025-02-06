import React, { useState } from "react";

const images = [
  "assets/img/img1.jpg",
  "assets/img/img2.jpg",
  "assets/img/img3.jpg",
  "assets/img/img4.jpeg",
  "assets/img/img5.jpeg",
  "assets/img/img6.jpeg",
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Featured Templates
      </h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Carousel Images */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt="Portfolio Sample"
            className="w-full h-[500px] object-cover transition-transform duration-700"
          />
          <div className="absolute inset-x-0 bottom-4 text-center text-white bg-black bg-opacity-50 py-2">
            <h3 className="text-lg font-semibold">Sample Customer Portfolio</h3>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
        >
          ❯
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-blue-500 w-4" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
