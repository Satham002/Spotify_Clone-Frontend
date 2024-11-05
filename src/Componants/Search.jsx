import React from 'react'
import { useState } from 'react';
import SearchIcon from './SearchIcon';
const Search = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', query);
        // Add your search logic here
    };
    return (
        <form onSubmit={handleSearch} className="flex items-center">
            <button
                
                className="bg-black border rounded-full text-white rounded-r-lg px-4 py-1 hover:bg-blue-600"
            >
                <SearchIcon />
            </button>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What do you want to play..."
                className="border border-gray-300 rounded-r-lg p-1 focus:outline-none focus:ring-2 bg-gray-950 focus:ring-white "
            />

        </form>
    )
}

export default Search
