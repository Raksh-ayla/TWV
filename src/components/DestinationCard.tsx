import React from 'react';

interface DestinationCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="destination-card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default DestinationCard;
