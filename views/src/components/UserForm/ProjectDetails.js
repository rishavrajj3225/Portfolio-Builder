import React from "react";

export default function ProjectDetails({
  values,
  handleChange,
  nextStep,
  prevStep,
}) {
  const projects = [
    { key: "One", title: "Project One" },
    { key: "Two", title: "Project Two" },
    { key: "Three", title: "Project Three" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Enter Project Details
          </h2>
          <button
            onClick={prevStep}
            className="text-red-500 hover:text-red-700 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-6 mt-4">
          {projects.map((project) => (
            <div key={project.key} className="p-4 border rounded">
              <h3 className="text-lg font-semibold text-gray-700">
                {project.title}
              </h3>
              <input
                type="text"
                placeholder={`${project.title} Title`}
                value={values[`project${project.key}Title`]}
                onChange={handleChange(`project${project.key}Title`)}
                className="w-full p-2 border rounded mt-2"
              />
              <textarea
                placeholder={`${project.title} Description`}
                value={values[`project${project.key}Text`]}
                onChange={handleChange(`project${project.key}Text`)}
                className="w-full p-2 border rounded mt-2"
              />
              <input
                type="text"
                placeholder={`${project.title} Link`}
                value={values[`project${project.key}Url`]}
                onChange={handleChange(`project${project.key}Url`)}
                className="w-full p-2 border rounded mt-2"
              />
              <input
                type="text"
                placeholder={`${project.title} Image URL`}
                value={values[`project${project.key}Image`]}
                onChange={handleChange(`project${project.key}Image`)}
                className="w-full p-2 border rounded mt-2"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
