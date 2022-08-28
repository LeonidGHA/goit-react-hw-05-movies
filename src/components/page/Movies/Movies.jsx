import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import Searchbar from './Searchbar';
import { getSearch } from 'components/request-api/tmbdRequestApi';
import Notiflix from 'notiflix';
import css from './Movies.module.css';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchSearch = async () => {
      await getSearch(searchValue).then(({ results }) => {
        if (results.length === 0) {
          Notiflix.Report.failure(
            'Invalid request',
            '"No matches were found for your search" <br/><br/>- Henry Ford',
            'Okay'
          );
          return;
        }
        setSearchResult(results);
      });
    };
    if (searchValue) {
      fetchSearch();
    }
  }, [searchValue]);

  const submitValue = data => {
    // console.log(data);
    setSearchParams({ query: data });
  };

  const renderMovies = searchResult.map(
    ({ poster_path, original_title, vote_average, id }) => (
      <li key={id} className={css.item}>
        <NavLink to={`/Movies/${id}`} className={css.item_link}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : `https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg`
            }
            alt=""
          />
          <p className={css.title}>{original_title}</p>
          <p className={css.rating}>{vote_average.toFixed(2)}</p>
        </NavLink>
      </li>
    )
  );

  return (
    <div>
      {searchResult.length !== 0 && (
        <>
          <NavLink to="/">
            <button type="button" className={css.btn}>
              &#11160; Go back
            </button>
          </NavLink>
          <ul className={css.list}>{renderMovies}</ul>
        </>
      )}

      {searchResult.length === 0 && <Searchbar submitValue={submitValue} />}
    </div>
  );
};

export default Movies;
