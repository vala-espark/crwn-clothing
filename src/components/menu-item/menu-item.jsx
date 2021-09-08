import React from 'react';
import { withRouter } from 'react-router';
import './menu-item.scss'

const MenuItem = ({ title, imgUrl, history, linkUrl, match}) => {
    return (
        <>
            <div className="col col-4">
                <div className="home_card_item card" onClick={()=> history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);

