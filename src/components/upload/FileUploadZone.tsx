
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";
import { extractTextFromFile, analyzeText } from '@/lib/utils/file-processing';
import WordCloud from '@/components/visualizations/WordCloud';
import Chart from '@/components/visualizations/Chart';
import MindMap from '@/components/visualizations/MindMap';

const FileUploadZone: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [visualizationData, setVisualizationData] = useState<any>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const onDrop = (acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
        setVisualizationData(null);
        if (acceptedFiles.length > 0) {
            toast.success("File uploaded successfully!");
        }
    };

    const generateVisualizations = async () => {
        if (files.length === 0) {
            toast.error("Please upload a file first");
            return;
        }

        setIsProcessing(true);
        try {
            const file = files[0];
            console.log('Processing file:', file.name); // Debug log
            
            const text = await extractTextFromFile(file);
            console.log('Extracted text length:', text.length); // Debug log
            
            const analysisResult = analyzeText(text);
            console.log('Analysis result:', analysisResult); // Debug log
            
            setVisualizationData(analysisResult); // Use the actual analysis result instead of demo data
            toast.success("Visualizations generated successfully!");
        } catch (error) {
            toast.error("Error generating visualizations");
            console.error('Error in generateVisualizations:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="file-upload-zone">
            <Dropzone onDrop={onDrop} multiple={false}>
                {({ getRootProps, getInputProps, isDragActive }) => (
                    <div 
                        {...getRootProps()} 
                        className={`dropzone flex flex-col items-center justify-center p-8 cursor-pointer transition-colors
                            ${isDragActive ? 'bg-primary/5' : 'hover:bg-gray-50'}`}
                    >
                        <input {...getInputProps()} />
                        <FileUp className="w-12 h-12 text-gray-400 mb-4" />
                        <p className="text-gray-600 text-center mb-2">
                            {isDragActive
                                ? "Drop your file here..."
                                : "Drag & drop a file here, or click to select one"}
                        </p>
                        <Button variant="outline" type="button">
                            Select File
                        </Button>
                    </div>
                )}
            </Dropzone>
            {files.length > 0 && (
                <div className="file-list mt-6">
                    <h3 className="text-lg font-semibold mb-2">Selected File:</h3>
                    <ul className="space-y-2">
                        {files.map((file) => (
                            <li 
                                key={file.name}
                                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                            >
                                <FileUp className="w-4 h-4 text-primary" />
                                <span className="text-sm text-gray-600">{file.name}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <Button 
                            className="w-full"
                            onClick={generateVisualizations}
                            disabled={isProcessing}
                        >
                            {isProcessing ? "Generating..." : "Generate Visualizations"}
                        </Button>
                    </div>
                </div>
            )}
            
            {visualizationData && (
                <div className="visualizations mt-8 space-y-8">
                    <div className="visualization-section">
                        <h3 className="text-lg font-semibold mb-4">Word Cloud</h3>
                        <div className="h-64 bg-gray-50 rounded-lg p-4">
                            <WordCloud data={visualizationData.wordCloud} />
                        </div>
                    </div>
                    
                    <div className="visualization-section">
                        <h3 className="text-lg font-semibold mb-4">Chart Analysis</h3>
                        <div className="h-64 bg-gray-50 rounded-lg p-4">
                            <Chart 
                                type="bar"
                                data={visualizationData.chart}
                                options={{ responsive: true, maintainAspectRatio: false }}
                            />
                        </div>
                    </div>
                    
                    <div className="visualization-section">
                        <h3 className="text-lg font-semibold mb-4">Mind Map</h3>
                        <div className="h-64 bg-gray-50 rounded-lg p-4">
                            <MindMap data={visualizationData.mindMap} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUploadZone;
