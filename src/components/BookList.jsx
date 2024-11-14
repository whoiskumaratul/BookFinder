import React from 'react';

function BookList({ books }) {
  if (!books.length) {
    return <p>No books found. Try another search.</p>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-4'>
      {books.map((book, index) => (
        <div key={index} className='border p-4 rounded shadow' > 
        {book.cover_i && (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              
              className='w-full  object-cover mb-2'
            />
          )}

          <h3 className='font-bold'>{book.title}</h3>
          {book.author_name && <p>Author: {book.author_name.join(', ')}</p>}
          {book.first_publish_year && <p>First Published: {book.first_publish_year}</p>}
          
        </div>
      ))}
    </div>
  );
}

export default BookList;
