import React, { Fragment } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Footer.css'



/** FooterLinks component
 * 
 * @param {object} props Data from footer.js
 * @returns 
 */
const FooterLinks = (props) => {

    return (
        <Fragment>
            <h5>{props.title}</h5>
            {/* ListGroup Component */}
            <ListGroup className="list_group">
                {
                    props.data.map((item, index) => {
                        return (
                            /* ListGroupItem */
                            <ListGroupItem key={index} className="list_item">
                                {/* Link component */}
                                <Link to={item.url}>{item.display}</Link>
                            </ListGroupItem>
                        )
                    })
                }
            </ListGroup>
        </Fragment>
    )
}

export default FooterLinks
