import React, { useState } from 'react';
// import axios from 'axios';
import './Register.css';
import { register } from '../../api/authApi';

function Register() {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const handleRegister = async (event) => {
    //     event.preventDefault();

    //     if (password !== confirmPassword) {
    //         alert('Passwords do not match');
    //         return;
    //     }

    //     const registerData = {
    //         name: name,
    //         email: email,
    //         password: password,
    //         password_confirmation: confirmPassword

    //     };

    //     try {
    //         const response = await axios.post('http://localhost:3000/admin/auth/register', registerData);
    //         console.log('Register successful:', response.data);
    //         alert('Register successful! You can now log in.');
    //     } catch (error) {
    //         console.error('Register failed:', error);
    //         alert('Register failed. Please try again.');
    //     }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const input = {
                phone: phone,
                name: name,
                email: email,
                password: password,
                password_confirmation: confirmPassword,
            }
            const response = await register(input);

            console.log(response);
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <form className='form-container' onSubmit={handleRegister}>
            <div>
                <label className='phone'>Phone</label>
                <input
                    className='phone-input'
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    id='phone'
                />
            </div>
            <div>
                <label className='name'>Name</label>
                <input
                    className='name-input'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    id='name'
                />
            </div>
            <div>
                <label className='email'>Email address</label>
                <input
                    className='email-input'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    id='email'
                />
            </div>
            <div>
                <label className='password'>Password</label>
                <input
                    className='password-input'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    id='password'
                />
            </div>
            <div>
                <label className='confirm-password'>Confirm Password</label>
                <input
                    className='confirm-password-input'
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    id='password_confirmation'
                />
            </div>
            <button onClick={handleRegister} type="submit">Register</button>
            <a className='already-account' href='/login'>You already have an account?</a>

        </form>
    );
}

export default Register;
