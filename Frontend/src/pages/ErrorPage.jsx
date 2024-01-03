import React from 'react';

function ErrorPage() {
  // after 15s, redirect to home page
  React.useEffect(() => {
    setTimeout(() => {
      window.location.href = '/';
    }, 5000);
  }, []);
  return (
    <section className="flex items-center h-screen p-16 bg-green-100 text-[#1B3735]">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-bold md:text-[100px] text-[60px] text-[#1B3735]">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-[18px] font-semibold md:text-[28px]">Xin lỗi, không thể tìm thấy trang này.</p>
          <p className="text-[18px] font-semibold md:text-[20px] pb-10">Chọn vào nút bên dưới hoặc chờ 5s để trở về trang chủ.</p>
          <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-[#1B3735] text-white">Trở về trang chủ</a>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
