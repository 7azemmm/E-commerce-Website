import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import short from "../../images/shorts4.png";
import tshirt from "../../images/t-shirts16.png";
import jeans from "../../images/jean11.png";
import shirt from "../../images/shirt7.png";


const HomeCategory = () => {
    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title=" شورت" img={short} background="#F4DBA4" />
                <CategoryCard title="تيشيرت " img={tshirt} background="#F4DBA4" />
                <CategoryCard title=" جينز" img={jeans} background="#F4DBA4" />
                <CategoryCard title="شيرت " img={shirt} background="#F4DBA4" />
                
            </Row>
        </Container>
    )
}

export default HomeCategory
