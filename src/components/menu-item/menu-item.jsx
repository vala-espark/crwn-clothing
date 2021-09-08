import React from 'react';
import './menu-item.scss'

const MenuItem = ({ title, imgUrl }) => {
    return (
        <>
            <div className="col col-4">
                <div style={{
                    // display: 'block',

                }}  className="home_card_item card">
                    <div className="home_card_img">
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className="home_card_content card-body">
                        <h2>{title}</h2>
                        <label htmlFor="">Shop Now</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuItem;

