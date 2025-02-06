import React, { useState, useEffect } from "react";

const images = [
  "assets/img/Rest1.jpeg",
  "assets/img/Rest2.jpeg",
  "assets/img/Rest3.jpeg",
  "assets/img/Rest4.jpeg",
  "assets/img/Rest5.jpeg",
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

  // Auto-slide every 3 seconds unless hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") prevSlide();
      if (event.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="container mx-auto py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-3xl font-bold text-center mb-6">
        Our Proud Customers
      </h1>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Carousel Images */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Customer Portfolio ${currentIndex + 1}`}
            className="w-full h-[500px] object-cover transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-x-0 bottom-4 text-center text-white bg-black bg-opacity-50 py-2">
            <h3 className="text-lg font-semibold">Sample Customer Portfolio</h3>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
          aria-label="Next Slide"
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
