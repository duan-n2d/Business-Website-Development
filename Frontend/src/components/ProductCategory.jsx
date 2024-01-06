import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const API = "http://localhost:5000/api/auth/";
// const API = "https://gakki.onrender.com/api/auth/";

function ProductCategory(header) {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get(`${API}products-by-category/${header.id}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    switch (header.id) {
      case "NEW":
        setTitle("Sản phẩm mới");
        break;
      case "HOT":
        setTitle("Sản phẩm bán chạy");
        break;
      default:
        setTitle("Sản phẩm");
    }
  }, [header.id]);

  return (
    <div className="font-nunito">
      <div className='pt-10 flex justify-center items-center'>
        <p className='font-bold uppercase text-[26px]'>{title}</p>
      </div>
      <div className='p-10 flex-column justify-center items-center'>
        <div className='w-full md:w-10/12 mx-auto grid grid-cols-4 gap-4'>
          {products.map((product) => (
            <div className='' key={product.product_id}>
              <Card className="mx-auto" id={product.product_id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
