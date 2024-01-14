import React from 'react';
import { useParams } from 'react-router-dom';
import Blog1 from '../assets/blogs/Blog1.jpg'
import Blog2 from '../assets/blogs/Blog2.jpg'
import Blog3 from '../assets/blogs/Blog3.jpeg'
import Blog4 from '../assets/blogs/Blog4.jpg'
import Blog5 from '../assets/blogs/Blog5.jpg'
import Blog6 from '../assets/blogs/Blog6.jpg'
import Blog7 from '../assets/blogs/Blog7.jpg'
import Blog8 from '../assets/blogs/Blog8.jpg'


const API = 'https://gakki.onrender.com/api/auth/';

const blogDataDefault = [
  {
    "id": 1,
    "category": "Hướng dẫn chọn đàn",
    "title": "Quà 2023 Cho Guitarists",
    "author": "Nhân Võ",
    "date": "Thứ hai, 18 Tháng 12 Năm 2023 15:21 (GMT+7)",
    "content": [
      {
        type: 'img',
        src: Blog1,
        alt: 'Image Alt Text',
      },
      {
        type: 'p',
        text: 'Chúng ta thường nghe những câu như "tiền nào của nấy" hoặc "quá tốt để tin". Khi có đề xuất về việc mua một cây guitar giá rẻ, mà hứa hẹn mang lại nhiều giá trị hơn số tiền chúng ta chi trả, nhiều người có thể bắt đầu nghi ngờ về chất lượng thực sự của sản phẩm. Liệu đó có phải là sự thật không? Câu trả lời có thể không phải là không tốt. <br> Thật vậy, những cây guitar có giá phải chăng thường được làm từ những chất liệu có giá phải chăng. Từ loại gỗ được sử dụng để làm hardware đến electronics và lớp finish. Từ khoá “giá cả phải chăng” không có nghĩa đó là những cây đàn tồi. Thật ra, xét theo bản chất thì có nhiều nhạc cụ tuyệt vời. Đa số các công ty khổng lồ trong ngành công nghiệp guitar phụ thuộc vào chất lượng xuất sắc của những cây đàn tầm trung để giữ cho lợi nhuận tăng trưởng. Những thương hiệu này biết rằng không phải tất cả mọi người đều sẵn sàng vung ra một số tiền lớn ngay lập tức. Bằng cách tạo ra một cây guitar với giá phải chăng nhưng có chất lượng phù hợp, các nhà sản xuất hy vọng rằng bạn sẽ thích những gì bạn đang chơi để từ đó tiến lên những mẫu đàn cao cấp hơn của họ. Danh tiếng của các thương hiệu này thể hiện rõ nét ngay tại phân khúc đàn tầm trung nên họ không thể làm ra những cây guitar chỉ để bỏ đi. <br> Tuy nhiên, làm thế nào để các công ty có thể giảm chi phí sản xuất đàn mà vẫn đảm bảo chất lượng? Bí mật nằm ở công nghệ tự động (CNC). Bằng cách lập trình máy móc để thực hiện các công đoạn sản xuất, những nhà sản xuất có thể tạo ra nhạc cụ một cách nhanh chóng hơn. Do không có sự can thiệp của yếu tố con người, có rất ít hoặc thậm chí không có lỗi trong quá trình sản xuất cây đàn. Mỗi cây đàn trở thành một bản sao hoàn hảo về kích thước của phiên bản gốc, chính xác đến từng chi tiết như mong đợi. <br> Ngay cả khi bạn không còn phải suy nghĩ về việc chi trả một số lượng lớn tiền để sở hữu một cây đàn, một thách thức khác vẫn đặt ra: làm thế nào để chọn mua một cây đàn phù hợp. Thay vì chỉ xem xét giá cả và thông số kỹ thuật, hãy đơn giản là cầm nó lên, thử nghiệm và tự đặt câu hỏi: âm thanh của cây đàn này có tốt không? Nó có phù hợp với cái phong cách của bạn không? Có thể sử dụng trong thời gian dài không? Vì vậy, hãy thử nghiệm một số mẫu đàn và so sánh để tìm ra sự khác biệt giữa chúng. Khi bạn tìm thấy cây đàn mà bạn cảm thấy thoải mái và hài lòng, đó sẽ là \"đối tác\" lý tưởng của bạn.',
      }
    ]
  },
  {
    "id": 2,
    "category": "Bí kíp Produce",
    "title": "Neural DSP Quad Cortex Processor: Amplifier & Effects Modelling Thế Hệ Mới",
    "author": "Nhân Võ",
    "date": "Thứ hai, 18 Tháng 12 Năm 2023 15:21 (GMT+7)",
    "content": [
      {
        type: 'img',
        src: Blog2,
        alt: 'Image Alt Text',
      },
      {
        type: 'h1',
        text: '1. Sức mạnh vô song',
      },
      {
        type: 'p',
        text: 'Ngay khi vừa đập hộp thì trước mắt bạn sẽ hiện ra Quad Cortex - “công cụ floor modeller mạnh mẽ nhất thế giới”. Với công suất DSP chuyên sâu 2Ghz từ bộ xử lý Quad-Core SHARC, Quad Cortex có thể chạy đến bốn amp model và đồng thời nhiều hiệu ứng khác một cách liền mạch. Hoàn hảo để tạo layer và các tông âm khác biệt trong studio hoặc ngay trên sân khấu.',
      },
      {
        type: 'h1',
        text: '2. Vô vàn preset để khám phá vô tận',
      },
      {
        type: 'p',
        text: 'Công nghệ modelling tiên tiến được tích hợp trong Quad Cortex tái tạo những đặc tính âm sắc của nhiều loại amp, cabinet và effect với độ chân thực đáng kinh ngạc. Thư viện cực lớn với nhiều sound tiếng amp và effect từ những model nổi tiếng đến các thiết kế tiên phong, nhạc cụ này có mọi thứ cho tất cả mọi người. Thậm chí bạn có thể tạo chuỗi effect của riêng mình và thiết kế sound tiếng độc đáo cho nhiều dòng nhạc và lối chơi khác nhau. Dù bạn đang tìm kiếm chất âm clean hoài cổ, crunch hiện đại hoặc mọi thứ khác thì Quad Cortex có thể đáp ứng dễ dàng.',
      },
      {
        type: 'h1',
        text: '3. Neural capture',
      },
      {
        type: 'p',
        text: '\'Neural Capture\' là linh hồn của Quad Cortex. Nếu bạn đã có set-up amp và effect yêu thích của mình rồi mà muốn dùng một thiết bị nhỏ hơn với mục đích back up hoặc hậu cần thì Quad Cortex có khả năng bắt trọn tiếng amp và pedal của bạn một cách dễ dàng với độ trung thực cực kỳ cao. <br> Quad Cortex nhận dạng những đặc điểm âm sắc từ thiết bị của bạn bằng cách xâu chuỗi những chuyển động âm thanh từ amp, pedal hoặc cabinet của bạn. Khi Quad Cortex đã xác định và tái tạo xong tiếng nhạc cụ, bạn chỉ cần làm theo hướng dẫn hiển thị trên màn hình và lưu tiếng đã thu vào Capture ở mức level mong muốn. Tính năng Capture này có thể được sử dụng tại mọi thời điểm trong chuỗi tín hiệu ảo Quad Cortex. Bạn thậm chí có thể chia sẻ chúng lên các nền tảng trực tuyến để mọi người cùng sử dụng.',
      },
    ]
  },
  {
    "id": 3,
    "category": "Kiến thức âm nhạc",
    "title": "Cách Bảo Quản và Bảo Dưỡng Đàn Piano Đúng Cách",
    "author": "Duy Luận",
    "date": "Thứ hai, 18 Tháng 12 Năm 2023 15:21 (GMT+7)",
    "content": [
      {
        type: 'img',
        src: Blog3,
        alt: 'Image Alt Text',
      },
      {
        type: 'p',
        text: 'Việc bảo quản và bảo dưỡng đàn piano đúng cách là yếu tố quan trọng để đảm bảo rằng âm nhạc luôn phát ra với chất lượng tốt nhất. Trong bài viết này, chúng ta sẽ khám phá những bí quyết và thủ thuật hiệu quả để duy trì và bảo vệ đàn piano của bạn.',
      },
      {
        type: 'h1',
        text: '1. Định Kỳ Vệ Sinh và Lau Chùi:',
      },
      {
        type: 'p',
        text: 'Bước đầu tiên và quan trọng nhất là thực hiện định kỳ vệ sinh và lau chùi đàn piano. Môi trường sạch sẽ sẽ giúp bảo vệ các bộ phận như dây đàn, bánh xe và bàn phím khỏi bụi bẩn.',
      },
      {
        type: 'h1',
        text: '2. Kiểm Tra Độ Ẩm và Nhiệt Độ:',
      },
      {
        type: 'p',
        text: 'Đảm bảo rằng đàn piano được đặt trong môi trường ổn định về độ ẩm và nhiệt độ. Sự thay đổi nhanh chóng có thể ảnh hưởng đến cấu trúc gỗ và các linh kiện khác.',
      },
      {
        type: 'h1',
        text: '3. Điều Chỉnh Cao Độ Của Bàn Phím:',
      },
      {
        type: 'p',
        text: 'Kiểm tra và điều chỉnh độ cao của bàn phím để đảm bảo cảm giác chơi nhạc thoải mái nhất. Các nút không đều có thể ảnh hưởng đến hiệu suất và cảm giác khi chơi.',
      },
      {
        type: 'h1',
        text: '4. Bảo Dưỡng Dây Đàn:',
      },
      {
        type: 'p',
        text: 'Thực hiện việc kiểm tra và bảo dưỡng các dây đàn, đảm bảo chúng không bị đứt hoặc lạc hậu. Việc giữ dây đàn trong tình trạng tốt sẽ cải thiện chất lượng âm thanh.',
      },
      {
        type: 'h1',
        text: '5. Sử Dụng Bọc Đàn khi Không Sử Dụng:',
      },
      {
        type: 'p',
        text: 'Khi đàn piano không sử dụng, việc sử dụng bọc đàn sẽ bảo vệ nó khỏi bụi bẩn, ánh sáng trực tiếp và biến đổi khí tốt hơn.',
      },
      {
        type: 'h1',
        text: '6. Thuê Chuyên Gia Điều Chỉnh Đàn:',
      },
      {
        type: 'p',
        text: 'Định kỳ thuê một chuyên gia điều chỉnh đàn piano để đảm bảo cấu trúc và âm thanh luôn ổn định. Điều chỉnh đàn là quy trình cần thiết để duy trì chất lượng âm thanh tối ưu. <br> Bằng cách thực hiện những bước đơn giản nhưng hiệu quả này, bạn sẽ giữ cho đàn piano của mình trong tình trạng tốt nhất, từ đó tận hưởng âm nhạc trọn vẹn và lâu dài. Hãy đảm bảo rằng bạn đang áp dụng những phương pháp đúng để bảo quản và bảo dưỡng đàn piano một cách chuyên nghiệp.',
      },
    ]
  },
  {
    "id": 4,
    "category": "Bí kíp Produce",
    "title": "Kỹ thuật thu âm cần phải nhớ",
    "author": "Duy Luận",
    "date": "Thứ hai, 18 Tháng 12 Năm 2023 15:21 (GMT+7)",
    "content": [
      {
        type: 'img',
        src: Blog4,
        alt: 'Image Alt Text',
      },
      {
        type: 'p',
        text: 'Khi đi thu âm hay đến phòng thu âm, bạn đã  đã từng thắc mắc vì sao Kỹ Thuật Viên phòng thu lại yêu cầu hát lại nhiều lần 1 đoạn nào đó hay không?, vì khi đó bạn đã hát sai do mắc phải những lỗi như phát âm, ngữ điệu, hơi yếu…Bài viết này sẽ cung cấp kỹ thuật thu âm giúp bản thu âm của bạn chuyên nghiệp hơn cho. <br> Trước tiên bạn cần nắm vũng 5 kỹ thuật mà chúng tôi đưa ra ở dưới đây:',
      },
      {
        type: 'h1',
        text: '1. Phát âm rõ ràng:',
      },
      {
        type: 'p',
        text: 'Vậy để làm sao có thể phát âm rõ ràng đây?. Điều này không qua khó, ta phải tập đọc mỗi ngày  bằng cách đọc vài trang sách, đọc thật kỹ từng chữ đến khi nào ta nhập tâm đến nỗi trong khi nói chuyện bình thuờng ta cũng phát âm kỹ lưỡng từng chữ, thì khi đó mới được coi là thành công. Trường hợp khi nói chuyện với mọi người mà còn phát âm vội vã, chưa tròn chữ thì phải luyện tập tiếp.',
      },
      {
        type: 'h1',
        text: '2. Tạo ngữ điệu êm ái:',
      },
      {
        type: 'p',
        text: 'Ngữ điệu là sự trầm bỗng của các tiếng phối hợp với nhau, phù hợp đến mức nào đó với tình cảm và ý nghĩa cần biểu đạt. Ngữ điệu không đòi hỏi phải lả lướt như điệu nhạc, nhưng cũng rất cần sự êm ái. Một trong những cách để có một ngữ điệu êm ái là tập nói rồi ghi âm và nghe lại giọng nói của mình để tinh ý nhìn ra những độ cao chưa phù hợp. Ngoài ra thì việc thỉnh thoảng cất giọng hát một giai điệu yêu thích nào đó cũng là cách rất hiệu quả để luyện ngữ điệu.',
      },
      {
        type: 'h1',
        text: '3. Điều khiển được âm lượng và tốc độ nói của mình',
      },
      {
        type: 'p',
        text: 'Âm lượng khi nói: cách nói quá khẽ như người hụt hơi hoặc quá mạnh như người đang quát mắng đều không phù hợp và chưa đạt yêu cầu, bạn nên khống chế giọng nói với âm lượng vừa phải, đảm bảo nhả chữ rành rọt khúc chiết trong sáng. Khi luyện tập, bạn nên đứng trước gương cho dễ theo dõi chỉnh sửa ngôn ngữ cơ thể. Nếu muốn hạ thấp giọng thì trước hết phải điều chỉnh tâm trạng cho thật thoải mái, hoặc liên tưởng đến một số làn điệu quen thuộc. Ngoài ra bạn còn phải luyện tập cách nói chuyện tỉ tê hay gọi cách khác là nói thầm thì, “thì thầm với gió”, trong một đoạn có câu nói to cao giọng, có câu hạ thấp giọng thầm thì như gió thoảng, như vậy sẽ có tác dụng cuốn hút người nghe. <br> Tốc độ nói: Người nói nên tránh tiết tấu đều đều suốt từ đầu đến cuối. Phải có lúc nhanh hơn một chút, phải có lúc chậm hơn một chút, thậm chí có lúc ngưng hẳn để mọi người suy nghĩ. Tránh nói quá nhanh hoặc quá chậm. Nói nhanh quá làm cho người nghe phải tiếp nhận một lượng thông tin lớn trong một thời gian ngắn khiến cho não họ không xử lý, phân tích, đón nhận kịp, và khiến họ bị quá tải, nghe vài phút là mệt. Ngược lại, nói quá chậm cũng làm bộ não người nghe không cần phải làm việc nhiều, và cũng sinh buồn ngủ.Ta phải khéo điều chỉnh tốc độ sao cho vừa phải, đừng nhanh, nhưng cũng đừng rề rà quá.',
      },
      {
        type: 'h1',
        text: '4. Tạo sức truyền cảm:',
      },
      {
        type: 'p',
        text: 'Sự chân thành xuất phát từ bản thân người nói sẽ dần dần tạo nên âm sắc và tính truyền cảm. Theo Phật giáo, “Tính truyền cảm” trong giọng nói được tạo nên bằng lòng “Từ bi vị tha”. Người có trong tim lòng thương yêu muôn loài tự nhiên giọng nói sẽ truyền cảm. Đây là điều không thể làm khác đi được.Ai không có lòng từ mà chỉ muốn tập luyện để có âm sắc hay tự nhiên là điều không thể được.Khi có lòng từ ái vị tha, mặc dù chưa thể làm điều gì lợi ích cho mọi người, ta vẫn giữ gìn cẩn thận từng lời nói, cử chỉ để không làm người khác buồn. Khi tiếp xúc với ai, ta chỉ muốn người đó được vui vẻ hài lòng thoải mái. Hãy để ý so sánh, có những người sẵn sàng buông ra một câu làm đau lòng người khác, và một người ý tứ chỉ muốn nói những câu làm đẹp lòng người, rất chân thành. Tấm lòng chân thành muốn cho mọi người vui là nguyên nhân khiến cho ta có giọng nói truyền cảm. Chính vì vậy, người ta thường nói giọng nói biểu thị nội tâm.',
      },
      {
        type: 'h1',
        text: '5. Nguyên tắc vàng: Nói giọng bụng',
      },
      {
        type: 'p',
        text: 'Liệu bạn có biết rằng hầu như tất cả những người thành đạt, giàu có, những chính trị gia đều có kĩ thuật thu âm hay bằng âm phát ra từ trong bụng? Nói giọng bụng tức là lấy hơi thở từ cơ bụng. Người nói giọng bụng thì tiếng trầm và sâu lắng. Nhưng làm thế nào để có thể tập luyện được phương pháp nói giọng bụng?',
      },
    ]
  },
  {
    "id": 5,
    "category": "Hướng dẫn chọn đàn",
    "title": "Các mẫu guitar Fender chất lượng trong 2022",
    "author": "Thảo Nguyên",
    "date": "Thứ hai, 18 Tháng 12 Năm 2023 15:21 (GMT+7)",
    "content": [
      {
        type: 'img',
        src: Blog5,
        alt: 'Image Alt Text',
      },
      {
        type: 'p',
        text: 'Fender mang đến nhiều điều thú vị và hứng khởi cho năm 2022! Chú ý đặc biệt đến hướng phát triển của họ cho dòng guitar Telecaster, một biểu tượng trong thế giới nhạc cụ. Điều đó làm tăng sự hứng thú, đặc biệt là với sự xuất hiện của các mẫu đàn short-scale và những phụ kiện nhỏ hơn, Fender tiếp tục mang đến cho người chơi những sản phẩm độc đáo và đầy sáng tạo.',
      },
      {
        type: 'h1',
        text: '1. Limited Edition Super-Sonic Electric Guitar',
      },
      {
        type: 'p',
        text: 'Ban đầu, Super-Sonic xuất hiện như một phiên bản giới hạn thuộc dòng sản phẩm Squier Paranormal năm 2020. Tuy nhiên, khi được giới thiệu, mẫu guitar này nhanh chóng trở nên nổi tiếng đến mức Fender quyết định thêm nó vào dòng sản phẩm chính thức của mình. Quyết định này là khôn ngoan khi họ đã thay đổi vật liệu chế tạo, chuyển từ gỗ tonewood sang gỗ basswood, cần đàn bằng gỗ maple và mặt cần làm từ gỗ rosewood. Sự cải tiến còn nằm ở phần điện tử, với mỗi cây guitar được trang bị bộ pickup humbucker Dragster BB low-output để thêm sự rực rỡ và một chút grit vào âm thanh. Chất lượng cổ điển được thể hiện qua các chi tiết như bộ khoá cổ điển, tremolo sáu saddle đồng bộ và pickguard eggshell 3 lớp. Điều này kèm theo việc thể hiện tình yêu với thương hiệu Fender qua việc đặt logo Fender vuông vức trên đỉnh headstock.',
      },
      {
        type: 'h1',
        text: '2. FSR American Ultra Telecaster Electric Guitar',
      },
      {
        type: 'p',
        text: 'Như tên gọi, American Ultra tự hào là một trong những nhạc cụ có hiệu suất tốt nhất của thương hiệu này. Telecaster trong dòng sản phẩm này đặc biệt được ưa chuộng với bộ khoá Deluxe Locking, cần đàn kiểu "D" có finish satin và cạnh mặt cần bo tròn, giúp bạn có trải nghiệm chơi nhạc thoải mái trong thời gian dài. Bạn cũng sẽ tận hưởng âm thanh mạnh mẽ từ các pickup single-coil Ultra Noiseless Vintage. Việc kiểm soát chất âm của bạn trở nên dễ dàng với hệ thống chuyển đổi S-1 sáng tạo, mở ra nhiều kết hợp pickup mới bằng cách sử dụng chúng theo chuỗi hoặc song song.',
      },
      {
        type: 'h1',
        text: '3. Limited Edition F-Hole Telecaster Thinline Electric Guitar',
      },
      {
        type: 'p',
        text: 'Mẫu Telecaster hấp dẫn không thể chối từ đã tái xuất với một diện mạo lợi hại gấp đôi. Tên gọi "F-Holes" xuất phát từ việc logo "F" đặc trưng của Fender đã thay thế thiết kế cắt truyền thống. Điều này tạo ra một vẻ ngoài độc đáo, làm cho thân đàn từ gỗ ash với lớp finish polyester glossy trở nên thú vị hơn. Chất âm của nó cũng tuyệt vời, với các pickup Original Vintage Telecaster tại ngựa đàn và cần đàn, đảm bảo rằng Thinline vẫn giữ nguyên phần nền của Telecaster nhưng với một chút thay đổi để làm mới. Chất twang đặc trưng của Telecaster từ những năm 50 sẽ làm cho bạn phải ngạc nhiên.',
      },
    ]
  },
  {
    "id": 6,
    "category": "Kiến thức âm nhạc",
    "title": "Một số tiêu chí cần lưu ý khi chọn guitar cho người mới tập chơi",
    "author": "Thảo Nguyên",
    "date": "Thứ hai, 18 Tháng 12 Năm 2023 15:21 (GMT+7)",
    "content": [
      {
        type: 'img',
        src: Blog6,
        alt: 'Image Alt Text',
      },
      {
        type: 'h1',
        text: '1. Loại guitar',
      },
      {
        type: 'p',
        text: 'Có hai loại guitar phổ biến nhất hiện nay là guitar acoustic (guitar không cần khuếch đại âm thanh) và guitar điện (guitar cần khuếch đại âm thanh bằng loa). Mỗi loại guitar có những ưu và nhược điểm riêng, và phù hợp với những thể loại nhạc khác nhau. Nếu bạn thích chơi những bài hát nhẹ nhàng, trữ tình, hoặc muốn hát kèm theo guitar, bạn nên chọn guitar acoustic. Nếu bạn thích chơi những bài hát sôi động, rock, hoặc muốn biểu diễn trên sân khấu, bạn nên chọn guitar điện.',
      },
      {
        type: 'h1',
        text: '2. Kích thước và hình dạng',
      },
      {
        type: 'p',
        text: 'Kích thước và hình dạng của guitar ảnh hưởng đến cảm giác khi cầm và âm thanh của guitar. Nếu bạn có thân hình nhỏ nhắn, hoặc muốn mang theo guitar đi du lịch, bạn nên chọn những cây guitar có kích thước nhỏ gọn, như mini guitar hay travel guitar. Nếu bạn có thân hình lớn hơn, hoặc muốn có âm thanh to và rõ ràng, bạn nên chọn những cây guitar có kích thước lớn hơn, như dreadnought hay jumbo. Hình dạng của guitar cũng có nhiều loại khác nhau, như cutaway (guitar có phần góc cạnh ở phần thân dưới được cắt bớt để dễ bấm phím cao), archtop (guitar có mặt trước và sau cong), hay hollowbody (guitar điện có lỗ thoát âm).',
      },
      {
        type: 'h1',
        text: '3. Chất liệu',
      },
      {
        type: 'p',
        text: 'Chất liệu của guitar quyết định đến chất lượng âm thanh và độ bền của guitar. Các bộ phận quan trọng của guitar bao gồm: mặt trước (top), mặt sau và hai bên (back and sides), cần (neck), ngựa (bridge), và phím (fretboard). Mặt trước của guitar là bộ phận quan trọng nhất, vì nó là nơi rung động để tạo ra âm thanh. Các loại gỗ thông dụng cho mặt trước là spruce, cedar, mahogany hay maple. Mỗi loại gỗ có những đặc tính âm thanh khác nhau, ví dụ spruce cho âm thanh sáng và trong, cedar cho âm thanh ấm và mềm, mahogany cho âm thanh đậm và rõ ràng, maple cho âm thanh cân bằng và trung tính. Mặt sau và hai bên của guitar cũng ảnh hưởng đến âm thanh, nhưng không nhiều bằng mặt trước. Các loại gỗ thông dụng cho mặt sau và hai bên là rosewood, mahogany, maple hay ovangkol. Cần của guitar phải được làm từ gỗ chắc chắn và có độ cong vừa phải để dễ bấm và không bị lệch. Các loại gỗ thông dụng cho cần là mahogany, maple hay nato. Ngựa của guitar là nơi gắn dây và truyền động lực từ dây đến mặt trước. Các loại vật liệu thông dụng cho ngựa là gỗ, nhựa, xương hay kim loại. Phím của guitar là nơi bấm để tạo ra các nốt nhạc khác nhau. Các loại vật liệu thông dụng cho phím là gỗ, nhựa hay kim loại.',
      },
      {
        type: 'h1',
        text: '4. Giá cả',
      },
      {
        type: 'p',
        text: 'Giá cả của guitar phụ thuộc vào nhiều yếu tố, như thương hiệu, chất liệu, kỹ thuật sản xuất, và phụ kiện đi kèm. Nói chung, giá cả phản ánh chất lượng của guitar, nhưng không phải luôn luôn đúng. Bạn nên chọn guitar có giá cả phù hợp với khả năng tài chính của mình, và đồng thời đảm bảo chất lượng tốt nhất có thể. Một số thương hiệu guitar uy tín và phổ biến hiện nay là Yamaha, Fender, Taylor, Martin, Gibson, Ibanez, Epiphone, Cort, Takamine, và Washburn.',
      },
      {
        type: 'h1',
        text: '5. Thử trước khi mua',
      },
      {
        type: 'p',
        text: 'Đây là bước cuối cùng và quan trọng nhất khi chọn guitar. Bạn nên thử cầm và chơi guitar trước khi quyết định mua, để xem liệu bạn có thích âm thanh, cảm giác, và hình dạng của guitar hay không. Bạn nên thử nhiều cây guitar khác nhau để so sánh và lựa chọn. Nếu bạn không biết chơi guitar, bạn có thể nhờ người bạn hoặc người bán hàng chơi giúp bạn nghe. Bạn cũng nên kiểm tra kỹ các chi tiết của guitar, như độ căng của dây, độ cong của cần, độ cao của ngựa, độ bóng của gỗ, và sự hoàn thiện của các bộ phận. <br> <br> Hy vọng bài viết này sẽ giúp bạn có thêm kiến thức và kinh nghiệm để chọn cho mình một cây guitar ưng ý. Chúc bạn thành công và vui vẻ với guitar!',
      },
    ]
  },
  {
    "id": 7,
    "category": "Hướng dẫn chọn đàn",
    "title": "Lựa chọn mua guitar cũ hay mới khi vừa mới tập chơi đàn guitar ?",
    "author": "Duy Duẩn",
    "date": "Thứ hai, 18 Tháng 12 Năm 2023 15:21 (GMT+7)",
    "content": [
      {
        type: 'img',
        src: Blog7,
        alt: 'Image Alt Text',
      },
      {
        type: 'p',
        text: 'Nếu bạn là người mới bắt đầu học chơi đàn guitar, bạn có thể đang phân vân không biết nên mua guitar cũ hay mới. Đây là một câu hỏi khá phổ biến và không có câu trả lời đúng sai cho nó. Tuy nhiên, bạn có thể cân nhắc một số yếu tố sau để quyết định cho phù hợp với nhu cầu và túi tiền của mình.',
      },
      {
        type: 'h1',
        text: '1. Guitar cũ có những ưu điểm và nhược điểm gì ?',
      },
      {
        type: 'p',
        text: 'Ưu điểm: <br> - Giá rẻ hơn guitar mới, bạn có thể tiết kiệm được một khoản chi phí đáng kể. <br> - Đã được chơi qua nên âm thanh có thể ổn định và tròn hơn so với guitar mới. <br> - Có thể tìm được những cây guitar chất lượng cao của những thương hiệu nổi tiếng với giá hời. <br> Nhược điểm: <br> - Không biết được lịch sử sử dụng của guitar, có thể gặp phải những vấn đề về kỹ thuật như méo mó, cong cần, lỗi dây, lỗi pickup... <br> - Không có bảo hành hoặc bảo hành ngắn hạn, nếu gặp sự cố bạn sẽ phải tự chi trả chi phí sửa chữa. <br> - Không có nhiều lựa chọn về mẫu mã, màu sắc, kiểu dáng... bạn phải chấp nhận những gì có sẵn trên thị trường.',
      },
      {
        type: 'h1',
        text: '2. Guitar mới có những ưu điểm và nhược điểm gì?',
      },
      {
        type: 'p',
        text: 'Ưu điểm: <br> - Đảm bảo chất lượng và nguyên vẹn của guitar, không phải lo lắng về những hư hỏng tiềm ẩn. <br> - Có bảo hành dài hạn từ nhà sản xuất hoặc nhà phân phối, nếu có vấn đề bạn có thể yêu cầu đổi trả hoặc sửa chữa miễn phí. <br> - Có nhiều lựa chọn về mẫu mã, màu sắc, kiểu dáng... bạn có thể tùy ý chọn theo sở thích cá nhân. <br> Nhược điểm: <br> - Giá cao hơn guitar cũ, bạn sẽ phải bỏ ra nhiều tiền hơn để sở hữu một cây guitar mới. <br> - Âm thanh có thể chưa được tròn và ổn định, bạn sẽ phải chờ một thời gian để guitar "đóng" âm. <br> - Có thể mua phải hàng giả, hàng nhái, hàng kém chất lượng nếu không biết cách phân biệt. <br>  <br>  Vậy nên mua guitar cũ hay mới? <br> Như đã nói ở trên, không có câu trả lời chung cho câu hỏi này. Bạn nên xem xét nhu cầu, khả năng tài chính và mục tiêu học đàn của mình để quyết định. Nếu bạn chỉ muốn tập chơi đàn cho vui và không quan tâm nhiều đến chất lượng âm thanh, bạn có thể mua guitar cũ để tiết kiệm chi phí. Nếu bạn muốn học đàn nghiêm túc và mong muốn có một cây guitar tốt và bền, bạn nên mua guitar mới để đảm bảo quyền lợi. Dù sao, bạn cũng nên tham khảo ý kiến của những người có kinh nghiệm hoặc những chuyên gia về guitar để có được những lời khuyên hữu ích. <br> Hy vọng bài viết này sẽ giúp bạn có được những thông tin cần thiết để lựa chọn mua guitar cũ hay mới khi vừa mới tập chơi đàn guitar. Chúc bạn thành công và vui vẻ với sở thích âm nhạc của mình!',
      },
    ]
  },
  {
    "id": 8,
    "category": "Hướng dẫn chọn đàn",
    "title": "Keyboard nào là phù hợp cho người mới bắt đầu",
    "author": "Duy Duẩn",
    "date": "Thứ hai, 18 Tháng 12 Năm 2023 15:21 (GMT+7)",
    "content": [
      {
        type: 'img',
        src: Blog8,
        alt: 'Image Alt Text',
      },
      {
        type: 'p',
        text: 'Keyboard là một nhạc cụ rất linh hoạt, phù hợp cho cả những nhạc sĩ cần tính đa năng và pianist lão luyện muốn khám phá nhiều âm thanh. Sự linh hoạt của chúng làm cho keyboard trở thành lựa chọn tốt với giá hợp lý. Dù bạn là ai, từ người mới học nhạc đến người chơi piano kỳ cựu, thì sự phong phú trong các mô hình keyboard hiện đại sẽ đáp ứng được nhu cầu của bạn. Hãy tham khảo một số mẹo nhỏ để chọn đúng keyboard và tận hưởng âm nhạc một cách tối ưu.',
      },
      {
        type: 'h1',
        text: '1. Lựa chọn kích thước',
      },
      {
        type: 'p',
        text: 'Trước hết và quan trọng nhất, hãy cân nhắc kỹ về số lượng phím bạn cần trên keyboard, tức là bao nhiêu octave bạn thực sự sẽ sử dụng. Nếu bạn có hạn chế không gian hoặc chỉ muốn thử nghiệm một chút, thì bàn phím 32 hoặc 49 phím có thể là sự lựa chọn phù hợp. Kích thước nhỏ giúp bạn dễ dàng mang theo khắp nơi. <br> Nếu bạn muốn phát triển kỹ năng của mình hơn, có các phiên bản keyboard với 61, 73 hoặc thậm chí 88 phím để bạn có đủ không gian "chạy ngón." Việc điều khiển số lượng phím nhiều hơn không khó, và có nhiều phím hơn cũng đồng nghĩa với việc có nhiều octave hơn, mở rộng dải âm thanh. Điều này hữu ích khi bạn cần chạy qua nhiều quãng tám cho một số bản nhạc. Bạn sẽ không cảm thấy bị hạn chế và có thể chơi cùng ai đó nếu họ muốn tham gia cùng bạn.',
      },
      {
        type: 'h1',
        text: '2. Action phím và độ nhạy',
      },
      {
        type: 'p',
        text: 'Độ nhạy của phím đóng một vai trò quan trọng trong việc thêm sự đa dạng, cấu trúc, và cảm xúc vào bản nhạc của bạn. Trên bàn phím không động, các phím chỉ đơn giản là nút bấm, phù hợp cho những người đang tìm kiếm một nhạc cụ đơn giản. Ngược lại, trên bàn phím động, phím sẽ phản ứng theo áp lực nhấn giống như phím piano. Áp lực này là một phần của cơ chế tạo âm thanh. Khi bạn nhấn phím nhẹ, âm thanh phát ra sẽ nhỏ. Ngược lại, khi bạn nhấn mạnh hơn, âm thanh sẽ lớn hơn.',
      },
      {
        type: 'h1',
        text: '3. Khả năng kết nối',
      },
      {
        type: 'p',
        text: 'Chúng ta hiện đang sống trong thời đại kỹ thuật số, vì vậy không có gì ngạc nhiên khi nhiều bàn phím hiện đại tích hợp cổng MIDI để người chơi có thể kết nối với các phần mềm DAW mà họ yêu thích. Điều này có thể không phải là yếu tố quyết định đối với những nghệ sĩ chuyên nghiệp, nhưng đối với những người mới bắt đầu trong việc soạn nhạc, việc xem xét một bàn phím có khả năng kết nối với máy tính là điều quan trọng. Điều này giúp tránh tình trạng phải tìm mua một model mới hơn sau này, vì khả năng cập nhật phần mềm của nhạc cụ sẽ giúp bạn bắt kịp với các xu hướng mới. Một điều quan trọng khác là đầu ra âm thanh, vì vậy bạn cần đảm bảo rằng bạn đã chọn đúng cổng ra có thể kết nối với ampli và các thiết bị thu âm.',
      },
    ]
  },
];

