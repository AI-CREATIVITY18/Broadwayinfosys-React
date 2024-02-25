import { Container,Row,Col,Carousel,Image } from "react-bootstrap"
import banner1 from "../../../assets/images/banner1.jpg"
import banner2 from "../../../assets/images/banner2.jpg"
import banner3 from "../../../assets/images/banner3.png"


const BannerComponent =() => {
    return(
        <>
         <Container fluid>
                <Row>
                    <Col sm={12} md={12}>
                        <Carousel>
                            <Carousel.Item>
                                <Image fluid src={banner1} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image fluid src={banner2} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image fluid src={banner3} />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default BannerComponent