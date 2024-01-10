import React, { useState, useEffect } from 'react';
import { PiListBold, PiXBold, PiPlusBold, PiMinusBold } from 'react-icons/pi';
import axios from 'axios';

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [subMenu, setSubMenu] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getBrands = async () => {
      try {
        const res = await axios.get(`${API}/brands`);
        const activeBrands = res.data.filter((brand) => brand.is_active === true);
        setBrands(activeBrands);
      } catch (err) {
        console.log(err);
      }
    }
    getBrands();
  }, []);

  const brandNames = brands.map((brand) => brand.brand_name);

  const categories = [
    { name: 'Trang chủ', link: '/' },
    { name: 'Có gì mới', link: '#' },
    { name: 'Thương hiệu', link: '#', subItems: brandNames },
    { name: 'Sản phẩm', link: '/all-products', subItems: ['Đàn guitar', 'Ukulele'] },
    { name: 'Sale off', link: '/landing' },
    { name: 'Blog', link: '/blogs' },
    { name: 'Về Gakki', link: '/about-us' },
  ];

  const showNav = () => {
    setToggle(!toggle);
  };

  const handleHover = (category, subItems) => {
    setShowDetails(true);
    setCurrentCategory(category);
    setSubMenu(subItems || []);
  };

  const handleLeave = () => {
    setShowDetails(false);
    setCurrentCategory('');
    setSubMenu([]);
  };

  return (
<<<<<<< Updated upstream
    <nav className="sticky top-0 w-full z-1000 bg-green-300 flex justify-center items-center">
      <div className='w-full lg:w-10/12 mx-auto'>
=======
    <nav className="sticky top-0 w-full z-1000 bg-green-300 flex justify-center items-center text-14 lg:text-16">
      <div className='w-full md:w-10/12 mx-auto'>
>>>>>>> Stashed changes
        <div className='items-center py-2 my-auto'>
          <div className={`${toggle ? "hidden " : "flex "} md:hidden justify-start items-center`}>
            <PiListBold className="w-9 h-9"
              onClick={showNav} />
          </div>
          <div className={`${toggle ? "flex " : "hidden "} md:hidden justify-end items-center`}>
            <PiXBold className="w-9 h-9"
              onClick={showNav} />
          </div>

          <div className="hidden md:flex justify-between items-center text-[#1B3735]">
            {categories.map((category, index) => (
              <div
                key={index}
                style={{
                  width: `calc(100% / ${categories.length})`,
                  borderRight: index < categories.length - 1 ? '2px solid #D1D1D1' : 'none',
                }}
                className="relative group flex"
              >
                <a
                  href={category.link}
                  className='hover:text-white transition font-bold uppercase relative py-1 mx-auto text-center'
                  onMouseEnter={() => handleHover(category.name, category.subItems)}
                  onMouseLeave={handleLeave}
                >
                  {category.name}
                </a>
                {category.subItems && (
                  <div
                    className={`${currentCategory === category.name ? 'block' : 'hidden'
                      } absolute bg-white ml-2 w-full mt-8 space-y-2 shadow-md transition-transform transform ${index > 0 ? '-translate-x-2' : 'translate-x-2'
                      } group-hover:block`}
                  >
                    {category.subItems.map((item, index) => (
                      <div key={index} className='detail-item pl-5 py-2 hover:bg-[#F9FFD7]'>
                        <a href='#' className='transition'>
                          {item}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Option */}
          <ul className={`${toggle ? "" : "hidden"} md:hidden flex-row justify-center items-center w-full first:mt-2 text-[#1B3735]`}>
            {categories.map((category, index) => (
              <li key={index} className='border-t font-medium w-full grid grid-flow-row grid-cols-12 py-2.5 category'>
                {/* Category Option */}
                <a href={category.link} className='hover:text-white transition font-bold uppercase relative text-lg py-1 my-auto w-full text-center text-[18px] pl-8 col-span-11'>
                  {category.name}
                </a>

                {/* Button */}
                {category.subItems && (
                  <div className='my-auto'>
                    <div className={`${showDetails ? "hidden" : "flex"}`}>
                      <PiPlusBold className='' onClick={() => handleHover(category.name, category.subItems)} />
                    </div>
                    <div className={`${showDetails ? "flex" : "hidden"}`}>
                      <PiMinusBold className='' onClick={handleLeave} />
                    </div>
                  </div>
                )}

                {/* Sub Option */}
                {category.subItems && (
                  <ul className={`${showDetails ? "flex" : "hidden"} col-span-12 flex-col justify-center items-center w-full first:mt-2 text-[#1B3735]`}>
                    {category.subItems.map((item, index) => (
                      <li key={index} className='border-t bg-white hover:bg-[#F9FFD7] transition font-medium w-[100%] flex justify-center p-2.5'>
                        <a href='#' className='font-bold uppercase relative py-1 mx-auto text-[18px]'>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
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