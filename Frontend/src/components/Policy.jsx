import React from 'react';
import { useParams } from 'react-router-dom';

const termsOfService = {
    title: 'ĐIỀU KHOẢN DỊCH VỤ',
    content : [ {
        number: 1,
        subTitle: 'GIỚI THIỆU',
        terms: [
            "Bạn phải có độ tuổi từ 18 trở lên, hoặc đủ tuổi trưởng thành và thực hiện đa số các quyền hạn pháp lý khi sử dụng Website. Nếu bạn dưới 18 tuổi hoặc dưới độ tuổi thực thi các quyền hạn pháp lý, bạn phải có sự đồng ý từ phụ huynh hoặc người giám hộ hợp pháp, việc đồng ý Điều Khoản Sử Dụng của phụ huynh và đồng ý chịu trách nhiệm đối với:",
        ]
    },{
        number: 2,
        subTitle: 'TÀI KHOẢN',
        terms: [
            "Mỗi lượt đăng ký Tài khoản chỉ dành cho mỗi cá nhân người dùng. Gakki không cho phép bạn chia sẻ tên đăng nhập Tài khoản và/hoặc mật khẩu của bạn cho bất cứ ai khác trên hệ thống.",
            "Bạn sẽ chịu trách nhiệm cho tất cả việc sử dụng Tài khoản của mình và mọi hoạt động phát sinh từ Tài khoản đó dù hoạt động đó có được bạn uỷ quyền hay không. Bạn hoàn toàn chịu trách nhiệm duy trì tính bảo mật và bảo an tên đăng nhập và mật khẩu của bạn. Nếu bạn biết hoặc nghi ngờ người khác biết mật khẩu hoặc Tài khoản của bạn đã bị truy cập bởi người không được ủy quyền, bạn nên liên hệ với Gakki ngay lập tức và thay đổi mật khẩu trong thời gian sớm nhất có thể.",
            "Gakki có thể đình chỉ hoặc hủy đăng ký của bạn hoặc chấm dứt Tài khoản của bạn ngay lập tức theo quyết định khi : (a) bạn vi phạm nghĩa vụ trong Điều Khoản Sử Dụng này; (b) giao dịch thực hiện trên Tài khoản có thể là lừa đảo, bất hợp pháp hoặc mang yếu tố hình sự; hoặc (c) việc sử dụng Website hoặc Tài khoản của bạn cấu thành hành vi vi phạm luật pháp hoặc quy định hiện hành.",
            "Bạn có thể chấm dứt Tài khoản của mình bất cứ lúc nào bằng cách gửi thông báo cho Gakki bằng văn bản tới gakki.support@gmail.com. Tuy nhiên, trong thời gian đã chấm dứt Tài khoản nhưng chưa gửi thông báo và bạn tiếp tục sử dụng Website, Điều Khoản Sử Dụng này sẽ tiếp tục áp dụng cho bạn dù bạn không còn có Tài khoản."
        ]
    },{
        number: 3,
        subTitle: 'ĐẶT HÀNG',
        terms: [
            "Có nhiều cách thức và thông tin hướng dẫn đặt hàng xuyên suốt các nội dung của Website. Tất cả các đơn đặt hàng qua Website đều phải tuân theo Điều Khoản Sử Dụng được cập nhật mới nhất.",
            "Là một phần trong quy trình đặt hàng, bạn sẽ được kiểm tra đơn hàng và chỉnh sửa nếu có sai sót. Sau khi nhận được đơn hàng, Gakki sẽ gửi bạn mail thông báo đơn hàng thể hiện sản phẩm bạn đã mua. Xin lưu ý, email thông báo này không phải là xác nhận đơn hàng hoặc chấp nhận đơn hàng từ Gakki.",
            "Gakki chỉ chấp nhận đơn hàng khi đóng gói đơn hàng khi bạn đã thực hiện thanh toán, nếu không, Gakki sẽ thông báo đến bạn không chấp nhận đơn hàng hoặc bạn đã huỷ đơn hàng.",
            "Gakki sẽ không chấp nhận đơn hàng:(a) khi sản phẩm hết hàng;(b) khi chúng tôi không được uỷ quyền đối với thanh toán của bạn hoặc nghi ngờ gian lận;(c) khi xảy ra lỗi mô tả hoặc định giá sản phẩm; hoặc khi bạn không đáp ứng bất kỳ tiêu chí nào được nêu trong Điều Khoản Sử Dụng này.",
        ]
    },{
        number: 4,
        subTitle: 'ĐƠN GIÁ',
        terms: [
            "Các mặt hàng đều được tính theo đơn gía Việt Nam đồng và đã bao gồm các loại thuế (được áp dụng) đối với giá thành hiện tại nhưng không bao gồm phí vận chuyển và các phí khác."
        ]
    },{
        number: 5,
        subTitle: 'THANH TOÁN',
        terms: [
            "Gakki có thể cung cấp nhiều phương thức thanh toán khác nhau cho bạn và có thể thay đổi các phương thức thanh toán này bất cứ lúc nào. Bạn có thể xem các phương thức thanh toán hiện tại được chấp nhận tại đây.",
            "Để tránh việc gian lận khi thanh toán bằng các loại thẻ tín dụng, thẻ ghi nợ và các loại thẻ thanh toán khác, Gakki sẽ xác nhận tên, địa chỉ cùng các thông tin khác đã được cung cấp trong quá trình xử lý đơn hàng đối chiếu với ghi nhận thương mại hiện tại",
        ]
    },{
        number: 6,
        subTitle: 'GIAO HÀNG',
        terms:[
            "Hàng sẽ được giao tới địa chỉ khách hàng đã cung cấp khi mua sản phẩm. Phí vận chuyển và thời gian dự tính được đề cập trên trang giao hàng của Gakki và cũng hiển thị khi khách hàng đặt mua sản phẩm. Rủi ro mất hàng hoặc sản phẩm bị hư hại sẽ được thông báo đến khách hàng khi giao nhận hoặc vào ngày giao hàng đầu tiên Gakki chuyển hàng.",
        ]
    },{
        number: 7,
        subTitle: 'TRẢ HÀNG',
        terms:[
            "Trong trường hợp xảy ra hư hại khi khách nhận hàng, khách hàng vui lòng liên hệ với Gakki qua hộp thư: gakki.support@gmail.com"
        ]
    }]
}

