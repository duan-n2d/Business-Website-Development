import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import { PiArrowCircleLeftFill, PiArrowCircleRightFill, PiPlusBold, PiCheckBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Blogs() {
  const blogNews = [
    {
      category: '#Hướng dẫn chọn đàn',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/03/Neural-DSP-Quad-ortex-Processor-Next-Generation-Amplifier-and-Effects-Modelling-banner@1200x630-480x252.jpg',
      heading: 'Có Nhiều Cái Khó Nói ',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit…',
      link: '#',
    },
    {
      category: '#Bí kíp Produce',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Content-creators-2023-banner@1200x630-480x252.jpg',
      heading: 'Take It Easy',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit…',
      link: '#',
    },

    {
      category: '#Kiến thức âm nhạc',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Keyboardists-2023-banner@1200x630-480x252.jpg',
      heading: 'Việt Nam Muôn Đời',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit…',
      link: '#',
    },
  ]

  const blogPosts = [
    {
      category: '#Hướng dẫn chọn đàn',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-banner@1200x630-480x252.jpg',
      heading: 'Có Nhiều Cái Khó Nói',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
    {
      category: '#Bí kíp Produce',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/03/Neural-DSP-Quad-ortex-Processor-Next-Generation-Amplifier-and-Effects-Modelling-banner@1200x630-480x252.jpg',
      heading: 'Take It Easy',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
    {
      category: '#Kiến thức âm nhạc',
      imageUrl: 'https://blog.sweelee.com/uploads/2022/08/WhatsApp-Image-2022-08-01-at-6.51.29-PM-480x252.jpeg',
      heading: 'Việt Nam Muôn Đời',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
    {
      category: '#Bí kíp Produce',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Content-creators-2023-banner@1200x630-480x252.jpg',
      heading: 'Trong Sương',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
    {
      category: '#Hướng dẫn chọn đàn',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-recording-musicians-2023-banner@1200x630-480x252.jpg',
      heading: 'Đầu Đường Xó Chợ',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
    {
      category: '#Kiến thức âm nhạc',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Keyboardists-2023-banner@1200x630-480x252.jpg',
      heading: 'Biên Giới Long Bình',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  const handleSearch = () => {
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
          {searchResults.map((post, index) => (
            <div key={index} className='md:flex bg-[#F9FFD7] mb-10'>
              <div className='article-card__image max-h-56 min-w-0'>
                <a href={post.link}>
                  <img className='w-[100%] h-[100%] object-cover' src={post.imageUrl} alt={post.heading} />
                </a>
              </div>
              <div className='article-card__copy p-5 text-justify xl:w-[63%] lg:w-[100%]'>
                <h5 className='article-card__pre-heading'>
                  <a href={post.link} className='italic'>{post.category}</a>
                </h5>
                <h4 className='article-card__heading'>
                  <a href={post.link} className='font-bold text-20'>{post.heading}</a>
                </h4>
                <p className='article-card__excerpt xl:max-h-24 lg:max-h-20 max-h-24 overflow-hidden overflow-ellipsis'>
                  <span className='article-card__excerpt-copy'>{post.excerpt}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className='xl:text-22 lg:text-20 font-bold space-x-5 justify-center flex'>
        <a href="#">
          <button>
            <PiArrowCircleLeftFill className='xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px]'></PiArrowCircleLeftFill>
          </button>
        </a>
        <a href="#">
          <button className='border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]'>1</button>
        </a>
        <a href="#">
          <button className='border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]'>2</button>
        </a>
        <a href="#">
          <button className='border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]'>3</button>
        </a>
        <a href="#">
          <button>
            <PiArrowCircleRightFill className='xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px]'></PiArrowCircleRightFill>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Blogs;
