import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/shared/router/routes';

const Header = ({ user }: { user?: any }) => {
  return (
    <div>
      {!user ? (
        'User is not registered!'
      ) : (
        <nav>
          <ul>
            {routes.map((route: any) => (
              <li key={route.path}>
                <Link to={route.path}>{route.path}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