const securityPolicy = {
    title: 'CHÍNH SÁCH BẢO MẬT',
    content : [{
        number: 1,
        subTitle: 'THU THẬP THÔNG TIN',
        terms: [
            "Thông Tin Cá Nhân: Gakki thu thập thông tin cá nhân từ bạn khi bạn đăng ký tài khoản, đặt hàng, hoặc tham gia các chương trình khuyến mãi.",
            "Thông Tin Tài Khoản: Bạn cần cung cấp thông tin tài khoản chính xác và duy trì nó để đảm bảo mua sắm trực tuyến dễ dàng và an toàn."
        ]
    },{
        number: 2,
        subTitle: 'SỬ DỤNG THÔNG TIN',
        terms: [
            "Xác Nhận Đơn Hàng: GAkki sử dụng thông tin cá nhân của bạn để xác nhận và xử lý đơn hàng của bạn.",
            "Liên Lạc: Gakki có thể sử dụng thông tin để liên lạc với bạn về đơn hàng, thông báo khuyến mãi, hoặc mục đích chăm sóc khách hàng khác."
        ]
    },{
        number: 3,
        subTitle: 'BẢO MẬT THÔNG TIN',
        terms: [
            "Bảo Mật Dữ Liệu: Gakki áp dụng biện pháp bảo mật cao để đảm bảo an toàn thông tin cá nhân của bạn.",
            "Không Chia Sẻ Thông Tin: Gakki cam kết không chia sẻ thông tin cá nhân của bạn với bên thứ ba mà không có sự đồng ý của bạn, trừ trường hợp được quy định bởi luật pháp."
        ]
    },{
        number: 4,
        subTitle: 'QUYỀN LỢI VÀ LỰA CHỌN CỦA NGƯỜI DÙNG',
        terms: [
            "Quyền Truy Cập và Sửa Đổi: Bạn có quyền truy cập và sửa đổi thông tin cá nhân của mình trong tài khoản cá nhân.",
            "Từ Chối Thông Báo Khuyến Mãi: Bạn có quyền từ chối nhận thông báo khuyến mãi từ Gakki bất kỳ lúc nào."
        ]
    },{
        number: 5,
        subTitle: 'COOKIE VÀ CÔNG NGHỆ THEO DÕI',
        terms: [
            "Cookie: Gakki sử dụng cookie để cải thiện trải nghiệm mua sắm của bạn. Bạn có thể tùy chỉnh cài đặt cookie trong trình duyệt của mình."
        ]
    }]
}

