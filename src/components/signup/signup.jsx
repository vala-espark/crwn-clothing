import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

class Signup extends React.Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password != confirmPassword) {
            alert("Password don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {

        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <>
                <div className="card">
                    <div className="card-header">
                        <h4>Sign Up</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group">
                                <FormInput
                                    type="text"
                                    name="displayName"
                                    value={displayName}
                                    handleChange={this.handleChange}
                                    label="Name"
                                    required={true}
                                />
                            </div>
                            <div className="input-group">
                                <FormInput
                                    type="email"
                                    name="email"
                                    value={email}
                                    handleChange={this.handleChange}
                                    label="Email"
                                    required={true}
                                />
                            </div>
                            <div className="input-group">
                                <FormInput
                                    type="password"
                                    name="password"
                                    value={password}
                                    handleChange={this.handleChange}
                                    label="Password"
                                    required={true}
                                />
                            </div>
                            <div className="input-group">
                                <FormInput
                                    type="password"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    handleChange={this.handleChange}
                                    label="Confirm password"
                                    required={true}
                                />
                            </div>
                            <div className="input-group btn-group">
                                <ul>
                                    <li>
                                        <CustomButton type="submit" >Sign Up</CustomButton>
                                    </li>
                                    {/* <li>
                                        <CustomButton btnBorder isGoogleSignIn >Sign in With Google</CustomButton>
                                    </li> */}
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <FormInput />
                <CustomButton /> */}
            </>
        )
    }
}

export default Signup;
