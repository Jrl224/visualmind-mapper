
import React from "react";
import { Upload, Wand2, LineChart, FileDown } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your File",
    description: "Drag & drop or click to upload your document",
  },
  {
    icon: Wand2,
    title: "AI Analysis",
    description: "Our AI analyzes your content and suggests visualizations",
  },
  {
    icon: LineChart,
    title: "Generate Visualizations",
    description: "Convert your data into beautiful visual representations",
  },
  {
    icon: FileDown,
    title: "Export Results",
    description: "Download your visualizations in your preferred format",
  },
];

const ProcessSteps = () => {
  return (
    <section id="process" className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-24px)] h-[2px] bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
