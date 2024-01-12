import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "../assets/carrt/guitar.png";
import Image2 from "../assets/aboutus/hinh2.png";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

function Checkout() {
  const user_id = localStorage.getItem("user_id");
  const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  const [u_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [dOB, setDOB] = useState("");
  const [specific_address, setSpecificAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");
  const [voucher, setVoucher] = useState("");

  useEffect(() => {
    axios.get(`${API}/user/${user_id}`)
    .then((res) => {
      // u_name = res.data.user.first_name + ' ' + res.data.user.last_name
      setUserName(res.data.user.first_name + ' ' + res.data.user.last_name)
      setEmail(res.data.user.email)
      setPhoneNumber(res.data.user.phone_number)
      setDOB(res.data.user.dOB)
      setSpecificAddress(res.data.user.specific_address)
      setCity(res.data.user.city)
      setDistrict(res.data.user.district)
      setWard(res.data.user.ward)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  const totalPrice = localStorage.getItem('totalPrice') ? JSON.parse(localStorage.getItem('totalPrice')) : 0
  var discount = 0;
  var shippingFee = 100000;

  var total = totalPrice - discount + shippingFee;

  // const []

  // alert Success
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('cart')
    localStorage.removeItem('totalPrice')
    alert("Đặt hàng thành công")
    window.location.href = "/";
  } 

  const handleVoucher = (e) => {
    e.preventDefault();
    alert("Voucher không hợp lệ")
  };

  const handleChangePaymentMethod = (e) => {
    setPayment(e.target.value);
  }

  const handleChangeDeliveryMethod = (e) => {
    setDelivery(e.target.value);
  }

  return (
    <>
      <div className="fixed font-nunito right-0 z-50 top-0 w-full  bg-green-50 shadow-md">
        <Header />
        <NavBar />
      </div>
      <div className="flex justify-between items-center font-nunito">
        <div className="w-full sm:w-10/12 mx-auto font-nunito">
          <Header />
          <div className="my-6 flex justify-between items-center font-nunito">
            <div className="mx-auto">
              <p className="uppercase gakki-h2">Thông tin giao hàng</p>
            </div>
          </div>

          {/*Content*/}
          <form onSubmit={handleSubmit} className="flex justify-between">
            {/*Column 1*/}
            <div className="w-full md:w-7/12 justify-between items-center">
              <div className="user-information">
                <div className="bg-[#F3FFF1] rounded-[10px]">
                  <p className="px-8 py-3 gakki-h4">Thông tin khách hàng</p>
                </div>

                <div className="my-6 bg-[#ECFAFF] rounded-[10px]">
                  <div className="px-8 py-3 justify-between items-center">
                    <div className="w-full my-3 flex">
                      <label className="gakki-h5 w-1/3 font-bold">
                        Họ và tên
                      </label>
                      <input
                        className="gakki-input w-2/3 py-1 focus:outline-none focus:shadow-outline px-4 block appearance-none"
                        type="text"
                        placeholder={u_name}
                      />
                    </div>

                    <div className="w-full mb-3 flex">
                      <label className="gakki-h5 w-1/3 font-bold">
                        Ngày sinh
                      </label>
                      <input
                        className="gakki-input w-2/3 py-1 focus:outline-none focus:shadow-outline px-4 block appearance-none"
                        type="date"
                        placeholder={dOB}
                      />
                    </div>

                    <div className="w-full mb-3 flex">
                      <label className="gakki-h5 w-1/3 font-bold">
                        Số điện thoại
                      </label>
                      <input
                        className="gakki-input w-2/3 py-1 focus:outline-none focus:shadow-outline px-4 block appearance-none"
                        type="text"
                        placeholder={phone_number}
                      />
                    </div>

                    <div className="w-full mb-3 flex">
                      <label className="gakki-h5 w-1/3 font-bold">Email</label>
                      <input
                        className="gakki-input w-2/3 py-1 focus:outline-none focus:shadow-outline px-4 block appearance-none"
                        type="email"
                        placeholder={email}
                      />
                    </div>

                    <div className="w-full mb-3 flex">
                      <label className="gakki-h5 w-1/3 font-bold">
                        Địa chỉ
                      </label>
                      <div className="w-2/3">
                        <div className="w-full mb-3 flex">
                          <input
                            className="gakki-input w-1/2 py-1 focus:outline-none focus:shadow-outline px-4 block appearance-none mr-2"
                            type="text"
                            placeholder={specific_address||"Số nhà, tên đường, địa chỉ cụ thể"}
                          />
                          {/* List box: city */}
                          <select
                            className="gakki-input w-1/2 ml-2 px-3 py-1 focus:outline-none focus:shadow-outline"
                            name="city"
                            id="city"
                          >
                            <option value="">Tỉnh/Thành phố</option>
                          </select>
                        </div>
                        <div className="w-full flex">
                          <select
                            className="gakki-input w-1/2 mr-2 px-3 py-1 focus:outline-none focus:shadow-outline"
                            name="district"
                            id="district"
                          >
                            <option value="">Quận/Huyện</option>
                          </select>
                          <select
                            className="gakki-input w-1/2 ml-2 px-3 py-1 focus:outline-none focus:shadow-outline"
                            name="ward"
                            id="ward"
                          >
                            <option value="">Phường/Xã</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="delivery-information">
                <div className="bg-[#F3FFF1] rounded-[10px]">
                  <p className="px-8 py-3 gakki-h4">Phương thức giao hàng</p>
                </div>

                <div className="my-6 bg-[#ECFAFF] rounded-[10px]">
                  <div className="px-8 py-3">
                    <label htmlFor="fast">
                      <input
                        type="radio"
                        id="fast"
                        name="delivery"
                        value="fast"
                        checked={delivery === 'fast'}
                        onChange={handleChangeDeliveryMethod}
                      />
                      &nbsp; Giao hàng nhanh
                    </label>
                  </div>

                  <div className="px-8 py-3">
                    <label htmlFor="normal">
                      <input
                        type="radio"
                        id="normal"
                        name="delivery"
                        value="normal"
                        checked={delivery === 'normal'}
                        onChange={handleChangeDeliveryMethod}
                      />
                      &nbsp; Giao hàng tiết kiệm
                    </label>
                  </div>
                </div>
              </div>

              <div className="payment-information">
                <div className="bg-[#F3FFF1] rounded-[10px]">
                  <p className="px-8 py-3 gakki-h4">Thông tin thanh toán</p>
                </div>

                <div className="my-6 bg-[#ECFAFF] rounded-[10px]">
                  <div className="px-8 py-3">
                    <label htmlFor="cash">
                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        value="cash"
                        checked={payment === 'cash'}
                        onChange={handleChangePaymentMethod}
                      />
                      &nbsp; Thanh toán khi nhận hàng
                    </label>
                  </div>

                  <div className="px-8 py-3">
                    <label htmlFor="online">
                      <input
                        type="radio"
                        id="online"
                        name="payment"
                        value="online"
                        checked={payment === 'online'}
                        onChange={handleChangePaymentMethod}
                      />
                      &nbsp; Thanh toán online
                    </label>
                  </div>

                  <div className="px-8 py-3">
                    <label htmlFor="atm">
                      <input
                        type="radio"
                        id="atm"
                        name="payment"
                        value="atm"
                        checked={payment === 'atm'}
                        onChange={handleChangePaymentMethod}
                      />
                      &nbsp; Chuyển khoản ATM
                    </label>
                  </div>
                </div>
            </div>
            </div>

            {/*Column 2*/}
            <div className="w-full md:w-4/12 justify-between items-center">
              <img src={Image2}></img>

              <div className="order-information bg-[#F3FFF1] py-2 px-5 rounded-[10px]">
                <div className="pb-2 flex justify-between items-center">
                  <p className="gakki-h4 mx-auto">Thông tin đơn hàng</p>
                </div>
                <hr className="h-0.5 bg-neutral-200" />
                { cart.map((item, index) => (
                  <div key={index} className="my-3 flex justify-between items-center">
                    <div className="w-1/5">
                      <img src={item.image}></img>
                    </div>
                    <div className="w-4/5 pl-5">
                      <div className="produtc-name">
                        <p className="gakki-h5">{item.name}</p>
                      </div>

                      <div className="w-full flex justify-between items-center">
                        <div className="w-1/2">
                          <p className="quantity">Số lượng: {item.quantity}</p>
                        </div>
                        <div className="w-1/2 pr-5">
                          <p className="price">{item.price} VND</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <hr className="h-0.5 bg-neutral-200" />

                <div className="my-3 flex justify-between items-center">
                  <div className="vouchers w-7/12 justify-between items-center">
                    <div className="bg-white">
                      <input
                        className="focus:outline-none focus:shadow-outline py-2 px-4 block w-full appearance-none"
                        type="text"
                        placeholder="Mã giảm giá"
                      />
                    </div>
                  </div>
                  <div className="action 5/12">
                    <div className="bg-white">
                      <button
                        className="py-2 md:px-10 sm:px-6 px-4 w-full"
                        onClick={handleVoucher}
                      >
                        Áp dụng
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full my-2 px-4 flex justify-between items-center">
                  <div className="w-7/12">
                    <p className="gakki-h5">Giá trị đơn hàng :</p>
                  </div>
                  <div className="w-5/12 text-right">
                    <p className="gakki-h5 pr-5">{totalPrice} VND</p>
                  </div>
                </div>

                <div className="w-full my-2 px-4 flex justify-between items-center">
                  <div className="w-7/12">
                    <p className="gakki-h5">Giảm giá :</p>
                  </div>
                  <div className="w-5/12 text-right">
                    <p className="gakki-h5 pr-5">- {discount} VND</p>
                  </div>
                </div>

                <div className="w-full my-2 px-4 flex justify-between items-center">
                  <div className="w-7/12">
                    <p className="gakki-h5">Phí vận chuyển :</p>
                  </div>
                  <div className="w-5/12 text-right">
                    <p className="gakki-h5 pr-5">{shippingFee} VND</p>
                  </div>
                </div>
                <hr className="h-0.5 bg-neutral-200" />

                <div className="w-full my-2 px-4 flex font-bold justify-between items-center">
                  <div className="w-7/12">
                    <p className="gakki-h5 text-red-600">Tổng cộng</p>
                  </div>
                  <div className="w-5/12 text-right">
                    <p className="gakki-h5 pr-5">{total} VND</p>
                  </div>
                </div>

                <div className="my-5 w-1/2 mx-auto flex justify-between items-center bg-amber-100 border-2 border-green-900 rounded-[10px] text-[#0F4A1D] hover:bg-[#0F4A1D] hover:text-white">
                  <button
                    className="my-3 gakki-button mx-auto font-bold "
                    type="submit"
                  >
                    Hoàn tất đơn hàng
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
