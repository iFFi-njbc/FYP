import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const SignupForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    const { username, phoneNumber, email, password } = values;

    try {
      const response = await axios.post('http://localhost:8080/api/users/signup', {
        username,
        phoneNumber,
        email,
        password
      });
      message.success('Signup successful');

      // Redirect the user to the login page or any other desired page
      // Example: history.push('/login');
    } catch (error) {
      // Handle errors from API calls
      message.error(error.response.data);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[{ required: true, message: 'Please enter your phone number' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupForm;