const warrantyPolicy = {
    title: 'CHÍNH SÁCH BẢO HÀNH',
    content : [{
        number: 1,
        subTitle: 'THỜI GIAN BẢO HÀNH',
        terms: [
            "Bảo Hành Sản Phẩm Mới: Tất cả sản phẩm mới mua từ Gakki được bảo hành trong khoảng thời gian [số tháng/năm] kể từ ngày mua.",
            "Bảo Hành Phụ Kiện và Linh Kiện: Phụ kiện và linh kiện đồng hành với sản phẩm chính cũng được bảo hành trong thời gian tương đương."
        ]
    },{
        number: 2,
        subTitle: 'ĐIỀU KIỆN BẢO HÀNH',
        terms: [
            "Hóa Đơn Mua Hàng: Để yêu cầu bảo hành, bạn cần có hóa đơn mua hàng gốc hoặc phiếu mua sắm đi kèm.",
            "Sản Phẩm Chưa Sửa Chữa: Bảo hành chỉ áp dụng cho sản phẩm chưa được sửa chữa hoặc thay đổi bởi bên thứ ba không được ủy quyền."
        ]
    },{
        number: 3,
        subTitle: 'PHẠM VI BẢO HÀNH',
        terms: [
            "Sửa Chữa hoặc Thay Thế: Trong thời gian bảo hành, Gakki sẽ sửa chữa hoặc thay thế các linh kiện bị lỗi miễn phí.",
            "Bảo Hành Toàn Diện: Chính sách bảo hành của Gakki bao gồm cả bảo hành toàn diện cho các lỗi kỹ thuật và chất lượng."
        ]
    },{
        number: 4,
        subTitle: 'NGOẠI LỆ BẢO HÀNH',
        terms: [
            "Lưu Ý Người Dùng: Bảo hành không bao gồm các trường hợp lỗi do sử dụng sai cách, hư hại; Mọi hư tổn do tiếp xúc quá nhiều với độ ẩm vượt mức, nhiệt độ, ánh sáng mặt trời hoặc khi sản phẩm không được bảo quản trong môi trường an toàn và thích hợp; Mọi khiếm khuyết trong sản phẩm liên quan đến việc đánh giá và ý kiến chủ quan về các đặc tính sản phẩm hoặc tính chất hạt nổi hoặc màu gỗ; Bất kỳ tổn thất thông thường đối với sản phẩm bao gồm nhưng không giới hạn về biến đổi màu sắc, phai màu hoặc hư tổn lớp phủ, dây đàn, bộ khoá, dắt cắm, điều chỉnh, nút chỉnh, loa, ống chân không, ăn mòn hoặc rỉ sét đối với phần cứng và lớp mạ;",
            "Sản Phẩm Hết Hạn Bảo Hành: Sau thời gian bảo hành, Gakki vẫn cung cấp dịch vụ sửa chữa và thay thế, nhưng phí có thể áp dụng."
        ]
    }
]
}

