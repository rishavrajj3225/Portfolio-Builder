import React, { useState } from "react";

const steps = [
  { label: "Select campaign settings", icon: "⚙️" },
  { label: "Create an ad group", icon: "👥" },
  { label: "Create an ad", icon: "🎥" },
];

export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Stepper */}
      <div className="flex justify-between items-center mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold ${
                activeStep >= index
                  ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
                  : "bg-gray-300"
              }`}
            >
              {step.icon}
            </div>
            <p
              className={`mt-2 text-sm ${
                activeStep >= index ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="text-center text-lg text-gray-700 mb-6">
        {activeStep === steps.length
          ? "All steps completed - you're finished!"
          : steps[activeStep].label}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Back
        </button>
        {activeStep === steps.length ? (
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
            onClick={handleReset}
          >
            Reset
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}
