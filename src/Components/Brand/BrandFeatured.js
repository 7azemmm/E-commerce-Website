import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'
import brand1 from "../../images/zara.png";
import brand2 from "../../images/puma.png";
import brand3 from "../../images/nike.png";
import brand4 from "../../images/adidas.png";
import brand5 from "../../images/gucci.png";
import brand6 from "../../images/armani.png";

const BrandFeatured = ({ title, btntitle }) => {
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
                <BrandCard img={brand1} />
                <BrandCard img={brand2} />
                <BrandCard img={brand3} />
                <BrandCard img={brand4} />
                <BrandCard img={brand5} />
                <BrandCard img={brand6} />

            </Row>
        </Container>
    )
}

export default BrandFeatured
