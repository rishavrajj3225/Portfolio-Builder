import React from "react";

export default function AboutMeDetails({
  values,
  handleChange,
  nextStep,
  prevStep,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800">About Me</h2>
          <button
            onClick={prevStep}
            className="text-red-500 hover:text-red-700"
          >
            &times;
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mt-4">
          <input
            type="text"
            placeholder="Enter Text For Introduction"
            value={values.introText}
            onChange={handleChange("introText")}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Enter Text Introduction Title"
            value={values.introTitle}
            onChange={handleChange("introTitle")}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Enter Text For About Me Section"
            value={values.bio}
            onChange={handleChange("bio")}
            className="w-full p-2 border rounded"
          />
          <select
            value={values.aboutBgColor}
            onChange={handleChange("aboutBgColor")}
            className="w-full p-2 border rounded"
          >
            <option value="#A9A8A5">Silver Chalice</option>
            <option value="#821717">Crimson Red</option>
            <option value="#11306A">Royal Blue Dark</option>
            <option value="#FAE779">Yellow Crayola</option>
            <option value="#2A2C2E">Jet Black</option>
          </select>
          <input
            type="text"
            placeholder="Profile Image URL"
            value={values.profileImage}
            onChange={handleChange("profileImage")}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Resume Link"
            value={values.resumeUrl}
            onChange={handleChange("resumeUrl")}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="GitHub Link"
            value={values.githubLink}
            onChange={handleChange("githubLink")}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="LinkedIn Link"
            value={values.linkdin}
            onChange={handleChange("linkdin")}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Footer Text"
            value={values.footer}
            onChange={handleChange("footer")}
            className="w-full p-2 border rounded"
          />
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
