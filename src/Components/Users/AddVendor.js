import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import axios from 'axios';

const AddVendor = () => {
  const history = useHistory();

  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:8080/api/vendors', values);
      history.push('/vendor');
    } catch (error) {
      console.error('Error adding vendor:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h1>Add Vendor</h1>
      <Form name="addVendorForm" onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            {/* <Form.Item
              label="Vendor ID"
              name="id"
              rules={[
                {
                  required: true,
                  message: 'Please enter the Vendor ID!',
                },
              ]}
            >
              <Input />
            </Form.Item> */}
          </Col>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter the Name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Contact Number"
              name="contactNumber"
              rules={[
                {
                  required: true,
                  message: 'Please enter the Contact Number!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please enter the Email!',
                },
                {
                  type: 'email',
                  message: 'Please enter a valid Email!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddVendor;
