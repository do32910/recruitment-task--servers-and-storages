import { useEffect, useState } from 'react';
import { searchBarStyles } from './styles';

export function SearchBar({ search }): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTimeout(() => search(searchTerm), 500);
  }, [searchTerm]);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

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
