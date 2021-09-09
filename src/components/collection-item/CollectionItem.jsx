import React from 'react';
import './CollectionItem.scss'

const CollectionItem = ({id, name, price, imageUrl}) => {
    return (
        <>
            <div className="col col-3" key={id}>
                <div className="collection-item">
                    <div className="collection-item-img">
                        <img src={imageUrl} alt="" />
                    </div>
                    <div className="collection-item-content">
                        <p className="name">{name}</p>
                        <p className="price">${price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionItem;
