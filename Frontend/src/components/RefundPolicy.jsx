import React from 'react';

function RefundPolicy() {
    const list = {
        marginTop: '8px',
        marginBottom: '8px',
        textAlign: 'justify'
    }
    return (
        <main className='font-nunito'>
            <div className=' w-[90%] mx-auto py-10'>
                <center className='text-30 font-bold'>CHÍNH SÁCH ĐỔI TRẢ</center>
            </div>
            <div className='bg-[#ECFAFF] w-[77%] mb-[500px] mx-auto'>
                <ul style={{ listStyleType: 'disc' }} className='p-10 lg:px-20'>
                    <li style={list} className='lg:text-18 text-16'>Mong muốn của Gakki là bạn hài lòng với sản phẩm bạn đã chọn mua. Chính sách đổi trả này nêu rõ mọi thủ tục cần thiết nếu bạn đổi ý sau khi mua hàng. Chính sách này khác với Chính sách Bảo Hành - hỗ trợ bạn khi sản phẩm gặp vấn đề/ bị hư hỏng không mong muốn trong quá trình sản xuất.</li>
                    <li style={list} className='lg:text-18 text-16'>Nếu không hài lòng với sản phẩm, bạn có thể hoàn hàng và đổi lấy một sản phẩm mới có giá trị tương đương hoặc cao hơn.</li>
                    <li style={list} className='lg:text-18 text-16'>Để hoàn hàng, vui lòng truy cập trang Liên Hệ để gửi yêu cầu hoàn hàng trong vòng 14 ngày sau khi đơn hàng hoàn tất vận chuyển; bạn cần cung cấp giấy tờ chứng minh bạn đã mua hàng (bản copy hóa đơn mua hàng) của sản phẩm muốn hoàn, và đội ngũ nhân viên của chúng tôi sẽ liên lạc với bạn để hỗ trợ và hướng dẫn các bước tiếp theo. Chúng tôi sẽ hoàn tiền qua thẻ Credit hoặc chuyển khoản ngân hàng. Việc chuyển khoản ngân hàng sẽ mất khoảng 14 ngày làm việc.</li>
                    <li style={list} className='lg:text-18 text-16'>Theo chính sách của công ty, Gakki có thể tính phí hoàn kho lên đến 8% giá trị sản phẩm khi bạn hoàn hàng.</li>
                    <li style={list} className='lg:text-18 text-16'>Ngoài ra, bạn sẽ phải chịu phí chuyển hoàn (nếu có) liên quan đến việc đổi, trả sản phẩm. Để giảm tối đa chi phí vận chuyển, bạn có thể mang sản phẩm muốn hoàn đến cửa hàng vật lý của Gakki.</li>
                    <li style={list} className='lg:text-18 text-16'>Mọi sản phẩm sẽ phải được hoàn trong tình trạng mới và nguyên vẹn, không có dấu hiệu hao mòn hoặc đã qua sử dụng, không bị trầy xước, không có dấu hiệu bị rơi, va đập và không có bất kỳ hư hao nào khác. Sản phẩm hoàn về sẽ phải bao gồm tất cả bao bì gốc, nhãn (labels), stickers, seal (con dấu), sách hướng dẫn, phụ kiện và mọi chi tiết của sản phẩm phải còn nguyên vẹn, chưa được tháo ra, chưa được đụng đến.</li>
                    <li style={list} className='lg:text-18 text-16'>Chính Sách đổi trả này không áp dụng cho những sản phẩm được giảm giá khi mua, vì những sản phẩm nói trên đã được bán nguyên trạng.</li>
                </ul>
            </div>

        </main>
    )
}

export default RefundPolicy;