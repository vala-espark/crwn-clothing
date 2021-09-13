import React from 'react';
import FormInput from '../form-input/FormInput';
import './signIn.scss';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState = { email: '', password: '', }
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        console.log(this.state);
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        <h4>Sign In</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group">
                                <FormInput
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    handleChange={this.handleChange}
                                    label="email"
                                    id=""
                                    required="true"
                                />
                            </div>
                            <div className="input-group">
                                <FormInput
                                    type="password" 
                                    name="password"
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                    label="Password"
                                    id=""
                                    required="true"
                                />
                            </div>
                            <div className="input-group btn-group">
                                <ul>
                                    <li>
                                        <CustomButton type="submit" >Sign In</CustomButton>
                                    </li>
                                    <li>
                                        <CustomButton onClick={signInWithGoogle} btnBorder isGoogleSignIn >Sign in With Google</CustomButton>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default SignIn;
