import React, { useState } from 'react';

// Assuming you have a predefined list of destinations
const destinations = [
    "Paris", "New York", "Tokyo", "Bali", "Korea", "Switzerland"
];

interface SearchBarProps {
    onSearch: (query: string) => void;  // Callback function for handling the search
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('');  // Local state to store the search query
    const [suggestions, setSuggestions] = useState<string[]>([]);  // State for storing suggestions

    // Handle input change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const queryValue = event.target.value;
        setQuery(queryValue);

        // Filter destinations based on the input (show suggestions only after 2 characters are typed)
        if (queryValue.length >= 2) {
            const filteredSuggestions = destinations.filter((destination) =>
                destination.toLowerCase().includes(queryValue.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    // Handle form submission (search)
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query);  // Pass query to the parent component for handling
    };

    // Handle suggestion click
    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);  // Set the clicked suggestion as the query
        setSuggestions([]);  // Clear the suggestions
        onSearch(suggestion);  // Trigger the search with the selected suggestion
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Search for destinations..."
                        aria-label="Search"
                        className="search-input"
                    />

                    {/* Render suggestions inside the search box */}
                    {suggestions.length > 0 && (
                        <ul className="suggestions-list">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="suggestion-item"
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;


