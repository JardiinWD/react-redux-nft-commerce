import React, { Fragment, useRef } from 'react'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Utils/Helmet'


const Contact = () => {

    const nameRef = useRef('')
    const emailRef = useRef('')
    const subjectRef = useRef('')
    const messageRef = useRef('')

    const handlerSubmit = (e) => {
        // Preventing refresh
        e.preventDefault()
    }

    return (
        /* Helmet */
        <Helmet title='Contact'>
            <Fragment>
                {/* CommonSection */}
                <CommonSection title='Contact' />
                <section>
                    <Container>
                        <Row>
                            {/* lg='6' md='6' */}
                            <Col lg='6' md='6' className="m-auto text-center">
                                <h2>Drop a Message</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere eros sed sagittis pellentesque. Donec dapibus lectus turpis, vel facilisis.
                                </p>
                                {/* contact */}
                                <div className="contact mt-4">
                                    <form onSubmit={handlerSubmit}>
                                        {/* form_input */}
                                        <div className="form_input">
                                            <input type="text" placeholder='Enter your name' ref={nameRef} />
                                        </div>
                                        {/* form_input */}
                                        <div className="form_input">
                                            <input type="email" placeholder='Enter your email' ref={emailRef} />
                                        </div>
                                        {/* form_input */}
                                        <div className="form_input">
                                            <input type="text" placeholder='Enter subject' ref={subjectRef} />
                                        </div>
                                        {/* form_input */}
                                        <div className="form_input">
                                            <textarea rows="7" placeholder='Write Message' ref={messageRef}></textarea>
                                        </div>
                                        {/* send_btn */}
                                        <button className="send_btn" style={{ border: 'none', padding: '7px 25px', borderRadius: '5px', marginTop: '20px' }}>Send a Message</button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        </Helmet>
    )
}

export default Contact
