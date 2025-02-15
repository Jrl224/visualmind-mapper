
import React from "react";
import { FileText, BarChart2, Brain, Download } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Multiple File Types",
    description: "Support for PDF, DOCX, spreadsheets, and more",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Intelligent content understanding and visualization suggestions",
  },
  {
    icon: BarChart2,
    title: "Rich Visualizations",
    description: "Charts, mind maps, word clouds, and creative sketches",
  },
  {
    icon: Download,
    title: "Export Ready",
    description: "Download your visualizations in PDF or HTML format",
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
