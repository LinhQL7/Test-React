import React, { useState } from 'react';
// import axios from 'axios';
import './Login.css';
import { login } from '../../api/authApi';
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    // const handleLogin = async (event) => {
    //     event.preventDefault();

    //     const loginData = {
    //         email: email,
    //         password: password,
    //         remember: rememberMe
    //     };

    //     try {
    //         const response = await axios.post('http://localhost:3000/admin/auth/login', loginData);
    //         console.log('Login successful:', response.data);
    //         // Lưu token hoặc điều hướng người dùng đến trang chủ
    //     } catch (error) {
    //         console.error('Login failed:', error);
    //         alert('Login failed. Please check your credentials and try again.');
    //     }



    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const input = {
                email: email,
                password: password
            };
            const response = await login(input);

            // Giả sử token nằm trong response.data.token
            if (response) {
                const token = response.data.token;
                // Lưu token vào localStorage
                localStorage.setItem('access_token', token);
                navigate("/user-page");
            }

            //   Hiển thị thông báo thành công
            //   showNoti("Đăng nhập thành công!", "success");
            // setToken(token);
            // setUserData(response.data.user);


            console.log(response);
        } catch (error) {
            console.log(error);

        }
    };

    return (
        <form className='form-container' onSubmit={handleLogin}>
            <div className='email-container'>
                <label className='email-label'>Email address</label>
                <input
                    className='email-input'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    id='email'
                />
            </div>
            <div className='password-container'>
                <label className='password-label'>Password</label>
                <input
                    className='password-input'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    id='password'
                />
            </div>
            <div className='extra-options'>
                <label className='remember-me' htmlFor='remember'>
                    <input
                        type="checkbox"
                        id='remember'
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        value={rememberMe}
                    />
                    Remember me
                </label>
                <a className='forgot-password' href='https://www.google.com'>Forgot your password?</a>
            </div>
            <button onClick={handleLogin} type="submit">Login</button>
            <a className='create-new-account' href='/register'>Create a new account</a>
        </form>
    );
}

export default Login;
