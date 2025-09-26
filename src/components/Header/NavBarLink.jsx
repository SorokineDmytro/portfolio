import React from 'react'

const NavBarLink = ({ linkName, linkPath }) => {
  return (
    <li className='text-white text-lg hover:text-red-200 duration-200 ease-in-out'>
      <a href={linkPath}>
        {linkName}
      </a>
    </li>
  );
};

export default NavBarLink
