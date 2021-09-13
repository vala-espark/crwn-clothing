import React from 'react';
import SignIn from '../../components/signIn/SignIn';

const Authentication = () => {
    return (
        <>
            <section className="off_bg auth_sec">
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <div className="row">
                                <div className="col col-6">
                                    <SignIn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Authentication;
