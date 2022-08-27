import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';
import { getSearch } from 'components/request-api/tmbdRequestApi';

const Movies = () => {
  const [search, setSerach] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  // console.log(useParams);
  useEffect(() => {
    const fetchSearch = async () => {
      await getSearch(search).then(({ results }) => {
        setSearchResult(results);
      });
    };
    if (search) {
      fetchSearch();
    }
  }, [search]);

  const submitValue = data => {
    setSerach(data);
  };
  // console.log(searchResult);
  const renderMovies = searchResult.map(
    ({ backdrop_path, original_title, vote_average, id }) => (
      <li key={id}>
        <NavLink to={`/Movies/${id}`}>
          <img src={`https://image.tmdb.org/t/p/w200${backdrop_path}`} alt="" />
          <p>{original_title}</p>
          <p>{vote_average.toFixed(2)}</p>
        </NavLink>
      </li>
    )
  );

  return (
    <div>
      {search.length > 0 && (
        <NavLink to="/">
          <button type="button">Go back</button>
        </NavLink>
      )}

      <ul>{renderMovies}</ul>
      {!search.length > 0 && (
        <>
          <Searchbar submitValue={submitValue} />
        </>
      )}
    </div>
  );
};

export default Movies;
