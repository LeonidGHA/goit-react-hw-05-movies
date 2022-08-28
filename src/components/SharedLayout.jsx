import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <nav className={css.navigation}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${css.navigationLink} ${css.active}`
              : `${css.navigationLink}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${css.navigationLink} ${css.active}`
              : `${css.navigationLink}`
          }
          to="/Movies"
        >
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
