import React from 'react';

function SearchBar({ value, onChange, onSearch }) {
  return (
    <div>
    <div className="flex">
  <input
    className="p-3 border w-full"
    type="text"
    placeholder="Search for a book by title..."
    value={value}
    onChange={onChange}
  />
  <button 
    onClick={onSearch} 
    className="bg-blue-700 text-white p-3 px-6 ml-2">
    Search
  </button>
</div>

    </div>
  );
}

export default SearchBar;
