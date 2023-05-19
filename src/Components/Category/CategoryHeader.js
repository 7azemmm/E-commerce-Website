import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

const CategoryHeader = () => {
    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">الكل</div>
            <div className="cat-text-header">شورت</div>
            <div className="cat-text-header">تيشيرت</div>
            <div className="cat-text-header"> شيرت</div>
            <div className="cat-text-header">جينز</div>
            <div className="cat-text-header">هودي</div>
            <div className="cat-text-header">المزيد</div>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CategoryHeader
