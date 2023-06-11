import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, DatePicker, Select } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/en-gb'; // Import the desired locale for the date picker
import AddOrder from './AddOrder';

const { Option } = Select;

const PurchaseOrder = () => {
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  useEffect(() => {
    fetchPurchaseOrders();
    fetchVendors();
    fetchProducts();
  }, []);

  const fetchPurchaseOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/purchaseOrders');
      setPurchaseOrders(response.data);
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

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (record) => {
    try {
      await axios.delete(`http://localhost:8080/api/purchaseOrders/${record.id}`);
      fetchPurchaseOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (record) => {
    setCurrentOrder(record);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setCurrentOrder(null);
    setModalVisible(false);
  };

  const handleModalSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/purchaseOrders/${currentOrder.id}`, currentOrder);
      if (response.status === 200) {
        fetchPurchaseOrders();
        setModalVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormChange = (field, value) => {
    if (field === 'vendor') {
      // Parse the selected vendor object back to JSON
      value = JSON.parse(value);
    }
    setCurrentOrder({ ...currentOrder, [field]: value });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Product Description',
      dataIndex: 'productDescription',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Receipt Date',
      dataIndex: 'receiptDate',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
    },
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      render: (vendor) => vendor.name,
    },
    {
      title: 'Product',
      dataIndex: 'product',
      render: (product) => product.productName,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  // Set the locale for the date picker
  moment.locale('en-gb');

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <h1>Purchase Orders</h1>
        <Link to="./add-order">
          <Button type="primary">Add Order</Button>
        </Link>
      </div>
      <Table columns={columns} dataSource={purchaseOrders} rowKey="id" />

      <Switch>
        <Route path="./add-order">
          <AddOrder onAddOrder={fetchPurchaseOrders} />
        </Route>
      </Switch>

      {currentOrder && (
        <Modal
          visible={modalVisible}
          onCancel={handleModalClose}
          onOk={handleModalSave}
          okText="Save"
          cancelText="Cancel"
        >
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{
              date: moment(currentOrder.date),
              price: currentOrder.price,
              productDescription: currentOrder.productDescription,
              quantity: currentOrder.quantity,
              receiptDate: moment(currentOrder.receiptDate),
              subject: currentOrder.subject,
              totalAmount: currentOrder.totalAmount,
              product: currentOrder.product ? currentOrder.product.id : undefined,
              vendor: currentOrder.vendor ? JSON.stringify(currentOrder.vendor) : undefined,
            }}
            onFinish={handleModalSave}
          >
            <Form.Item label="Date" name="date">
              <DatePicker onChange={(date) => handleFormChange('date', date)} />
            </Form.Item>
            <Form.Item label="Price" name="price">
              <Input onChange={(e) => handleFormChange('price', e.target.value)} />
            </Form.Item>
            <Form.Item label="Product Description" name="productDescription">
              <Input onChange={(e) => handleFormChange('productDescription', e.target.value)} />
            </Form.Item>
            <Form.Item label="Quantity" name="quantity">
              <Input onChange={(e) => handleFormChange('quantity', e.target.value)} />
            </Form.Item>
            <Form.Item label="Receipt Date" name="receiptDate">
              <DatePicker onChange={(date) => handleFormChange('receiptDate', date)} />
            </Form.Item>
            <Form.Item label="Subject" name="subject">
              <Input onChange={(e) => handleFormChange('subject', e.target.value)} />
            </Form.Item>
            <Form.Item label="Total Amount" name="totalAmount">
              <Input onChange={(e) => handleFormChange('totalAmount', e.target.value)} />
            </Form.Item>
            <Form.Item label="Product" name="product">
              <Select onChange={(value) => handleFormChange('product', value)}>
                {products.map((product) => (
                  <Option key={product.id} value={product.id}>
                    {product.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Vendor" name="vendor">
              <Select onChange={(value) => handleFormChange('vendor', value)}>
                {vendors.map((vendor) => (
                  <Option key={vendor.id} value={JSON.stringify(vendor)}>
                    {vendor.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default PurchaseOrder;
