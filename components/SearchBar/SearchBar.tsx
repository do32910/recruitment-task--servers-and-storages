import { useEffect, useState } from "react";
import { searchBarStyles } from "./styles"

export function SearchBar({search}) {
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    // Simple debounce solution
    setTimeout(() => search(searchTerm), 500);
  }, [searchTerm]);

  const handleInputChange = (evt) => {
    setSearchTerm(evt.target.value)
  }

  return (
    <>
      <style jsx>{searchBarStyles}</style>
      <input 
        className="SearchBar"
        placeholder="Search by name and hostname"
        type="text"  
        autoFocus
        value={searchTerm}
        onChange={handleInputChange}
      />
    </>
  );
}