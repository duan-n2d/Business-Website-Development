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

function Blogs() {
  const blogNews = [
    {
      category: '#Bí kíp Produce',
      imageUrl: Blog2,
      heading: 'Xóa tạp âm khi thu',
      excerpt: 'Để mang đến âm thanh chuyên nghiệp và tinh tế, việc biết cách sử dụng công cụ...',
      link: '#',
    },
    {
      category: '#Bí kíp Produce',
      imageUrl: Blog4,
      heading: 'Kỹ thuật thu âm cần phải nhớ',
      excerpt: 'Hướng dẫn về cách nhận biết và giảm thiểu nhiễu trong quá trình thu âm...',
      link: '#',
    },

    {
      category: '#Kiến thức âm nhạc',
      imageUrl: Blog6,
      heading: 'Kỹ thuật Piano',
      excerpt: 'Cung cấp một cái nhìn tổng quan về các kỹ thuật cơ bản cần thiết cho người mới...',
      link: '#',
    },
  ]

  const blogPosts = [
    {
      category: '#Hướng dẫn chọn đàn',
      imageUrl: Blog1,
      heading: 'Mua đàn nào là tốt?',
      excerpt: 'Bạn mới bắt đầu học đàn và đang đối diện với thách thức lựa chọn loại đàn phù hợp? Bài viết này sẽ dẫn bạn qua một hành trình chi tiết để giúp bạn tìm ra cây đàn hoàn hảo cho mình.',
      link: '#',
    },
    {
      category: '#Bí kíp Produce',
      imageUrl: Blog2,
      heading: 'Xóa tạp âm khi thu',
      excerpt: 'Để mang đến âm thanh chuyên nghiệp và tinh tế, việc biết cách sử dụng công cụ chỉnh tạp âm là quan trọng. Bài viết này sẽ giới thiệu về các công cụ và kỹ thuật chỉnh tạp âm mà mọi người nên biết để nâng cao...',
      link: '#',
    },
    {
      category: '#Kiến thức âm nhạc',
      imageUrl: Blog3,
      heading: 'EQ là gì?',
      excerpt: 'Mỗi loại nhạc cụ đều có những đặc điểm âm thanh riêng biệt. Bài viết này sẽ phân tích cách sử dụng EQ để điều chỉnh và tối ưu hóa đặc tính âm thanh của từng loại nhạc cụ.',
      link: '#',
    },
    {
      category: '#Bí kíp Produce',
      imageUrl: Blog4,
      heading: 'Kỹ thuật thu âm cần phải nhớ',
      excerpt: 'Hướng dẫn về cách nhận biết và giảm thiểu nhiễu trong quá trình thu âm. Bài viết sẽ tập trung vào chiến lược phòng ngừa và cách xử lý hiệu quả các loại nhiễu âm từ môi trường xung quanh.',
      link: '#',
    },
    {
      category: '#Hướng dẫn chọn đàn',
      imageUrl: Blog5,
      heading: 'Nhạc cụ thịnh hành nhất năm 2023',
      excerpt: 'Liệt kê và phân tích những mẫu guitar nổi bật và được ưa chuộng nhất trong năm 2023, từ acoustic đến electric, để giúp người chơi và người yêu nhạc có cái nhìn tổng quan về xu hướng mới.',
      link: '#',
    },
    {
      category: '#Kiến thức âm nhạc',
      imageUrl: Blog6,
      heading: 'Kỹ thuật Piano',
      excerpt: 'Cung cấp một cái nhìn tổng quan về các kỹ thuật cơ bản cần thiết cho người mới bắt đầu học chơi piano. Bài viết sẽ bao gồm cách đặt tay, cách đọc nhạc, và những bước quan trọng trong việc xây dựng nền tảng cho sự phát triển về sau.',
      link: '#',
    },
    {
      category: '#Hướng dẫn chọn đàn',
      imageUrl: Blog7,
      heading: 'Quà 2023 cho Drummers',
      excerpt: 'Không cần tìm đâu xa để mua được món quà hợp gu cho mùa lễ hội 2023, dưới đây là bài viết hướng dẫn chọn mua trống do các chuyên gia nhiều kinh nghiệm của chúng tôi gợi ý.',
      link: '#',
    },
    {
      category: '#Hướng dẫn chọn đàn',
      imageUrl: Blog8,
      heading: 'Guitar Pedal Cho Tay Mơ',
      excerpt: 'Nhờ có pedal effect, âm sắc guitar sẽ được tô điểm bằng nhiều chi tiết cụ thể và bạn có thể bắt chước tiếng đàn của người nhạc sĩ bạn vẫn luôn thần tượng.',
      link: '#',
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
          {/* Part 1 */}
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
              {/* Filter Hướng dẫn chọn đàn */}
              <div style={FilterHover}
                className={`flex rounded-[7px] ${selectedCategory === '#Hướng dẫn chọn đàn' ? 'bg-gray-200' : ''}`}
              >
                <p
                  className={`w-[95%] pl-2 font-bold ${selectedCategory === '#Hướng dẫn chọn đàn' ? 'text-16' : ''}`}
                  onClick={() => {
                    if (selectedCategory === '#Hướng dẫn chọn đàn') {
                      setSelectedCategory('');
                      setIsCategorySelected(false);
                    } else {
                      setSelectedCategory('#Hướng dẫn chọn đàn');
                      setIsCategorySelected(true);
                    }
                  }}
                >
                  Hướng dẫn chọn đàn
                </p>
                {selectedCategory === '#Hướng dẫn chọn đàn' ? (
                  <PiCheckBold size={25} className='mt-2 mr-2' />
                ) : (
                  <PiPlusBold size={25} className='mt-2 mr-2' />
                )}
              </div>
              <hr className='border-black border-1 mt-5 mb-5' />

              {/* Filter Bí kíp Produce */}
              <div style={FilterHover}
                className={`flex rounded-[7px] ${selectedCategory === '#Bí kíp Produce' ? 'bg-gray-200' : ''}`}
              >
                <p
                  className={`w-[95%] pl-2 font-bold ${selectedCategory === '#Bí kíp Produce' ? 'text-16' : ''
                    }`}
                  onClick={() => {
                    if (selectedCategory === '#Bí kíp Produce') {
                      setSelectedCategory('');
                      setIsCategorySelected(false);
                    } else {
                      setSelectedCategory('#Bí kíp Produce');
                      setIsCategorySelected(true);
                    }
                  }}
                >
                  Bí kíp Produce
                </p>
                {selectedCategory === '#Bí kíp Produce' ? (
                  <PiCheckBold size={25} className='mt-2 mr-2' />
                ) : (
                  <PiPlusBold size={25} className='mt-2 mr-2' />
                )}
              </div>
              <hr className='border-black border-1 mt-5 mb-5' />

              {/* Filter Kiến thức âm nhạc */}
              <div style={FilterHover}
                className={`flex rounded-[7px] ${selectedCategory === '#Kiến thức âm nhạc' ? 'bg-gray-200' : ''}`}
              >
                <p
                  className={`w-[95%] pl-2 font-bold ${selectedCategory === '#Kiến thức âm nhạc' ? 'text-16' : ''
                    }`}
                  onClick={() => {
                    if (selectedCategory === '#Kiến thức âm nhạc') {
                      setSelectedCategory('');
                      setIsCategorySelected(false);
                    } else {
                      setSelectedCategory('#Kiến thức âm nhạc');
                      setIsCategorySelected(true);
                    }
                  }}
                >
                  Kiến thức âm nhạc
                </p>
                {selectedCategory === '#Kiến thức âm nhạc' ? (
                  <PiCheckBold size={25} className='mt-2 mr-2' />
                ) : (
                  <PiPlusBold size={25} className='mt-2 mr-2' />
                )}
              </div>
              <hr className='border-black border-1 mt-5 mb-5' />
            </div>

            {/* Part 2 */}
            <div className='hidden lg:block'>
              <div className='items-center p-2 mt-5 w-[100%] bg-[#1B3735] text-white text-center font-bold'>
                Bài viết mới nhất
              </div>
              <br />
              {blogNews.map((post, index) => (
                <div key={index} className='mb-10'>
                  <div className='bg-[#CAFFD661] pb-2'>
                    <div className='article-card__image'>
                      <a href={post.link}>
                        <img width={1500} src={post.imageUrl} alt={post.heading} />
                      </a>
                    </div>
                    <div className='article-card__copy p-2 text-justify'>
                      <h5 className='article-card__pre-heading'>
                        <a href={post.link} className='italic'>{post.category}</a>
                      </h5>
                      <h4 className='article-card__heading'>
                        <a href={post.link} className='font-bold text-16 text-center '>{post.heading}</a>
                      </h4>
                      <p className='article-card__excerpt'>
                        <span className='article-card__excerpt-copy'>{post.excerpt}</span>
                        <a href={post.link} className='text-yellow-500'>Đọc thêm</a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className='xl:w-[60%] lg:w-[60%] lg:ml-[2%] ml-[5%] lg:mr-[3%] mr-[5%] xl:text-16 md:text-14'>
          {currentPosts.map((blog, index) => (
            <a href={`/${blog.id}`}>
              <div key={index} className='md:flex bg-[#F9FFD7] mb-10'>
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
