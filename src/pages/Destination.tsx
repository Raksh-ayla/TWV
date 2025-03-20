import React from 'react';
import { useParams } from 'react-router-dom';

interface DestinationProps {
    name: string;
    description: string;
    imageUrl: string;
    attractions: string[];
    bestTimeToVisit: string;
}

const Destination: React.FC = () => {
    // Using useParams to get the dynamic route parameter (e.g., destination ID or name)
    useParams<{ id: string }>();

    // Example destination data for different places
    const destinationData: DestinationProps = {
        name: 'Paris',
        description:
            'Paris, the capital of France, is known for its iconic landmarks like the Eiffel Tower, the Louvre Museum, and the Champs-Élysées. It is one of the most visited cities in the world, with a rich cultural and artistic heritage.',
        imageUrl: 'https://example.com/images/paris.jpg',
        attractions: [
            'Eiffel Tower',
            'Louvre Museum',
            'Notre-Dame Cathedral',
            'Sacré-Cœur Basilica',
            'Champs-Élysées',
        ],
        bestTimeToVisit:
            'The best time to visit Paris is during the spring (April to June) or fall (September to November) when the weather is mild and the city is less crowded.',
    };

    return (
        <div className="destination-page">
            <h1>{destinationData.name}</h1>

            <video
                className="destination-video"
                autoPlay
                loop
                muted
                style={{ maxWidth: '600px', maxHeight: '400px', width: '1000vh   ', height: '100vh' }}
            >
                <source src="/ppa.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>



            <h2>Description</h2>
            <p>{destinationData.description}</p>

            <h2>Top Attractions</h2>
            <ul>
                {destinationData.attractions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                ))}
            </ul>

            <h2>Best Time to Visit</h2>
            <p>{destinationData.bestTimeToVisit}</p>
        </div >
    );
};

export default Destination;
