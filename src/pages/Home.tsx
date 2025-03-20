import React, { useState } from 'react';
import DestinationCard from '../components/DestinationCard';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Sample destinations data
    const destinations = [
        { title: 'Paris', description: 'The City of Lights', imageUrl: 'paris.jpg' },
        { title: 'Bali', description: 'A tropical paradise', imageUrl: 'bali.jpg' },
        { title: 'New York', description: 'The Big Apple', imageUrl: 'new.jpg' },
        { title: 'Tokyo', description: 'Modern city with rich culture', imageUrl: 'tokyo.jpg' },
        { title: 'Korea', description: 'A Journey Through Tradition and Modernity', imageUrl: 'korean.jpg' },
        { title: 'Switzerland', description: 'The Heart of the Alps', imageUrl: 'swiss.jpg' },

    ];

    const filteredDestinations = destinations.filter((destination) =>
        destination.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <div>
            <main>

                <SearchBar onSearch={handleSearch} /> {/* Add the SearchBar here */}
            </main>

            <div className="destination-list">
                {filteredDestinations.length > 0 ? (
                    filteredDestinations.map((destination, index) => (
                        <DestinationCard
                            key={index}
                            title={destination.title}
                            description={destination.description}
                            imageUrl={destination.imageUrl}
                        />
                    ))
                ) : (
                    <p>No destinations found.</p>
                )}
            </div>
        </div>
    );
};

export default Home;


