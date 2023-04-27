import React, { useState } from 'react';

import SearchBar from '../components/searchBar'
import AddCard from '../components/addCard';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (ads) => {
    setSearchResults(ads);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
        {searchResults.map(ad => (
          <AddCard key={ad._id} ad={ad} />
        ))}
      </div>
    </>
  );
}

export default SearchPage;