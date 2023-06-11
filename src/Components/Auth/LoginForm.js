import React, { useState } from 'react';
import { Layout, Form, Input, Button, Typography } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

const Login = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      setError(null);

      // Send login request to the backend
      const response = await axios.post('http://localhost:8080/api/login', values);

      // Handle login success
      // Store the user token or credentials in the browser's local storage or state
      onLogin(response.data.role); // Call the onLogin callback with the user role
      setLoading(false);

      // Redirect to the home page or the desired route
      history.push('/');
    } catch (error) {
      setLoading(false);
      setError('Invalid email or password.');
    }
  };

  return (
    <Layout style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(galaxy.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(4px)',
            animation: 'moveBackground 20s linear infinite',
          }}
        ></div>
      </div>
      <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 300 }}>
          <Title level={3} style={{ color: '#FFF' }}>
            Login
          </Title>
          <Form onFinish={handleLogin}>
            {/* Login form fields */}
            <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email.' }]}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password.' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            {error && <div style={{ color: '#FF0000', marginBottom: 16 }}>{error}</div>}
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Log in
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: 'center', color: '#FFF' }}>
            <span>If not already registered, </span>
            <a href="/signup" style={{ color: '#FFF' }}>
              signup
            </a>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Login;
