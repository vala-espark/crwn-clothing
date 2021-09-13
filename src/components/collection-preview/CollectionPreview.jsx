import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items }) => {
    return (
        <>
            <div className="collection-preview">
                <div className="collection-item-box">
                    <div className="collection-item-title">
                        <h4>{title.toUpperCase()}</h4>
                        <span className="collection-item-link">View More</span>
                    </div>
                    <div className="collection-item-content">
                        <div className="row">
                            {
                                items.filter((item, index) => index < 4)
                                    .map(({ id, ...otherItemData }) => (
                                        <CollectionItem key={id} {...otherItemData} />
                                    )
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollectionPreview



// import React from 'react';
// import './CollectionPreview.scss'

// const CollectionPreview = ({title, items}) => {
//     return (
//         <>
//             <div className="col col-12 ">
//                 <div className="collection_preview">
//                     <div className="card">
//                         <div className="card-header">
//                             <h4>{title.toUpperCase()}</h4>
//                             <span className="card-link btn btn-sm">Hello</span>
//                         </div>
//                         <div className="card-body">
//                             {
//                                 items.map((item) => (
//                                     <div key={item.id} >{item.name}</div>
//                                 ))
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CollectionPreview;
