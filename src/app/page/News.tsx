import PostCard from '../components/PostCard/PostCard';
import { newsPosts } from '../mockdata';
import './index.scss';

function News() {

    return (
        <div className="container-fluid py-5 about-content">
            <div className="container">
                <div className="row gx-5"
                    style={{flexFlow: "wrap", gap: "5%"}}
                >
                    {
                        newsPosts.map((item) => (
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