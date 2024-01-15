import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import { PiArrowCircleLeftFill, PiArrowCircleRightFill, PiPlusBold, PiCheckBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Blog1 from '../assets/blogs/Blog1.jpg'
import Blog2 from '../assets/blogs/Blog2.jpg'
import Blog3 from '../assets/blogs/Blog3.jpeg'
import Blog4 from '../assets/blogs/Blog4.jpg'
import Blog5 from '../assets/blogs/Blog5.jpg'
import Blog6 from '../assets/blogs/Blog6.jpg'
import Blog7 from '../assets/blogs/Blog7.jpg'
import Blog8 from '../assets/blogs/Blog8.jpg'

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

function Blogs() {
  const blogNews = [
    {
      url: 'blog/2',
      category: '#Bí kíp Produce',
      imageUrl: Blog2,
      heading: 'Xóa tạp âm khi thu',
      excerpt: 'Để mang đến âm thanh chuyên nghiệp và tinh tế, việc biết cách sử dụng công cụ...'
    },
    {
      url: 'blog/4',
      category: '#Bí kíp Produce',
      imageUrl: Blog4,
      heading: 'Kỹ thuật thu âm cần phải nhớ',
      excerpt: 'Hướng dẫn về cách nhận biết và giảm thiểu nhiễu trong quá trình thu âm...'
    },

    {
      url: 'blog/6',
      category: '#Kiến thức âm nhạc',
      imageUrl: Blog6,
      heading: 'Kỹ thuật Piano',
      excerpt: 'Cung cấp một cái nhìn tổng quan về các kỹ thuật cơ bản cần thiết cho người mới...'
    },
  ]

  const blogPosts = [
    {
      url: 'blog/1',
      category: '#Hướng dẫn chọn đàn',
      imageUrl: Blog1,
      heading: 'Mua đàn nào là tốt?',
      excerpt: 'Bạn mới bắt đầu học đàn và đang đối diện với thách thức lựa chọn loại đàn phù hợp? Bài viết này sẽ dẫn bạn qua một hành trình chi tiết để giúp bạn tìm ra cây đàn hoàn hảo cho mình.'
    },
    {
      url: 'blog/2',
      category: '#Bí kíp Produce',
      imageUrl: Blog2,
      heading: 'Neural DSP Quad Cortex Processor: Amplifier & Effects Modelling Thế Hệ Mới',
      excerpt: 'Quad Cortex là công cụ nhỏ gọn mang đến vô vàn lựa chọn thú vị để bạn định hình chất nhạc của mình... '
    },
    {
      url: 'blog/3',
      category: '#Kiến thức âm nhạc',
      imageUrl: Blog3,
      heading: 'Cách Bảo Quản và Bảo Dưỡng Đàn Piano Đúng Cách',
      excerpt: 'Việc bảo quản và bảo dưỡng đàn piano đúng cách là yếu tố quan trọng để đảm bảo rằng âm nhạc luôn phát ra với chất lượng tốt nhất. Trong bài viết này, chúng ta sẽ khám phá những bí quyết...'
    },
    {
      url: 'blog/4',
      category: '#Bí kíp Produce',
      imageUrl: Blog4,
      heading: 'Kỹ thuật thu âm cần phải nhớ',
      excerpt: 'Hướng dẫn về cách nhận biết và giảm thiểu nhiễu trong quá trình thu âm. Bài viết sẽ tập trung vào chiến lược phòng ngừa và cách xử lý hiệu quả các loại nhiễu âm từ môi trường xung quanh.'
    },
    {
      url: 'blog/5',
      category: '#Hướng dẫn chọn đàn',
      imageUrl: Blog5,
      heading: 'Các mẫu guitar Fender chất lượng trong 2022',
      excerpt: 'Fender mang đến nhiều điều thú vị và hứng khởi cho năm 2022! Chú ý đặc biệt đến hướng phát triển của họ cho dòng guitar Telecaster, một biểu tượng trong thế giới nhạc cụ.'
    },
    {
      url: 'blog/6',
      category: '#Kiến thức âm nhạc',
      imageUrl: Blog6,
      heading: 'Một số tiêu chí cần lưu ý khi chọn guitar cho người mới tập chơi',
      excerpt: 'Có hai loại guitar phổ biến nhất hiện nay là guitar acoustic (guitar không cần khuếch đại âm thanh) và guitar điện (guitar cần khuếch đại âm thanh bằng loa).'
    },
    {
      url: 'blog/7',
      category: '#Hướng dẫn chọn đàn',
      imageUrl: Blog7,
      heading: 'Lựa chọn mua guitar cũ hay mới khi vừa mới tập chơi đàn guitar ?',
      excerpt: 'Không cần tìm đâu xa để mua được món quà hợp gu cho mùa lễ hội 2023, dưới đây là bài viết hướng dẫn chọn mua trống do các chuyên gia nhiều kinh nghiệm của chúng tôi gợi ý.'
    },
    {
      url: 'blog/8',
      category: '#Hướng dẫn chọn đàn',
      imageUrl: Blog8,
      heading: 'Keyboard nào là phù hợp cho người mới bắt đầu',
      excerpt: 'Keyboard là một nhạc cụ rất linh hoạt, phù hợp cho cả những nhạc sĩ cần tính đa năng và pianist lão luyện muốn khám phá nhiều âm thanh.'
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  const handleSearch = () => {
    setCurrentPage(1);
    if (searchTerm.trim() === '' && !isCategorySelected) {
      setSearchResults(blogPosts);
      return;
    }

    const results = blogPosts.filter(
      (post) =>
        (post.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!isCategorySelected || post.category === selectedCategory)
    );

    setSearchResults(results);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch(); // Call handleSearch initially to load all posts
  }, [isCategorySelected, selectedCategory]);

  // Thêm state để theo dõi trang hiện tại
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Số bài viết mỗi trang

  // Tính toán số lượng trang
  const totalPages = Math.ceil(searchResults.length / postsPerPage);

  // Xác định index của bài viết đầu tiên trên trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchResults.slice(indexOfFirstPost, indexOfLastPost);

  // Hàm chuyển trang
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const filterType = [
    "#Hướng dẫn chọn đàn",
    "#Bí kíp Produce",
    "#Kiến thức âm nhạc"
  ];

  // css filter
  const Filter = {
    backgroundColor: "black"
  }
  const FilterHover = {
    cursor: 'pointer',
    userSelect: 'none',
  };

  return (
    <div className='font-nunito text-[#1B3735]'>
      <br />
      <h1 className='font-inter md:text-40 text-30 text-center font-bold'>TẤT CẢ BÀI VIẾT</h1><br /><br />
      <div className='lg:flex lg:justify-between'>

        <div className='lg:w-[22%] lg:ml-[3%] xl:mr-[2%] xl:text-16 lg:text-14'>
          {/* Filter & Search */}
          <div className=' ml-[5%] mr-[5%]'>
            <div className='flex'>
              <h4 className='font-bold w-[95%]'>Tìm kiếm theo từ khóa</h4>
              <MdKeyboardArrowDown size={25} />
            </div>
            <br />
            <hr className='border-black border-1 mb-5' />
            <div className='bg-white border-gray-300 border-2 p-2 flex items-center'>
              <IoIosSearch className='text-[20px] text-gray-300' />
              <input
                type="text"
                placeholder='Search'
                className='outline-none ml-2'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button
              type="submit"
              className='items-center p-2 mt-5 mb-5 w-[100%] bg-[#1B3735] text-white font-bold'
              onClick={handleSearch}>
              Tìm kiếm
            </button>

            {/* Filter */}
            <div className='leading-10'>
              {filterType.map((name, index) => (
                <div>
                <div
                  style={FilterHover}
                  className={`flex rounded-[7px] ${selectedCategory === name ? 'bg-gray-200' : ''}`}
                  key={index}
                >
                  <p
                    className={`w-[95%] pl-2 font-bold ${selectedCategory === name ? 'text-16' : ''}`}
                    onClick={() => {
                      if (selectedCategory === name) {
                        setSelectedCategory('');
                        setIsCategorySelected(false);
                      } else {
                        setSelectedCategory(name);
                        setIsCategorySelected(true);
                      }
                    }}
                  >
                    {name}
                  </p>
                  {selectedCategory === name ? (
                  <PiCheckBold size={25} className='mt-2 mr-2' />
                  ) : (
                  <PiPlusBold size={25} className='mt-2 mr-2' />
                  )}
                </div>
                  <hr className='border-black border-1 mt-5 mb-5' />
                </div>
              ))}
            </div>

            {/* BlogNews */}
            <div className='hidden lg:block'>
              <div className='items-center p-2 mt-5 w-[100%] bg-[#1B3735] text-white text-center font-bold'>
                Bài viết mới nhất
              </div>
              <br />
              {blogNews.map((post, index) => (
                <div key={index} className='mb-10'>
                  <a href={post.url}>
                    <div className='bg-[#CAFFD661] pb-2'>
                      <div className='article-card__image'>
                        <a href={post.url}>
                          <img width={1500} src={post.imageUrl} alt={post.heading} />
                        </a>
                      </div>
                      <div className='article-card__copy p-2 text-justify'>
                        <h5 className='article-card__pre-heading'>
                          <a href={post.url} className='italic'>{post.category}</a>
                        </h5>
                        <h4 className='article-card__heading'>
                          <a href={post.url} className='font-bold text-16 text-center '>{post.heading}</a>
                        </h4>
                        <p className='article-card__excerpt'>
                          <span className='article-card__excerpt-copy'>{post.excerpt}</span>
                          <a href={post.url} className='text-yellow-500'>Đọc thêm</a>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className='xl:w-[60%] lg:w-[60%] lg:ml-[2%] ml-[5%] lg:mr-[3%] mr-[5%] xl:text-16 md:text-14'>
          {currentPosts.map((blog, index) => (
            <a key={index} href={blog.url}>
              <div className='md:flex bg-[#F9FFD7] mb-10'>
                <div className='article-card__image max-h-56 min-w-0'>
                  <img className='w-[100%] h-[100%] max-w-[400px] object-cover' src={blog.imageUrl} alt={blog.heading} />
                </div>
                <div className='article-card__copy p-5 text-justify xl:w-[63%] w-[100%]'>
                  <h5 className='article-card__pre-heading italic'>{blog.category}</h5>
                  <h4 className='article-card__heading font-bold text-20'>{blog.heading}
                  </h4>
                  <p className='article-card__excerpt xl:max-h-24 lg:max-h-20 max-h-24 overflow-hidden overflow-ellipsis'>
                    <span className='article-card__excerpt-copy'>{blog.excerpt}</span>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Buttons */}
      {totalPages > 1 && (
        <div className='xl:text-22 lg:text-20 font-bold space-x-5 justify-center flex'>
          <a href="#" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <button>
              <PiArrowCircleLeftFill className='xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px]'></PiArrowCircleLeftFill>
            </button>
          </a>
          {[...Array(totalPages)].map((_, index) => (
            <a href="#" key={index} onClick={() => handlePageChange(index + 1)}>
              <button className={`className='border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]' ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}>
                {index + 1}
              </button>
            </a>
          ))}
          <a href="#" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <button>
              <PiArrowCircleRightFill className='xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px]'></PiArrowCircleRightFill>
            </button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Blogs;
