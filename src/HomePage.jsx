import React from 'react';
import './HomePage.scss'

const HomePage = () => {
    return (
        <>
            <section className="home_card_sec off_bg">
                <div className="container">
                    <div className="row">
                        <div className="col col-4">
                            <div className="home_card_item card">
                                <div className="home_card_content">
                                    <h2>Hats</h2>
                                    <label htmlFor="">Shop Now</label>
                                </div>
                            </div>
                        </div>
                        <div className="col col-4">
                            <div className="home_card_item card">
                                <div className="home_card_content">
                                    <h2>Jackets</h2>
                                    <label htmlFor="">Shop Now</label>
                                </div>
                            </div>
                        </div>
                        <div className="col col-4">
                            <div className="home_card_item card">
                                <div className="home_card_content">
                                    <h2>Sneakers</h2>
                                    <label htmlFor="">Shop Now</label>
                                </div>
                            </div>
                        </div>
                        <div className="col col-4">
                            <div className="home_card_item card">
                                <div className="home_card_content">
                                    <h2>Womens</h2>
                                    <label htmlFor="">Shop Now</label>
                                </div>
                            </div>
                        </div>
                        <div className="col col-4">
                            <div className="home_card_item card">
                                <div className="home_card_content">
                                    <h2>Mens</h2>
                                    <label htmlFor="">Shop Now</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home_page">
                <div className="directory-menu">
                    <div className="menu-item">
                        <div className="content">
                            <h2 className="menu-title">Hats</h2>
                            <span className="menu-sub-title">shop Now</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h2 className="menu-title">Jackets</h2>
                            <span className="menu-sub-title">shop Now</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h2 className="menu-title">Sneakers</h2>
                            <span className="menu-sub-title">shop Now</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h2 className="menu-title">Womens</h2>
                            <span className="menu-sub-title">shop Now</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <div className="content">
                            <h2 className="menu-title">Mens</h2>
                            <span className="menu-sub-title">shop Now</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
