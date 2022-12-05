import React, { Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import img from '../assets/images/undraw_page_not_found_re_e9o6.svg'


const ErrorPage = () => {
    return (
        <Fragment>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg='6' md='8' sm='12' className="p-4">
                        <img className="w-100 h-75 mt-5" src={img} alt="404" />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default ErrorPage