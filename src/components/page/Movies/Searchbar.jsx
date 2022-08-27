import { useState } from 'react';

const Searchbar = ({ submitValue }) => {
  const [search, setSearch] = useState('');

  const searchInput = ({ target }) => {
    setSearch(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    submitValue(search);
    reset();
  };
  const reset = () => {
    setSearch('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          value={search}
          name="search"
          onChange={searchInput}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