const refundPolicy = {
    title: 'CHÍNH SÁCH ĐỔI TRẢ',
    content : [{
        number: 1,
        subTitle: null,
        terms: [
            "Mong muốn của Gakki là bạn hài lòng với sản phẩm bạn đã chọn mua. Chính sách đổi trả này nêu rõ mọi thủ tục cần thiết nếu bạn đổi ý sau khi mua hàng. Chính sách này khác với Chính sách Bảo Hành - hỗ trợ bạn khi sản phẩm gặp vấn đề/ bị hư hỏng không mong muốn trong quá trình sản xuất.",
            "Nếu không hài lòng với sản phẩm, bạn có thể hoàn hàng và đổi lấy một sản phẩm mới có giá trị tương đương hoặc cao hơn.",
            "Để hoàn hàng, vui lòng truy cập trang Liên Hệ để gửi yêu cầu hoàn hàng trong vòng 14 ngày sau khi đơn hàng hoàn tất vận chuyển; bạn cần cung cấp giấy tờ chứng minh bạn đã mua hàng (bản copy hóa đơn mua hàng) của sản phẩm muốn hoàn, và đội ngũ nhân viên của chúng tôi sẽ liên lạc với bạn để hỗ trợ và hướng dẫn các bước tiếp theo. Chúng tôi sẽ hoàn tiền qua thẻ Credit hoặc chuyển khoản ngân hàng. Việc chuyển khoản ngân hàng sẽ mất khoảng 14 ngày làm việc.",
            "Theo chính sách của công ty, Gakki có thể tính phí hoàn kho lên đến 8% giá trị sản phẩm khi bạn hoàn hàng.",
            "Ngoài ra, bạn sẽ phải chịu phí chuyển hoàn (nếu có) liên quan đến việc đổi, trả sản phẩm. Để giảm tối đa chi phí vận chuyển, bạn có thể mang sản phẩm muốn hoàn đến cửa hàng vật lý của Gakki.",
            "Mọi sản phẩm sẽ phải được hoàn trong tình trạng mới và nguyên vẹn, không có dấu hiệu hao mòn hoặc đã qua sử dụng, không bị trầy xước, không có dấu hiệu bị rơi, va đập và không có bất kỳ hư hao nào khác. Sản phẩm hoàn về sẽ phải bao gồm tất cả bao bì gốc, nhãn (labels), stickers, seal (con dấu), sách hướng dẫn, phụ kiện và mọi chi tiết của sản phẩm phải còn nguyên vẹn, chưa được tháo ra, chưa được đụng đến.",
            "Chính Sách đổi trả này không áp dụng cho những sản phẩm được giảm giá khi mua, vì những sản phẩm nói trên đã được bán nguyên trạng."
        ]
    }]
}

const Policy = () =>{
    const { id } = useParams();
    let term;
    switch (parseInt(id)) {
        case 1:
          term = securityPolicy;
          break;
        case 2:
          term = warrantyPolicy;
          break;
        case 3:
          term = refundPolicy;
          break;
        default:
            term = termsOfService;
    }

    console.log(term);

    return (
    <main className='font-nunito w-full md:w-10/12 mx-auto'>
        <div className='py-10'>
        <center className='lg:text-30 text-26 font-bold'>{term.title}</center>
        </div>

        <div className='bg-[#ECFAFF] mx-auto mb-10 pb-10'>
        {term.content.map((section, index) => (
            <div key={index}>
            {section.subTitle && (
                <h3 className='p-10 pb-4 font-bold'>{section.number}. {section.subTitle}</h3>)}
            <ul className=' pl-20 pr-10'>
                {section.terms.map((term, termIndex) => (
                <li key={termIndex} className='xl:text-18 text-16'>
                    &nbsp; &nbsp; &nbsp; &nbsp;{term}
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    </main>
    );
};

export default Policy;