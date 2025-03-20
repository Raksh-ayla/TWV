// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>
                Welcome to our travel agency! We are passionate about helping you find the perfect travel destinations for your next vacation. Whether you're looking for a relaxing beach getaway or a cultural adventure, we have something for everyone. Our goal is to make your travel dreams come true!
            </p>

            <h2>Popular Destinations</h2>

            <div className="destination">
                <h3>Paris: The City of Lights</h3>
                <img src="/paris.jpg" alt="Paris" />
                <p>
                    Paris, the capital of France, is known for its iconic landmarks, such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. The city is famous for its art, fashion, cuisine, and romantic ambiance. Whether you're admiring the art at the Louvre or enjoying a croissant at a sidewalk café, Paris has something magical for everyone.
                </p>
            </div>

            <div className="destination">
                <h3>Bali: A Tropical Paradise</h3>
                <img src="/bali.jpg" alt="Bali" />
                <p>
                    Bali is a beautiful island in Indonesia that is famous for its stunning beaches, lush rice terraces, and vibrant culture. Whether you're seeking relaxation, adventure, or a cultural experience, Bali has it all. From surfing in Kuta to exploring the temples and waterfalls in Ubud, Bali offers a perfect mix of nature and adventure.
                </p>
            </div>

            <div className="destination">
                <h3>New York: The big Apple</h3>
                <img src="/new.jpg" alt="New York" />
                <p>New York is a city that never sleeps, bustling with energy and opportunity. Known for its iconic skyline, diverse neighborhoods, and rich cultural heritage, it’s a place where the world’s dreams come to life. From Broadway theaters to historic landmarks like the Statue of Liberty and Central Park, New York represents a global center of culture, business, and creativity. Whether you're visiting for the first time or returning, there’s always something new to discover in the city that has it all.</p>
            </div>

            <div className="destination">
                <h3>Tokyo : Modern city with rich culture</h3>
                <img src="/tokyo.jpg" alt="Tokyo" />
                <p>New York is a city that never sleeps, bustling with energy and opportunity. Known for its iconic skyline, diverse neighborhoods, and rich cultural heritage, it’s a place where the world’s dreams come to life. From Broadway theaters to historic landmarks like the Statue of Liberty and Central Park, New York represents a global center of culture, business, and creativity. Whether you're visiting for the first time or returning, there’s always something new to discover in the city that has it all.</p>
            </div>

            <div className="destination">
                <h3>Korea : A Journey Through Tradition and Modernity </h3>
                <img src="/public/korean.jpg" alt="Korea" />
                <p>Discover the beauty of Korea, where ancient traditions blend seamlessly with cutting-edge technology. From the vibrant streets of Seoul to the peaceful temples and scenic landscapes, Korea offers a unique and unforgettable travel experience. Whether you're exploring historic palaces, enjoying delicious Korean cuisine, or immersing yourself in the world of K-Pop, Korea has something for every traveler.</p>
            </div>

            <div className="destination">
                <h3> Swiss: Discover the Beauty of Switzerland: The Heart of the Alps</h3>
                <img src="/public/swiss.jpg" alt="Swiss" />
                <p>Switzerland is a country known for its breathtaking landscapes, including majestic mountains, pristine lakes, and charming villages. Whether you're skiing in the Swiss Alps, exploring the serene shores of Lake Geneva, or enjoying the beauty of the cities like Zurich and Lucerne, Switzerland offers a perfect blend of nature, adventure, and culture.</p>            </div>
        </div>
    );
};

export default About;
