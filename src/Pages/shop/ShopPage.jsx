import React from 'react';
import ShopData from './ShopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import CollectionItem from '../../components/collection-item/CollectionItem.jsx'

class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collection: ShopData,
        };
    }

    render() {

        const collections = this.state.collection;

        return (
            <>
                <h1>Shop Page</h1>
                <section className="shopepage_sec off_bg">
                    <div className="container">
                        <div className="row">
                            {
                                collections.map(({ id, ...othercollectiondata }) => (
                                    <CollectionPreview key={id} {...othercollectiondata} />
                                ))
                            }

                        </div>
                    </div>
                </section>
            </>
        );

    }
}

export default ShopPage;


// import React from 'react';
// import SHOP_DATA from './shop.data';
// import CollectionPreview from '../../components/collection-preview/CollectionPreview';


// class ShopPage extends React.Component {
//     constructor(props) {
//         super();

//         this.state = {
//             collection: SHOP_DATA,
//         }
//     }
//     render() {
//         // const {collection}
//         return (
//             <>
//                 {/* <h1>SHOP PAGE</h1> */}-
//                 <section className="shopepage_sec off_bg">
//                     <div className="container">
//                         <div className="row">
//                             <CollectionPreview />
//                         </div>
//                     </div>
//                 </section>
//             </>
//         );
//     }
// }

// export default ShopPage;