function BlogDetail() {
  const { id } = useParams();
  const blogId = parseInt(id);
  const blogData = blogDataDefault.find(blog => blog.id === blogId) || blogDataDefault[0];
  const contentData = blogData.content;

  return (
    <div className='font-nunito flex flex-col'>
      {/* header */}
      <br />
      <br />
      <header className='font-inter text-20 text-center'>
        <span className='text-yellow-700 text-[20px]'>{blogData.category}</span> / {blogData.date}
      </header>
      <br />
      <h1 className='font-inter text-30 text-center font-bold'>{blogData.title}</h1><br /><br />

      {/* Render content dynamically */}
      <div className='w-full lg:w-[70%] mx-auto text-16 leading-8'>
        {contentData.map((content, index) => {
          switch (content.type) {
            case 'img':
              return (
                <center key={index}>
                  <img width={1000} src={content.src} alt={content.alt} className='my-5'/>
                </center>
              );
            case 'p':
              return <p key={index} className='text-justify' dangerouslySetInnerHTML={{ __html: content.text }} />;
            case 'h1':
              return <h1 key={index} className='text-yellow-700 text-3xl pb-5 pt-10 text-justify'>{content.text}</h1>;
            default:
              return null;
          }
        })}
      </div>

      {/* Footer */}
      <div className='lg:w-[70%] ml-[15%] mr-[15%] text-xl leading-8'>
        <div className='text-right p-10'>
          <p className='font-bold'>{blogData.author}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
