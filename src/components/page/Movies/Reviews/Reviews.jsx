import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'components/request-api/tmbdRequestApi';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchMovieReviews = async () => {
      await getMovieReviews(id).then(({ results }) => {
        setReviews(results);
      });
    };
    if (reviews) {
      fetchMovieReviews();
    }
  }, [id, reviews]);
  const renderReviews = reviews.map(({ author, content, id }) => (
    <li key={id}>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  ));
  return <ul>{renderReviews}</ul>;
};

export default Reviews;
