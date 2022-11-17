
import React from 'react'
import './styles/Modal.css'


const Modal = ({ setShowModal }) => {
    return (
        /* modal_wrapper */
        <div className="modal_wrapper">
            {/* modal */}
            <div className="single_modal">
                {/* close_modal */}
                <span className="close_modal" onClick={() => setShowModal(false)}>
                    <i className="ri-close-line"></i>
                </span>
                {/* Title */}
                <h6 className="text-center text-light">Place a Bid</h6>
                {/* Message */}
                <p >You must bid at least <span className="money">5.89 ETH</span></p>
                {/* input_item */}
                <div className="input_item mb-4">
                    <input type="number" placeholder='00:00 ETH' />
                </div>
                {/* input_item */}
                <div className="input_item mb-3">
                    <h6>Enter Quantity, 7 Available</h6>
                    <input type="number" placeholder='Enter Quantity' />
                </div>
                {/* d-flex align-items-center justify-content-between */}
                <div className="d-flex align-items-center justify-content-between">
                    <p>You must bid at least</p>
                    <span className="money">5.89 ETH</span>
                </div>
                {/* d-flex align-items-center justify-content-between */}
                <div className="d-flex align-items-center justify-content-between">
                    <p>Service Fee</p>
                    <span className="money">0.89 ETH</span>
                </div>
                {/* d-flex align-items-center justify-content-between */}
                <div className="d-flex align-items-center justify-content-between">
                    <p>Total Bid Amount</p>
                    <span className="money">5.89 ETH</span>
                </div>
                {/* place_bid-btn */}
                <button className="place_bid-btn">
                    Place a Bid
                </button>
            </div>
        </div>
    )
}

export default Modal
