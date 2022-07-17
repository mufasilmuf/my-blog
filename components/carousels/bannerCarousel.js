import Carousel from 'react-bootstrap/Carousel';

import bannerStyle from "./bannerCarousel.module.scss";
import BannerImage from "../../assets/banner1.jpg"

const BannerCarousel = (props) => {
    return (
        <div className={`container ${bannerStyle.banner_container}`}>
            <Carousel className={bannerStyle.banner_carousel_container}>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://media.istockphoto.com/vectors/set-of-summer-ice-cream-stickers-modern-flat-design-vector-id1396682421?b=1&k=20&m=1396682421&s=170667a&w=0&h=4JfWPXEBLJO307SXncln0kbBRWMWCsSDDijYClCReww=" alt="First slide" width="100%" height="500px" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://media.istockphoto.com/vectors/set-of-summer-ice-cream-stickers-modern-flat-design-vector-id1396682421?b=1&k=20&m=1396682421&s=170667a&w=0&h=4JfWPXEBLJO307SXncln0kbBRWMWCsSDDijYClCReww=" alt="First slide" width="100%" height="500px" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default BannerCarousel;