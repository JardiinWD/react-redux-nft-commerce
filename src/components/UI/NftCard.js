import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/NftCard.css'
import Modal from './Modal'

const NftCard = (props) => {
    // Destructuring of props
    const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item

    const [showModal, setShowModal] = useState(false)

    return (
        /* single_nft_card */
        <div key={id} className="single_nft_card">
            {/* nft_img */}
            <div className="nft_img" >
                <img src={imgUrl} alt="" className="w-100" />
            </div >
            {/* nft_content */}
            <div className="nft_content">
                {/* nft_title */}
                <h5 className="nft_title fw-bold">
                    <Link to={`/market/${id}`}>{title}</Link>
                </h5 >
                {/* creator_info */}
                < div className="creator_info-wrapper d-flex gap-3">
                    {/* creator_img */}
                    <div className="creator_img" >
                        <img src={creatorImg} alt="Avatar User" className="w-100" />
                    </div >
                    {/* creator_info */}
                    <div className='creator_info w-100 d-flex align-items-center justify-content-between'>
                        {/* Created By */}
                        <div>
                            <h6>Created by</h6>
                            <p>{creator}</p>
                        </div >
                        {/* Current Bid */}
                        <div>
                            <h6>Current Bid</h6>
                            <p>{currentBid} ETH</p>
                        </div>
                    </div>
                </div >
                {/* Bid Button */}
                <div className="mt-3 d-flex align-items-center justify-content-between">
                    {/* bid_btn */}
                    <button className="bid_btn d-flex align-items-center gap-1" onClick={() => setShowModal(true)}>
                        <i className="ri-shopping-bag-line"></i>
                        Place Bid
                    </button >
                    {showModal && <Modal setShowModal={setShowModal} />}
                    {/* View History */}
                    <span className="history_link" >
                        <Link to='#'>View History</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NftCard
