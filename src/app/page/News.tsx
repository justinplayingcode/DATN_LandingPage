import PostCard from '../components/PostCard/PostCard';
import { newsPosts } from '../mockdata';
import './index.scss';

function News() {
    const item = [
        {
            id: "1",
            image: "https://res.cloudinary.com/dipiauw0v/image/upload/v1691845344/DATN/phau_thuat-18_06_58_183_ibgsoe.jpg",
            title: "Cảnh báo hóc dị vật vào phổi khi nuốt dị vật",
            subtitle: "Thường bắt nguồn từ việc dị vật nằm chắn ngang đường thở. Hoặc, trong tình huống khác, dị vật gây nên tình trạng áp xe, phù nề. Điều này cũng khiến đường thở của người bệnh bị chèn ép, gây khó thở, thậm chí là tắc thở. Ở tình huống dị vật rơi trực tiếp vào khu vực phổi ngay khi bị nuốt vào, người bệnh có thể đối mặt với tình huống khó thở, ngưng thở, thậm chí cần cấp cứu và xử lý sơ cứu. Trong tình huống này, những người xung quanh cần nhanh chóng nhận định tình hình và hỗ trợ khai thông đường thở để bệnh nhân bảo toàn tính mạng.  Ngoài ra, tùy từng trường hợp và ảnh hưởng của dị vật với cơ thể mà sẽ có những biểu hiện khác nhau liên quan đến vấn đề dị vật trong phổi. Tuy nhiên, tình trạng này kèm nhiều nguy hiểm. Do đó, không nên chủ quan và lần lữa trong việc khám bệnh khi nghi ngờ có dị vật phổi. Đặc biệt, nên đến các cơ sở y tế chuyên khoa Tai Mũi Họng để kiểm tra nhằm đảm bảo tình huống hóc dị vật được xử lý đúng cách, phù hợp, không để lại hậu quả và biến chứng.",
            author: "Nguyễn Thị Cẩm Tú",
            date: "08/08/2023",
        },
        {
            id: "2",
            image: "https://cdn.tuoitre.vn/471584752817336320/2023/1/6/bien-the-covid-afp-1673001252228482624375.jpg",
            title: "Bộ Y tế đề nghị tiếp tục giải trình tự gene, kịp thời phát hiện biến thể COVID-19 mới",
            subtitle: "Ngày 9-8, Tổng giám đốc WHO Tedros Adhanom Ghebreyesus cho biết tổ chức này đang theo dõi một số biến thể SARS-CoV-2 mới. Biến thể này là EG.5, đang lan rộng ở Mỹ và Vương quốc Anh, được nhận định là một dòng phụ của Omicron. Tại Việt Nam, những ngày qua số ca mắc COVID-19 không có nhiều biến động, mỗi ngày ghi nhận dưới 100 ca mắc mới. Tuy nhiên, trước tình hình diễn biến dịch COVID-19 tại các quốc gia trên thế giới, Bộ Y tế cũng vừa có công văn gửi UBND các tỉnh, thành.",
            author: "Bộ y tế",
            date: "14/08/2023 ",
        },
        {
            id: "3",
            image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/8/13/xet-nghiem-sxh-6read-only-16919434146771332266908.jpg",
            title: "9 loại thực phẩm cần cho người bệnh sốt xuất huyết mau phục hồi",
            subtitle: "Những dấu hiệu đặc trưng của bệnh sốt xuất huyết: sốt cao đột ngột và liên tục, đau đầu, đau cơ, đau quanh hốc mắt, nổi các chấm đỏ (chấm xuất huyết) trên da, da đỏ sung huyết.   Trong giai đoạn nguy hiểm, từ ngày thứ 3 đến ngày thứ 7 của đợt bệnh, người bệnh có thể xuất hiện các triệu chứng như: đau bụng, lừ đừ, li bì, gan to, nôn ói nhiều, chảy máu chân răng, chảy máu cam, xuất huyết đường tiêu hóa.Một số ít bệnh nhân có thể rơi vào trường hợp nặng: tụt huyết áp, suy cơ quan(thận, gan, não...), xuất huyết nặng. Dưới đây là 9 loại thực phẩm cần cho người bệnh sốt xuất huyết mau phục hồi sức khỏe",
            author: "Lê Thị Mỹ Châu",
            date: "14/08/2023",
        },
        {
            id: "4",
            image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/8/13/dsc04641-16919205313381090425980.jpg",
            title: "Tổn thương nhiều chức năng cơ thể vì thuốc giảm cân thần tốc",
            subtitle: "Thuốc giảm cân là một sự lựa chọn tối ưu với nhiều chị em bởi chi phí rẻ, có thể tự thực hiện tại nhà không tốn quá nhiều thời gian và theo lời quảng cáo trên mạng là 'hiệu quả vượt trội'. Chính vì thế nhiều chị em đã sa chân vào 'ma trận thuốc giảm cân' và nhiều người đã gặp những hậu quả đáng tiếc cho sức khỏe kéo dài. Vì vậy, người thừa cân béo phì nên được sự tham vấn của bác sĩ chuyên khoa trong việc sử dụng các loại thuốc, thực phẩm chức năng giảm cân tránh để ảnh hưởng đến sức khỏe', bác sĩ Tuấn khuyến cáo.",
            author: "Hà Linh",
            date: "14/08/2023",
        },
        {
            id: "5",
            image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/8/13/z36720388715468b8735eba30aa8e38f519db7e1efa5fe-1-4read-only-16919434146791953691322.jpg",
            title: "Hà Nội 'nóng' nhất nước về sốt xuất huyết, mỗi tuần gần 500 ca",
            subtitle: "Bốn tuần gần đây, toàn thành phố Hà Nội ghi nhận số ca mắc sốt xuất huyết tăng cấp kỳ. Cụ thể, mỗi tuần ghi nhận gần 500 ca mắc, tăng 4,3 lần so với trung bình 4 tuần trước đó. Trung tâm Kiểm soát bệnh tật (CDC) Hà Nội dự báo tình hình dịch sốt xuất huyết trên địa bàn Hà Nội sẽ diễn biến phức tạp trong thời gian tới do dịch đến sớm hơn so với hằng năm. Chúng tôi dự báo trong thời gian tới sẽ có nguy cơ rất cao bùng phát các đợt dịch. Nhiều ca bệnh nặng. ",
            author: "Đinh Thu Trang",
            date: "14/08/2023",
        },
        {
            id: "6",
            image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/7/20/anh-1-tcm-6read-only-1689866361291307198411.jpg",
            title: "Bệnh tay chân miệng tiến sát đỉnh dịch, sốt xuất huyết cũng tăng",
            subtitle: "Trẻ mắc bệnh tay chân miệng đang tăng nhanh tại nhiều địa phương trên cả nước. Riêng TP.HCM, bệnh đã tiến sát đỉnh dịch, số ca tuần gần nhất tăng gấp 2,5 lần so với trung bình tháng trước. Có nhiều trẻ mắc bệnh tay chân miệng chuyển biến nặng, số ít mắc đồng nhiễm, bội nhiễm. Trong khi đó tại Hà Nội và nhiều tỉnh thành phía Bắc, sốt xuất huyết, tay chân miệng và thủy đậu cùng gia tăng.  Mắc bệnh tay chân miệng, thêm viêm phế quản Theo báo cáo của Trung tâm Kiểm soát bệnh tật TP.HCM, chỉ trong một tuần gần đây nhất, TP ghi nhận 1.614 ca mắc bệnh tay chân miệng, tăng gần 2,5 lần so với trung bình 4 tuần trước là 716 ca.  ", 
            author: "Diễm Châu",
            date: "14/08/2023",
        },
        {
            id: "7",
            image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/7/14/hinh-tay-chan-mieng-1-16893251150882122596337.jpg",
            title: "TP.HCM: Một tuần hơn 1.600 ca mắc bệnh tay chân miệng",
            subtitle: "Theo Trung tâm Kiểm soát bệnh tật TP.HCM (HCDC), bệnh tay chân miệng đang tăng nhanh. Chỉ trong một tuần gần đây nhất, cả TP.HCM đã ghi nhận 1.614 ca, tăng gần 2,5 lần so với trung bình 4 tuần trước là 716 ca. Chiều 14-7, theo Trung tâm Kiểm soát bệnh tật TP.HCM (HCDC), tính từ ngày 3 đến 9-7-2023 (tuần 27), số ca mắc, nhập viện do tay chân miệng đang tăng nhanh tại TP.HCM. Từ đầu năm đến tuần 27, TP.HCM ghi nhận các quận huyện có số mắc tay chân miệng trên 100.000 dân cao bao gồm quận Bình Tân, huyện Bình Chánh, quận Tân Phú, quận 6, quận 8.  ",
            author: "Mỹ Linh",
            date: "14/08/2023",
        },
        {
            id: "8",
            image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/8/12/do-ngot-16918201021151852596195.jpg",
            title: "Vì sao bệnh nhân ung thư không nên dùng đường?",
            subtitle: "Đường là 'kẻ thù' của béo phì, từ đó dẫn đến các bệnh ung thư và làm cho tế bào ung thư phát triển nhanh và khó kiểm soát hơn. Người bệnh sau đó dễ bị suy dinh dưỡng và chứng suy mòn. Không nên dùng đường khi bị ung thư Các bác sĩ Bệnh viện K (Hà Nội) cho biết đường là chất dinh dưỡng cần cho mọi tế bào trong cơ thể. Nhu cầu năng lượng của cơ thể chủ yếu lấy từ nhóm đường bột (60-70%), do vậy để duy trì sự sống của cơ thể thì người bệnh vẫn cần sử dụng đường bột trong chế độ ăn uống.  Việc dùng đường không phải là nguyên nhân trực tiếp dẫn đến bệnh lý ung thư. Tuy nhiên khi dùng vượt quá nhu cầu đường thì dẫn đến tăng nguy cơ thừa cân béo phì (nguy cơ này tăng lên 1,55 lần). Và thừa cân béo phì mới là nguyên nhân chính dẫn đến gia tăng 2-4 lần tỉ lệ các bệnh ung thư.  ",
            author: "Đào Tấn",
            date: "14/08/2023",
        },
        {
            id: "9",
            image: "https://static.tuoitre.vn/tto/i/s626/2016/09/22/hinh-7-1474537411.jpg",
            title: "Đồ ăn nhanh - thủ phạm gây bệnh về đường hô hấp",
            subtitle: "Đồ ăn nhanh - món khoái khẩu của trẻ em nhiều nước trên thế giới có thể là thủ phạm gây ra các bệnh hen suyễn, viêm da hay viêm mũi- màng kết. Đây là kết luận trong công trình nghiên cứu của các nhà khoa học New Zealand, được công bố trên tạp chí Thorax.", 
            author: "Đoàn Minh Giang", 
            date: "14/08/2023",
        },
        {
            id: "10",
            image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/7/31/base64-169076622084726686164.png",
            title: "Quên thuốc đái tháo đường cẩn thận nhiễm toan ceton",
            subtitle: "Nhiễm toan ceton là một trong những biến chứng nghiêm trọng của bệnh tiểu đường, có thể đe dọa tới tính mạng người bệnh. Vì vậy, bệnh nhân đái tháo đường cần chú ý tới các dấu hiệu của biến chứng này để kịp thời phát hiện và xử lý, tránh nguy cơ. Nguy kịch vì quên thuốc đái tháo đường  Bệnh nhân N.T.Q.V., 36 tuổi, ở Hà Nội, được chẩn đoán mắc đái tháo đường type 1 được 5 năm. Bệnh nhân đang điều trị tại tuyến huyện và được cho sử dụng thuốc tiêm insulin.  ",  
            author: "Sỹ Luân", 
            date: "14/08/2023",
        },
    ]

    return (
        <div className="container-fluid py-5 about-content">
            <div className="container">
                <div className="row gx-5"
                    style={{ flexFlow: "wrap", gap: "5%" }}
                >
                    {
                        newsPosts.map((item) => (
                            <PostCard
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                subtitle={item.subtitle}
                                author={item.author}
                                date={item.date}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default News;