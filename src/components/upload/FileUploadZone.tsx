import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const FileUploadZone: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
    };

    return (
        <div className="file-upload-zone">
            <Dropzone onDrop={onDrop} multiple={false}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="dropzone">
                        <input {...getInputProps()} />
                        <p>Drag & drop a file here, or click to select one</p>
                    </div>
                )}
            </Dropzone>
            {files.length > 0 && (
                <div className="file-list">
                    <h3>Selected File:</h3>
                    <ul>
                        {files.map((file) => (
                            <li key={file.name}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FileUploadZone;
