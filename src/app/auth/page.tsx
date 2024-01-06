'use client';
import React, { useState, useEffect } from 'react';
import { Input, Button, Form } from 'antd';
import './style.css';
import { useRouter } from "next/navigation";
import { setCookie, getCookie } from 'cookies-next';


export default function Auth() {

    const router = useRouter();
    const [formData, setFormData] = useState<{ email: string; password: string }>({ email: "", password: "", });
    const [loading, setLoading] = useState<boolean>(false);

    const validateMessages = {
        required: '${label} is required!',
    };

    const handleLogin = async (values: string) => {
        setLoading(true);

        try {
            // Make request to API login endpoint with form data
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                }),
            });

            if (response.ok) {
                const data = await response.json();
                
                 // Assuming token is in response
                const token = data.token;

                // Save token in  cookie
                setCookie('token', token, {
                    path: '/',
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                });

                // Redirect to index page
                router.push('/');
                console.log("Login success!");
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = getCookie('token');
        if (token) {
            router.push('/');
        }
    }, []);

    return (<div className="main-auth">
        <div className="centered-content">
            <div className="section-header-auth">
                <div className="sub-content-center">
                    <img className="logo" src="https://s3-alpha-sig.figma.com/img/a043/18be/0079fa9f015829f49823845b1251a4d0?Expires=1704067200&Signature=N3~U5komgHQkFTfnT79hZOzjswL4~Hznt0efgchU9ZENC64YRmyUg7IRHysS5EWiUfBDXCPOm1KVttTffE4~HSqESOAXLLqaonfIP7jB8j21FV9NxnyGgrEsbAbKxiF-6ZWxCLotnbvZManG6aXNKY4mNA6l~ricUsgC6nN7X2rFGcVrvXhA5TmoDMTr3CWK7A~bTDxIpGeXvB7KVB8LLcUmU-5xXBeIogQL-cAuyRKurOncB4uAhuogcO9mqyGR7XcThuLD-kT2R5nqEOgM5vAkDYH3RnF-YJIMIqJKV3Lrxe-ETMDTqE1VAv~3RztidFX97KRCQkulVYxgixd2ZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="logo-auth" />
                    <h2 className="title">ARMS</h2>
                    <p className="sub-text">Version 1.0</p>
                </div>
            </div>

            <div className="form-input-auth">
                <Form
                    name="nest-messages"
                    validateMessages={validateMessages}
                    onFinish={handleLogin}
                >
                    <Form.Item
                        className="form-controller"
                        name={['user', 'email']}
                        label="Email Address"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input
                            onChange={(e) => setFormData((prevFormData) => ({ ...prevFormData, email: e.target.value }))}
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            className="input"
                        />

                    </Form.Item>

                    <Form.Item
                        className="form-controller"
                        name={['user', 'password']}
                        label="Password"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input
                            onChange={(e) => setFormData((prevFormData) => ({ ...prevFormData, password: e.target.value }))}
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="input" />

                    </Form.Item>

                    <Button disabled={loading} loading={loading} type="primary" htmlType="submit" className="btn-login">
                        Login
                    </Button>
                </Form>
            </div>

            <div className="footer-auth">
                <a href="/#">Forgot Password</a>
            </div>
        </div>
    </div>
    );
};


