
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Transform Your Data into
          <span className="text-primary"> Visual Insights</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Upload any document and let AI generate beautiful, meaningful visualizations instantly. No login required.
        </p>
        <Button
          size="lg"
          className="group"
          onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start Visualizing
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
