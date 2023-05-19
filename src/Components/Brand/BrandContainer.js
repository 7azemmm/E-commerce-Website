import React from 'react'
import BrandCard from './BrandCard'
import brand1 from "../../images/zara.png";
import brand2 from "../../images/puma.png";
import brand3 from "../../images/nike.png";
import brand4 from "../../images/adidas.png";
import brand5 from "../../images/gucci.png";
import brand6 from "../../images/armani.png";
import brand7 from "../../images/hm.png";
import brand8 from "../../images/glamour.png";
import brand9 from "../../images/fashion.png";
import brand10 from "../../images/hrren.png";
import brand11 from "../../images/hollister.png";
import brand12 from "../../images/lorem.png";
import { Container, Row } from 'react-bootstrap';
const BrandContainer = () => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">كل الماركات</div>
            <Row className='my-1 d-flex justify-content-between'>
                <BrandCard img={brand1} />
                <BrandCard img={brand2} />
                <BrandCard img={brand3} />
                <BrandCard img={brand4} />
                <BrandCard img={brand5} />
                <BrandCard img={brand6} />
                <BrandCard img={brand7} />
                <BrandCard img={brand8} />
                <BrandCard img={brand9} />
                <BrandCard img={brand10} />
                <BrandCard img={brand11} />
                <BrandCard img={brand12} />
             

            </Row>
        </Container>
    )
}

export default BrandContainer
