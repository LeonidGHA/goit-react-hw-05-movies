import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'components/request-api/tmbdRequestApi';
const MoviesDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const fetchMovieDetails = async () => {
      await getMovieDetails(id).then(data => {
        setDetails(data);
        // console.log(data);
      });
    };
    if (details) {
      fetchMovieDetails();
    }
  }, []);
  const {
    backdrop_path,
    original_title,
    overview,
    genres,
    release_date,
    vote_average,
  } = details;

  return (
    <>
      <NavLink to="/">
        <button type="button">Go back</button>
      </NavLink>
      <div>
        <img src={`https://image.tmdb.org/t/p/w200${backdrop_path}`} alt="" />
        <h2>
          {original_title} ({Number.parseInt(release_date)})
        </h2>
        <p>User Score: {(vote_average * 10).toFixed(0)} %</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres?.map(el => el.name + ' ')}</p>
      </div>
      <ul>
        <li>
          <NavLink to="Cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="Reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
