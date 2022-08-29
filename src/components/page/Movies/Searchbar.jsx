import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import css from './Searchbar.module.css';

const Searchbar = ({ submitValue }) => {
  const [search, setSearch] = useState('');

  const searchInput = ({ target }) => {
    setSearch(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (search === '') {
      Notiflix.Notify.warning('Enter the name of the film');
      return;
    }
    submitValue(search);
    reset();
  };
  const reset = () => {
    setSearch('');
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label>
        <input
          className={css.input}
          type="text"
          value={search}
          name="search"
          onChange={searchInput}
        />
      </label>
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  submitValue: PropTypes.func.isRequired,
};

export default Searchbar;
