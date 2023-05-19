import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import page from '../../images/section-page.png'
const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
                <Col sm="6">
                    <div className="discount-title">
                        خصم يصل حتي ٣٠٪ علي   التيرشتات
                    </div>
                </Col>
                <Col sm="6">
                    <img className="dicount-img" src={page} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection
