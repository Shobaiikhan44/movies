import React, { Component } from 'react';
import Joi from 'joi-browser'; // Imported Joi library for form validation



class LoginForm extends Component {
    state = {
        account: {
            userName: '',
            password: ''
        },
        errors: {
            userName: '',
            password: ''
        }
    };

    // Joi schema for validation
    schema = {
        userName: Joi.string().required(),
        password: Joi.string().required()
    };

    // Handle form submission
    handleSubmit = e => {
        e.preventDefault(); // Prevent default form submission behavior
        const errors = this.validate(); // Validate form data
        if (errors) { // If errors exist
            this.setState({ errors }); // Update state with errors
            return; // Stop form submission
        }

        console.log("Form submitted successfully");
        // Here you can add logic to submit the form data
    };

    // Validate form data using Joi schema
    validate = () => {
        const { error } = Joi.validate(this.state.account, this.schema); // Validate form data

        if (!error) return null; // If no errors, return null

        const errors = {}; // Object to hold validation errors
        for (let item of error.details)
            errors[item.path[0]] = item.message; // Store error messages by field name

        return errors; // Return validation errors
    };

    // Handle input change
    handleChange = e => {
        const { name, value } = e.currentTarget; // Destructure name and value from input
        const account = { ...this.state.account }; // Clone current account state
        const errors = { ...this.state.errors }; // Clone current errors state

        account[name] = value; // Update account object with new value
        errors[name] = ''; // Clear previous error message for this field

        this.setState({ account, errors }); // Update state with new account data and cleared errors
    };

    // Render form component
    render() {
        const { account, errors } = this.state; // Destructure account and errors from state

        return (
            <div className='container'>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}> {/* Handle form submission */}
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email address</label>
                        <input
                            autoFocus
                            id='email'
                            name='userName'
                            className='form-control'
                            value={account.userName}
                            onChange={this.handleChange} // Handle input change
                        />
                        {errors.userName && <div className="alert alert-danger">{errors.userName}</div>} {/* Display error message if exists */}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input
                            id='password'
                            name='password'
                            className='form-control'
                            type='password'
                            value={account.password}
                            onChange={this.handleChange} // Handle input change
                        />
                        {errors.password && <div className="alert alert-danger">{errors.password}</div>} {/* Display error message if exists */}
                    </div>
                    <button disabled={this.validate()} className='btn btn-primary'>Submit</button> {/* Disable button if there are validation errors */}
                </form>
            </div>
        );
    }
}

export default LoginForm; // Export LoginForm component
