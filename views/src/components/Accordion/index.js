import React, { useState } from "react";

export default function ActionsInAccordionSummary() {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="border-b">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleAccordion(1)}
        >
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span>Read the Terms & Conditions placing the Order Online</span>
          </label>
        </div>
        {expanded === 1 && (
          <div className="p-4 bg-gray-100">
            <p className="text-gray-600">
              The click event of the nested action will propagate up and expand
              the accordion unless you explicitly stop it.
            </p>
          </div>
        )}
      </div>

      <div className="border-b">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleAccordion(2)}
        >
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span>Read COVID 19 precautionary steps</span>
          </label>
        </div>
        {expanded === 2 && (
          <div className="p-4 bg-gray-100">
            <p className="text-gray-600">
              The focus event of the nested action will propagate up and also
              focus the accordion unless you explicitly stop it.
            </p>
          </div>
        )}
      </div>

      <div>
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleAccordion(3)}
        >
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span>Read Q & A's</span>
          </label>
        </div>
        {expanded === 3 && (
          <div className="p-4 bg-gray-100">
            <p className="text-gray-600">
              If you forget to put an aria-label on the nested action, the label
              of the action will also be included in the label of the parent
              button that controls the accordion expansion.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
