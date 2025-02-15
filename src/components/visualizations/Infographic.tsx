import React from 'react';

interface InfographicProps {
    data: any;
}

const Infographic: React.FC<InfographicProps> = ({ data }) => {
    return (
        <div className="infographic">
            {/* Render infographic content based on data */}
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            {/* Additional infographic elements */}
        </div>
    );
};

export default Infographic;
