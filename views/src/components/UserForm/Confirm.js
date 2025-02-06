import React from "react";

export default function Confirm({ values, prevStep, nextStep }) {
  const handleConfirm = () => {
    const userProfile = { ...values };
    console.log("Confirming user profile:", userProfile);

    // API call to save profile
    fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userProfile),
    })
      .then((res) => res.json())
      .then((data) => console.log("Profile saved:", data))
      .catch((err) => console.error("Error saving profile:", err));

    nextStep();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Confirm Your Details
          </h2>
          <button
            onClick={prevStep}
            className="text-red-500 hover:text-red-700 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-80 overflow-y-auto p-4 border rounded mt-4">
          <ul className="space-y-3">
            {Object.entries(values).map(([key, value]) => (
              <li key={key} className="flex justify-between border-b pb-2">
                <span className="font-semibold capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </span>
                <span className="text-gray-600">{value || "N/A"}</span>
              </li>
            ))}
          </ul>
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
            onClick={handleConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
