import React from 'react';

function SecurityPolicy() {
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
                <center className='lg:text-30 text-26 font-bold'>CHÍNH SÁCH BẢO MẬT</center>
            </div>

            <div className='bg-[#ECFAFF] w-[77%] mb-[500px] mx-auto'>

                <h3 style={index} className='p-10 pb-0'>1. THU THẬP THÔNG TIN</h3>
                <ul style={{ listStyleType: 'disc' }} className=' pl-20 pr-10'>
                    <li style={list} className='xl:text-18 text-16'>Thông Tin Cá Nhân: Gakki thu thập thông tin cá nhân từ bạn khi bạn đăng ký tài khoản, đặt hàng, hoặc tham gia các chương trình khuyến mãi.</li>
                    <li style={list} className='xl:text-18 text-16'>Thông Tin Tài Khoản: Bạn cần cung cấp thông tin tài khoản chính xác và duy trì nó để đảm bảo mua sắm trực tuyến dễ dàng và an toàn.</li>
                </ul>

                <h3 style={index}>2. SỬ DỤNG THÔNG TIN</h3>
                <ul style={{ listStyleType: 'disc' }} className=' pl-20 pr-10'>
                    <li style={list} className='xl:text-18 text-16'>Xác Nhận Đơn Hàng: GAkki sử dụng thông tin cá nhân của bạn để xác nhận và xử lý đơn hàng của bạn.</li>
                    <li style={list} className='xl:text-18 text-16'>Liên Lạc: Gakki có thể sử dụng thông tin để liên lạc với bạn về đơn hàng, thông báo khuyến mãi, hoặc mục đích chăm sóc khách hàng khác.</li>
                </ul>

                <h3 style={index}>3. BẢO MẬT THÔNG TIN</h3>
                <ul style={{ listStyleType: 'disc' }} className=' pl-20 pr-10'>
                    <li style={list} className='xl:text-18 text-16'>Bảo Mật Dữ Liệu: Gakki áp dụng biện pháp bảo mật cao để đảm bảo an toàn thông tin cá nhân của bạn.</li>
                    <li style={list} className='xl:text-18 text-16'>Không Chia Sẻ Thông Tin: Gakki cam kết không chia sẻ thông tin cá nhân của bạn với bên thứ ba mà không có sự đồng ý của bạn, trừ trường hợp được quy định bởi luật pháp.</li>
                </ul>

                <h3 style={index}>4. QUYỀN LỢI VÀ LỰA CHỌN CỦA NGƯỜI DÙNG</h3>
                <ul style={{ listStyleType: 'disc' }} className=' pl-20 pr-10'>
                    <li style={list} className='xl:text-18 text-16'>Quyền Truy Cập và Sửa Đổi: Bạn có quyền truy cập và sửa đổi thông tin cá nhân của mình trong tài khoản cá nhân.</li>
                    <li style={list} className='xl:text-18 text-16'>Từ Chối Thông Báo Khuyến Mãi: Bạn có quyền từ chối nhận thông báo khuyến mãi từ Gakki bất kỳ lúc nào.</li>
                </ul>

                <h3 style={index}>5. COOKIE VÀ CÔNG NGHỆ THEO DÕI</h3>
                <ul style={{ listStyleType: 'disc' }} className='pb-10 pl-20 pr-10'>
                <li style={list} className='xl:text-18 text-16'>Cookie: Gakki sử dụng cookie để cải thiện trải nghiệm mua sắm của bạn. Bạn có thể tùy chỉnh cài đặt cookie trong trình duyệt của mình.</li>
                </ul>
            </div>
        </main>
    )
}

export default SecurityPolicy;