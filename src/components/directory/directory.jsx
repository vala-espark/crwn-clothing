import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    imgUrl: 'https://picsum.photos/200/300',
                },
                {
                    id: 2,
                    title: 'jackets',
                    imgUrl: 'https://picsum.photos/200/301',
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imgUrl: 'https://picsum.photos/200/302',
                },
                {
                    id: 4,
                    title: 'womens',
                    imgUrl: 'https://picsum.photos/200/303',
                },
                {
                    id: 5,
                    title: 'mens',
                    imgUrl: 'https://picsum.photos/200/304',
                },
            ]
        }
    }

    render(){
        return(
            <>
            <section className="home_card_sec off_bg">
                <div className="container">
                    <div className="row">
                    {
                        this.state.sections.map(({title, imgUrl,id}) => (
                            <MenuItem 
                                key={id}
                                title = {title}
                                imgUrl = {imgUrl}
                            />
                        ))
                    }
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default Directory;
