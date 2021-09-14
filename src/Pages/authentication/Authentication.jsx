import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import Signup from '../../components/signup/signup';

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
                                <div className="col col-6">
                                    <Signup />
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
