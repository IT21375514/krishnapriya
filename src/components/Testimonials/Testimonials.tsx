import { Button, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// components
import { SwiperSlider2 } from 'components/sliders';

// dummy data
import { slides } from 'components/sliders/data';

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="section py-3 py-sm-6 bg-gradient4 position-relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="600"
        >
            {/* <div className="divider top d-none d-sm-block"></div> */}
            <Container className="testimonials-3">
                <Row className="align-items-center">
                    <Col>
                        <h1 className="display-4 fw-bold">Words from Art Enthusiasts</h1>
                    </Col>
                    <Col xs="auto" className="text-sm-end pt-2 pt-sm-0">
                        <div className="navigations">
                            <Button variant="link" className="text-normal p-0 swiper-custom-prev">
                                <FeatherIcon icon="arrow-left" className="icon-dual-primary" />
                            </Button>
                            <Button variant="link" className="text-normal p-0 swiper-custom-next">
                                <FeatherIcon icon="arrow-right" className="icon-dual-primary" />
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3 mt-sm-5">
                    <Col>
                        <div className="slider">
                            <SwiperSlider2 slides={slides} hasLogo />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
