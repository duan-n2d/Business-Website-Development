import React from 'react';

function WarrantyPolicy() {
    const list = {
        marginTop: '8px',
        marginBottom: '8px',
        textAlign: 'justify',
    }

    const index = {
        fontSize: '20px',
        fontWeight: 'bold',
        paddingLeft: '40px'
    }
    return (
        <main className='font-nunito'>
            <div className=' w-[90%] mx-auto py-10'>
                <center className='lg:text-30 text-26 font-bold'>CHẾ ĐỘ BẢO HÀNH</center>
            </div>

            <div className='bg-[#ECFAFF] w-[77%] mb-[500px] mx-auto pb-10'>

                <h3 style={index} className='p-10 pb-0'>1. THỜI GIAN BẢO HÀNH</h3>
                <ul style={{ listStyleType: 'disc' }} className=' pl-20 pr-10'>
                    <li style={list} className='xl:text-18 text-16'>Bảo Hành Sản Phẩm Mới: Tất cả sản phẩm mới mua từ Gakki được bảo hành trong khoảng thời gian [số tháng/năm] kể từ ngày mua.</li>
                    <li style={list} className='xl:text-18 text-16'>Bảo Hành Phụ Kiện và Linh Kiện: Phụ kiện và linh kiện đồng hành với sản phẩm chính cũng được bảo hành trong thời gian tương đương.</li>
                </ul>

                <h3 style={index}>2. ĐIỀU KIỆN BẢO HÀNH</h3>
                <ul style={{ listStyleType: 'disc' }} className=' pl-20 pr-10'>
                    <li style={list} className='xl:text-18 text-16'>Hóa Đơn Mua Hàng: Để yêu cầu bảo hành, bạn cần có hóa đơn mua hàng gốc hoặc phiếu mua sắm đi kèm.</li>
                    <li style={list} className='xl:text-18 text-16'>Sản Phẩm Chưa Sửa Chữa: Bảo hành chỉ áp dụng cho sản phẩm chưa được sửa chữa hoặc thay đổi bởi bên thứ ba không được ủy quyền.</li>
                </ul>

                <h3 style={index}>3. PHẠM VI BẢO HÀNH</h3>
                <ul style={{ listStyleType: 'disc' }} className=' pl-20 pr-10'>
                    <li style={list} className='xl:text-18 text-16'>Sửa Chữa hoặc Thay Thế: Trong thời gian bảo hành, Gakki sẽ sửa chữa hoặc thay thế các linh kiện bị lỗi miễn phí.</li>
                    <li style={list} className='xl:text-18 text-16'>Bảo Hành Toàn Diện: Chính sách bảo hành của Gakki bao gồm cả bảo hành toàn diện cho các lỗi kỹ thuật và chất lượng.</li>
                </ul>

                <h3 style={index}>4. NGOẠI LỆ BẢO HÀNH</h3>
                <ul style={{ listStyleType: 'disc' }} className=' pl-20 pr-10'>
                    <li style={list} className='xl:text-18 text-16'>Lưu Ý Người Dùng: Bảo hành không bao gồm các trường hợp lỗi do sử dụng sai cách, hư hại; Mọi hư tổn do tiếp xúc quá nhiều với độ ẩm vượt mức, nhiệt độ, ánh sáng mặt trời hoặc khi sản phẩm không được bảo quản trong môi trường an toàn và thích hợp; Mọi khiếm khuyết trong sản phẩm liên quan đến việc đánh giá và ý kiến chủ quan về các đặc tính sản phẩm hoặc tính chất hạt nổi hoặc màu gỗ; Bất kỳ tổn thất thông thường đối với sản phẩm bao gồm nhưng không giới hạn về biến đổi màu sắc, phai màu hoặc hư tổn lớp phủ, dây đàn, bộ khoá, dắt cắm, điều chỉnh, nút chỉnh, loa, ống chân không, ăn mòn hoặc rỉ sét đối với phần cứng và lớp mạ;</li>
                    <li style={list} className='xl:text-18 text-16'>Sản Phẩm Hết Hạn Bảo Hành: Sau thời gian bảo hành, Gakki vẫn cung cấp dịch vụ sửa chữa và thay thế, nhưng phí có thể áp dụng.</li>
                </ul>
            </div>
        </main>
    )
}

export default WarrantyPolicy;