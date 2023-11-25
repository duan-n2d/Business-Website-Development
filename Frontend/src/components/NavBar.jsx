import img1 from "../assets/logoweb__.png";
import { useState } from 'react';

function NavBar({ logoUrl, logo, pages }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  return (
    <nav className=' left-0 bg-green-400 flex '>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="logo flex md:cursor-pointer h-9 ">
          <img src={img1} alt="Logo" />
        </div>
        <div className='nav flex-1'>
          <ul className='flex p-3 font-medium md:flex-row md:space-x-8 md:mt-0 al'>
            {pages.map((page) => (
              <li
                key={page.name}
                className=' relative align-middle'
                onMouseEnter={() => setIsDropdownOpen(page)}
                onMouseLeave={() => setIsDropdownOpen(null)}
              >
                <a href={page.url}>
                  {page.name}
                </a>
                {isDropdownOpen === page && (
                  <div className="absolute bg-green-200 p-2  object-cover rounded-md hover:opacity-100 opacity-50 ">
                    <ul>
                      {page.dt.map((item, index) => (
                        <li  key={index} className="text-gray-800 bg-cover"><a  className="" href="#">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


