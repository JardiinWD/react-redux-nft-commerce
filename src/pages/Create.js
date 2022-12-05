import React, { Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Utils/Helmet'
import NftCard from '../components/UI/NftCard'
import img from '../../src/assets/images/img-01.jpg'
import avatar from '../../src/assets/images/ava-01.png'
import './styles/Create.css'


const item = {
    id: "01",
    title: "Travel Monkey Club",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img,
    creator: "Trista Francis",
    creatorImg: avatar,
    currentBid: 5.89,
}

const Create = () => {
    return (
        <Helmet title='Create'>
            {/* Fragment */}
            <Fragment>
                {/* CommonSection */}
                <CommonSection title='Create Item' />
                <section>
                    {/* Container */}
                    <Container>
                        {/* Row */}
                        <Row>
                            {/* lg='3' md='4' sm='6' */}
                            <Col lg='3' md='4' sm='6'>
                                <h5 className="mb-4 text-light">Preview Item</h5>
                                <NftCard item={item} />
                            </Col>
                            {/* lg='9' md='8' sm='6' */}
                            <Col lg='9' md='8' sm='6'>
                                {/* create_item */}
                                <div className="create_item">
                                    <form>
                                        {/* form_input */}
                                        <div className="form_input">
                                            <label htmlFor=''>Upload File</label>
                                            <input type="file" className="upload" />
                                        </div>
                                        {/* form_input */}
                                        <div className="form_input">
                                            <label htmlFor=''>Price</label>
                                            <input type="number" placeholder='Enter price for one item (ETH)' />
                                        </div>
                                        {/* form_input */}
                                        <div className="form_input">
                                            <label htmlFor=''>Minimum Bid</label>
                                            <input type="number" placeholder='Enter minimum bid' />
                                        </div>
                                        {/* d-flex align-items-center justify-content-between */}
                                        <div className="d-flex align-items-center justify-content-between">
                                            {/* form_input */}
                                            <div className="form_input w-50">
                                                <label htmlFor=''>Starting Date</label>
                                                <input type="date" />
                                            </div>
                                            {/* form_input */}
                                            <div className="form_input w-50">
                                                <label htmlFor=''>Expiration Date</label>
                                                <input type="date" />
                                            </div>
                                        </div>
                                        {/* form_input */}
                                        <div className="form_input">
                                            <label htmlFor=''>Title</label>
                                            <input type="text" placeholder='Enter title' />
                                        </div>
                                        {/* form_input */}
                                        <div className="form_input">
                                            <label htmlFor=''>Description</label>
                                            <textarea rows="7" placeholder='Enter Description' className="w-100"></textarea>
                                        </div>
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

export default Create
