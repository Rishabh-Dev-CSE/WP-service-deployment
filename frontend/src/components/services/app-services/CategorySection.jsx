import React, { useState } from "react";
import TemplateCard from "./TemplateCard";

export default function CategorySection({ category, templates, color }) {
  const [showAll, setShowAll] = useState(false);

  // Agar showAll false hai to sirf 6 templates dikhao
  const visibleTemplates = showAll ? templates : templates.slice(0, 6);

  return (
    <div className="mb-20">
      <h2
        className={`text-3xl font-extrabold text-white mb-2 bg-gradient-to-r ${color} text-transparent bg-clip-text`}
      >
        {category}
      </h2>
      <p className="text-slate-400 mb-8 max-w-2xl">
        A collection of beautifully designed app templates for the{" "}
        {category.toLowerCase()} category.
      </p>

      {/* Templates Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {visibleTemplates.map((template, index) => (
          <TemplateCard key={index} template={template} />
        ))}
      </div>

      {/* See More / See Less Button */}
      {templates.length > 6 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 rounded-lg bg-yellow-100 text-black hover:bg-slate-700 transition"
          >
            {showAll ? "-----------------------See Less ↑ --------------------------" : "-------------------------See More ↓--------------------------"}
          </button>
        </div>
      )}
    </div>
  );
}
