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
                    linkUrl: 'hats',
                },
                {
                    id: 2,
                    title: 'jackets',
                    imgUrl: 'https://picsum.photos/200/301',
                    linkUrl: '',
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imgUrl: 'https://picsum.photos/200/302',
                    linkUrl: '',
                },
                {
                    id: 4,
                    title: 'womens',
                    imgUrl: 'https://picsum.photos/200/303',
                    linkUrl: '',
                },
                {
                    id: 5,
                    title: 'mens',
                    imgUrl: 'https://picsum.photos/200/304',
                    linkUrl: '',
                },
            ]
        }
    }

    render() {
        return (
            <>
                <section className="home_card_sec off_bg">
                    <div className="container">
                        <div className="row">
                            {
                                this.state.sections.map(({id, ...otherSectionProps}) => (
                                    <MenuItem
                                        key={id}
                                        {...otherSectionProps}
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
