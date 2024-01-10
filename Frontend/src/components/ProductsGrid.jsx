import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PiGridFourFill, PiListBold, PiPlusBold } from 'react-icons/pi';
import Card from './Card';

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/';

function ProductsGrid(group) {
  const sortOptions = [{ name: 'Giá', value: 'price' }, { name: 'Tên', value: 'name' }, { name: 'Thương hiệu', value: 'brand' }];
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState(sortOptions[0].value);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (group.id) {
      const url = window.location.href;
      const isBrand = url.includes('brand');
      const isCategory = url.includes('category');
      let path = '';

      if (isBrand) {
        path = `${API}products-by-brand/${group.id}`;
      }else if (isCategory) {
        path = `${API}products-by-category/${group.id}`;
      }

      axios.get(path)
        .then((res) => {
          setProducts(res.data);
          res.data.product.forEach((product) => {
            product.current_price = product.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          });
          console.log(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    else {
      axios.get(`${API}/products`)
        .then((res) => {
          setProducts(res.data);
          res.data.product.forEach((product) => {
            product.current_price = product.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          });
          console.log(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });}
  }, []);

  const renderFilterSection = (title) => (
    <div className="my-3 flex justify-between">
      <p className="text-l">{title}</p>
      <PiPlusBold className="w-6 h6" />
    </div>
  );

  const handleSort = () => {

  };

  // handle when filter by price, brand, category, etc.
  const handleFilter = () => {
    
  };

  const handleGridView = () => {
  };

  const handleListView = () => {
  };

  return (
    <div className="mt-10 flex font-nunito">
      <div className="mt-5 mx-0 md:mx-10 w-full flex justify-between">
        <div className="w-[20%] mt-20">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <p className="text-2xl font-bold"></p>
            </div>

            <div className="flex">
              <div className="w-10/12 type-sort">
              {sortOptions.map((option) => (
                renderFilterSection(option.name)
                // action when click on each option -> handleSort
              ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80%]">
          <div className="flex flex-col mb-10">
            <div className="mb-10 flex justify-between items-center">
              <p className="text-xl font-bold uppercase">Tất cả sản phẩm</p>

              <div className="flex items-center justify-center">
                <p className="text-l">Sắp xếp theo: &nbsp;</p>
                <select className="text-l" onChange={handleFilter}>
                  <option value="price">Giá</option>
                  <option value="name">Category</option>
                  <option value="brand">Thương hiệu</option>
                </select>
              </div>

              <div className="flex">
                <PiGridFourFill
                  className="h-8 w-8"
                  color="#DA3E1A"
                  onClick={handleGridView}
                />
                &nbsp;&nbsp;
                <PiListBold
                  className="h-8 w-8"
                  onClick={handleListView}
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <div key={product.product_id} className='w-full'>
                  <Card className="" id={product.product_id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsGrid;