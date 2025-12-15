import {NavLink} from 'react-router-dom';

export default function PreloadLink({to, preload, children}) {
  return (
    <NavLink to={to} onMouseEnter={() => preload && preload ()}>
      {children}
    </NavLink>
  );
}