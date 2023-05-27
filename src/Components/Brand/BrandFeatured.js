import React from 'react'
import { Container, Spinner, Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png";
import HomeBrandHook from '../../hook/brand/home-brand-hook'

const BrandFeatured = ({ title, btntitle }) => {

    const [brand, loading] = HomeBrandHook(); //responsible for fetching data related to brands for the home page.



    return (
        <Container>

        {/*Rendering the SubTiltle component with the provided title, btntitle, and pathText*/}
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
                {
                    loading === false ? (
                        brand.data ? (
                            brand.data.slice(0, 5).map((item, index) => {
                                return (<BrandCard key={index} img={item.image} />)
                            })
                        ) : <h4>لا يوجد ماركات</h4>
                    ) : <Spinner animation="border" variant="primary" />
                }
            </Row>



        </Container>
    )
}

export default BrandFeatured
