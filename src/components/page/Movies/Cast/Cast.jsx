import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'components/request-api/tmbdRequestApi';
import css from './Cast.module.css';
const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const fetchMovieCredits = async () => {
      await getMovieCredits(id).then(({ cast }) => {
        setActors(cast);
        // console.log(cast);
      });
    };
    if (id) {
      fetchMovieCredits();
    }
  }, [id]);
  const renderActors = actors.map(
    ({ profile_path, original_name, character, id }) => (
      <li key={id} className={css.item}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/original/${profile_path}`
              : `https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg`
          }
          alt=""
        />
        <p>{original_name}</p>
        <p>{character}</p>
      </li>
    )
  );
  return (
    <>
      {actors.length !== 0 ? (
        <ul className={css.list}>{renderActors}</ul>
      ) : (
        <p>We dont have any actors for this movie</p>
      )}
    </>
  );
};

export default Cast;
