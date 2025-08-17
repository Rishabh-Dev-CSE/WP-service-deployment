import React from "react";
import TemplateCard from "./TemplateCard";

export default function CategorySection({ category, templates, color }) {
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
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {templates.map((template, index) => (
          <TemplateCard key={index} template={template} />
        ))}
      </div>
    </div>
  );
}
