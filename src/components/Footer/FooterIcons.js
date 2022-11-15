import React from 'react'
import { Link } from 'react-router-dom'



const FooterIcons = (props) => {

    return (
        <span>
            <Link to={props.redirect}>
                <i className={props.icon}></i>
            </Link>
        </span>
    )
}

export default FooterIcons
