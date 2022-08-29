import { useNavigate } from 'react-router-dom';
import css from './Button.module.css';

const Button = () => {
  const navigate = useNavigate();

  return (
    <button
      className={css.btn}
      type="button"
      onClick={() => {
        navigate(-1, { replase: true });
      }}
    >
      &#11160; Go back
    </button>
  );
};

export default Button;
