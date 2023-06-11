import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, DatePicker, Select } from 'antd';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';
import AddGoodReceiving from './AddGoodReceiving';

const { Option } = Select;

const GoodReceiving = () => {
  const [invoices, setInvoices] = useState([]);
  const [products, setProducts] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetchInvoices();
    fetchProducts();
    fetchVendors();
    fetchWarehouses();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/purchase/goodreceiving');
      setInvoices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVendors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/vendors');
      setVendors(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWarehouses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/warehouses');
      setWarehouses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (record) => {
    try {
      await axios.delete(`http://localhost:8080/api/purchase/goodreceiving/${record.id}`);
      fetchInvoices();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (record) => {
    setCurrentInvoice(record);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setCurrentInvoice(null);
    setModalVisible(false);
  };

  const handleModalSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/purchase/goodreceiving/${currentInvoice.id}`, currentInvoice);
      if (response.status === 200) {
        fetchInvoices();
        setModalVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormChange = (field, value) => {
    if (field === 'vendor') {
      value = JSON.parse(value);
    }
    if (field === 'warehouse') {
      value = JSON.parse(value);
    }
    setCurrentInvoice({ ...currentInvoice, [field]: value });
  };

  const columns = [
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      render: (vendor) => vendor.name,
    },
    {
      title: 'Date of Generation',
      dataIndex: 'dateOfGeneration',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      render: (product) => product.productName,
    },
    {
      title: 'Warehouse',
      dataIndex: 'warehouse',
      render: (warehouse) => warehouse.name,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },

    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => (
        <>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            disabled={record.status} // Disable the button if the invoice is already paid
          >
            Edit
          </Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
            disabled={record.status} // Disable the button if the invoice is already paid
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => history.push('./add-goodreceiving')}>
          Add GoodReceiving
        </Button>
      </div>
      <Table columns={columns} dataSource={invoices} rowKey="id" />

      <Modal
        title="Edit Invoice"
        visible={modalVisible}
        onOk={handleModalSave}
        onCancel={handleModalClose}
        okText="Save"
        cancelText="Cancel"
      >
        {currentInvoice && (
          <Form layout="vertical">
            <Form.Item label="Vendor">
              <Select value={JSON.stringify(currentInvoice.vendor)} onChange={(value) => handleFormChange('vendor', value)}>
                {vendors.map((vendor) => (
                  <Option key={vendor.id} value={JSON.stringify(vendor)}>
                    {vendor.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Warehouse">
              <Select value={JSON.stringify(currentInvoice.warehouse)} onChange={(value) => handleFormChange('warehouse', value)}>
                {warehouses.map((warehouse) => (
                  <Option key={warehouse.id} value={JSON.stringify(warehouse)}>
                    {warehouse.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Product">
              <Select value={currentInvoice.product} onChange={(value) => handleFormChange('product', value)}>
                {products.map((product) => (
                  <Option key={product.id} value={product.id}>
                    {product.productName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Quantity">
              <Input
                type="number"
                value={currentInvoice.quantity}
                onChange={(e) => handleFormChange('quantity', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Date of Generation">
              <DatePicker
                value={moment(currentInvoice.dateOfGeneration)}
                onChange={(value) => handleFormChange('dateOfGeneration', moment(value).format('YYYY-MM-DD'))}
              />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default GoodReceiving;




