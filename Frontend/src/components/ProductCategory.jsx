import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../components/Card';

const API = "http://localhost:5000/api/auth/";
// const API = "https://gakki.onrender.com/api/auth/";

const ProductCategory = (header) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(API + "/products-by-category/" + header.id);
                setData(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }
    , []);

    // get productIds from data
    const productIds = data?.map((item) => item.product_id);

    let title = "";

    switch (header.id) {
        case "NEW":
            
        title = "Sản phẩm mới";
            break;
        case "HOT":
            
        title = "Sản phẩm bán chạy";
            break;
        default:
            title = "Sản phẩm";
    }

  return (
    <div className="font-nunito">
      <div className='pt-10 flex justify-center items-center'>
        <p className='font-bold uppercase text-[26px]'>{title}</p>
      </div>
      <div className='p-10 flex-column justify-center items-center'>
        <div className='w-full md:w-10/12 mx-auto grid grid-cols-4 gap-4'>
            {productIds?.map((id) => (
                <div className='' key={id}>
                    <Card className="mx-auto" id={id} />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;