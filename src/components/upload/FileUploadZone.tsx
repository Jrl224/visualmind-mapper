
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";

const FileUploadZone: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
        if (acceptedFiles.length > 0) {
            toast.success("File uploaded successfully!");
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
                            onClick={() => {
                                // Here we'll add the visualization logic in the next phase
                                toast.success("Starting visualization process...");
                            }}
                        >
                            Generate Visualizations
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUploadZone;
