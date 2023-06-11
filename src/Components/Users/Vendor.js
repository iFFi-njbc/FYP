import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Space, Modal, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const Vendor = () => {
  const [dataSource, setDataSource] = useState([]);

  const [editingVendor, setEditingVendor] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/vendors');
      setDataSource(response.data);
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  const handleEdit = (vendorId) => {
    const vendorToEdit = dataSource.find((vendor) => vendor.id === vendorId);
    if (vendorToEdit) {
      setEditingVendor(vendorToEdit);
      setEditModalVisible(true);
    }
  };

  const handleEditFormSubmit = async (values) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/vendors/${editingVendor.id}`, values);
      const updatedVendor = response.data;
      const updatedDataSource = dataSource.map((vendor) =>
        vendor.id === updatedVendor.id ? updatedVendor : vendor
      );
      setDataSource(updatedDataSource);
      setEditingVendor(null);
      setEditModalVisible(false);
    } catch (error) {
      console.error('Error updating vendor:', error);
    }
  };

  const handleDelete = async (vendorId) => {
    try {
      await axios.delete(`http://localhost:8080/api/vendors/${vendorId}`);
      const updatedDataSource = dataSource.filter((vendor) => vendor.id !== vendorId);
      setDataSource(updatedDataSource);
    } catch (error) {
      console.error('Error deleting vendor:', error);
    }
  };

  const columns = [
    {
      title: 'Vendor ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Contact Number',
      dataIndex: 'contactNumber',
      key: 'contactNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record.id)}>
            Edit
          </Button>
          <Button type="link" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Vendor List</h1>
      <Link to="/users/add-vendor">
        <Button type="primary">Add Vendor</Button>
      </Link>
      <Table dataSource={dataSource} columns={columns} />

      <Modal
        visible={editModalVisible}
        title="Edit Vendor"
        onCancel={() => setEditModalVisible(false)}
        footer={null}
      >
        {editingVendor && (
          <Form
            name="editVendorForm"
            onFinish={handleEditFormSubmit}
            initialValues={editingVendor}
            layout="vertical"
          >
            <Form.Item label="Vendor ID" name="id">
              <Input disabled />
            </Form.Item>

            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter the Name!' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Contact Number"
              name="contactNumber"
              rules={[{ required: true, message: 'Please enter the Contact Number!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter the Email!' },
                { type: 'email', message: 'Please enter a valid Email!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default Vendor;
