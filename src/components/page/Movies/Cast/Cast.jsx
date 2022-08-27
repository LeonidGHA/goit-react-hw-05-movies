import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'components/request-api/tmbdRequestApi';

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
    if (actors) {
      fetchMovieCredits();
    }
  }, [actors, id]);
  const renderActors = actors.map(
    ({ profile_path, original_name, character, id }) => (
      <li key={id}>
        <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="" />
        <p>{original_name}</p>
        <p>{character}</p>
      </li>
    )
  );
  return <ul>{renderActors}</ul>;
};

export default Cast;
