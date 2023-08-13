import PostCard from '../components/PostCard/PostCard';
import './index.scss';

function News() {
    const item = [
        {
        image: "https://res.cloudinary.com/dipiauw0v/image/upload/v1691845344/DATN/phau_thuat-18_06_58_183_ibgsoe.jpg",
        title: "Cảnh báo hóc dị vật vào phổi khi nuốt dị vật",
        subtitle: "Hóc dị vật là một trong những hiện tượng khá điển hình trong cuộc sống. Hầu hết các tình huống hóc không nhiều nguy hiểm, và có thể được xử lý tại chỗ",
        author: "Nguyễn Thị Cẩm Tú",
        date: "08/08/2023",
    },
    {
        image: "https://res.cloudinary.com/dipiauw0v/image/upload/v1691845344/DATN/phau_thuat-18_06_58_183_ibgsoe.jpg",
        title: "Cảnh báo hóc dị vật vào phổi khi nuốt dị vật",
        subtitle: "Hóc dị vật là một trong những hiện tượng khá điển hình trong cuộc sống. Hầu hết các tình huống hóc không nhiều nguy hiểm, và có thể được xử lý tại chỗ",
        author: "Nguyễn Thị Cẩm Tú",
        date: "08/08/2023",
    },
    {
        image: "https://res.cloudinary.com/dipiauw0v/image/upload/v1691845344/DATN/phau_thuat-18_06_58_183_ibgsoe.jpg",
        title: "Cảnh báo hóc dị vật vào phổi khi nuốt dị vật",
        subtitle: "Hóc dị vật là một trong những hiện tượng khá điển hình trong cuộc sống. Hầu hết các tình huống hóc không nhiều nguy hiểm, và có thể được xử lý tại chỗ",
        author: "Nguyễn Thị Cẩm Tú",
        date: "08/08/2023",
    },
    {
        image: "https://res.cloudinary.com/dipiauw0v/image/upload/v1691845344/DATN/phau_thuat-18_06_58_183_ibgsoe.jpg",
        title: "Cảnh báo hóc dị vật vào phổi khi nuốt dị vật",
        subtitle: "Hóc dị vật là một trong những hiện tượng khá điển hình trong cuộc sống. Hầu hết các tình huống hóc không nhiều nguy hiểm, và có thể được xử lý tại chỗ",
        author: "Nguyễn Thị Cẩm Tú",
        date: "08/08/2023",
    },
]

    return (
        <div className="container-fluid py-5 about-content">
            <div className="container">
                <div className="row gx-5"
                    style={{flexFlow: "wrap", gap: "5%"}}
                >
                    {
                        item.map((item) => (
                            <PostCard
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