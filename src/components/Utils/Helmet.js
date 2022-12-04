import React from 'react'

const Helmet = (props) => {
    console.log(props);
    // Pages Name
    document.title = 'NFTs - ' + props.title

    return (
        <div style={{ width: '100%' }}>{props.children}</div>
    )
}

export default Helmet