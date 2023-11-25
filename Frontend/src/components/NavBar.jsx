import img1 from "../assets/logoweb__.png";
import { useState } from 'react';

function NavBar({ logoUrl, logo, pages }) {
 const [showDetails, setShowDetails] = useState(false);
  const [subMenu, setSubMenu] = useState([]);

  const handleHover = (category, subItems) => {
    setShowDetails(true);
    switch (category) {
      case 'brand':
        setSubMenu(['Rosen', 'Ba Đờn', 'Yamaha']);
        break;
      case 'product':
        setSubMenu(['Đàn guitar', 'Ukulele']);
        break;
      default:
        setSubMenu([]);
        break;
    }
  };
  const handleLeave = () => {
    setShowDetails(false);
    setSubMenu([]);
  };
  return (
    <nav className='bg-green-400'>
      <div className='container flex'>
        <div className='flex items-center justify-between flex-row pl-12 px-8 py-4 my-auto'>
          <div className='flex items-center capitalize font-medium md:flex-row md:space-x-8 md:mt-0 al'>
            <a
              href="#"
              className='text-green-950 hover:text-white transition'
              
            >
              TRANG CHỦ
            </a>
            <p className='text-gray-400'>|</p>

            <a
              href="#"
              className='text-green-950 hover:text-white transition'
              
            >
              CÓ GÌ MỚI
            </a>
            <p className='text-gray-400'>|</p>

            <a
              href="#"
              className='text-green-950 hover:text-white transition'
              onMouseEnter={() => handleHover('brand')}
              onMouseLeave={handleLeave}
            >
              THƯƠNG HIỆU
            </a>
            <p className='text-gray-400'>|</p>

            <a
              href="#"
              className='text-green-950 hover:text-white transition'
              onMouseEnter={() => handleHover('product')}
              onMouseLeave={handleLeave}
            >
              SẢN PHẨM
            </a>
            <p className='text-gray-400'>|</p>

            <a
              href="#"
              className='text-green-950 hover:text-white transition'
              
            >
              SALE OFF
            </a>
            <p className='text-gray-400'>|</p>

            <a
              href="#"
              className='text-green-950 hover:text-white transition'
             
            >
              BLOG
            </a>
            <p className='text-gray-400'>|</p>

            <a
              href="#"
              className='text-green-950 hover:text-white transition'
           
            >
              VỀ GAKKI
            </a>
          </div>
        </div>
      </div>
      {showDetails && (
        <div className='details-container'>
          {subMenu.map((item, index) => (
            <div key={index} className='detail-item'>
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
export default NavBar;


