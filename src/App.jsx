import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!searchQuery) return;
    setLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>


    <div className='grid   max-w-[1200px] mx-auto mt-3 shadow-lg p-4   '>
      <h1 className='text-lg font-semibold pb-4'>Book Finder for Alex</h1>
      <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onSearch={fetchBooks} />
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </div>
      
      {/* <div>
        
	<div id="main" class="grid grid-cols-4 max-w-[1200px] mx-auto border shadown-lg  mt-12  gap-1 justify-evenly"> 
		<div class="bg-green-700 w-26 h-12">1</div> 
		<div class="bg-green-500 w-26 h-12">2</div> 
		<div class="bg-green-300 w-26 h-12">3</div> 
		<div class="bg-green-700 w-26 h-12">4</div> 
		<div class="bg-green-500 w-26 h-12">5</div> 
		 
	</div> 
      </div> */}

    </div>
  );
}

export default App;
