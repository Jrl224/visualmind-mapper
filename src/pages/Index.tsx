
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import FileUploadZone from "@/components/upload/FileUploadZone";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section id="upload-section" className="py-12 md:py-20 px-4 md:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Upload Your Document</h2>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
              <FileUploadZone />
            </div>
          </div>
        </section>
        <FeatureGrid />
        <ProcessSteps />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
