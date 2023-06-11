import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, DatePicker, Typography, Row, Col, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const { Option } = Select;
const { Text } = Typography;

const AddInvoice = () => {
  const [form] = Form.useForm();
  const [vendors, setVendors] = useState([]);
  const [products, setProducts] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetchVendors();
    fetchProducts();
    fetchWarehouses();
  }, []);

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

  const fetchWarehouses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/warehouses');
      setWarehouses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (values) => {
    try {
      const { warehouseId, productId, vendorId, quantity, price, shippingCharges, dateOfGeneration } = values;

      const invoiceData = {
        warehouse: { id: warehouseId },
        product: { id: productId },
        vendor: { id: vendorId },
        quantity,
        price,
        shippingCharges,
        dateOfGeneration: dateOfGeneration.format('YYYY-MM-DD'),
      };

      // Send the invoiceData object to the backend
      await axios.post('http://localhost:8080/api/purchase/invoices', invoiceData);

      message.success('Invoice added successfully');
      history.push('/purchase/invoices');
    } catch (error) {
      console.log(error);
      message.error('Error adding invoice');
    }
  };

  const handlePriceChange = (value) => {
    const quantity = form.getFieldValue('quantity');
    const shippingCharges = form.getFieldValue('shippingCharges');
    const totalPrice = value * quantity + shippingCharges;
    setTotalAmount(totalPrice);
  };

  const handleQuantityChange = (value) => {
    const price = form.getFieldValue('price');
    const shippingCharges = form.getFieldValue('shippingCharges');
    const totalPrice = price * value + shippingCharges;
    setTotalAmount(totalPrice);
  };

  const handleShippingChargesChange = (value) => {
    const price = form.getFieldValue('price');
    const quantity = form.getFieldValue('quantity');
    const totalPrice = parseFloat(price) * parseFloat(quantity) + parseFloat(value);
    setTotalAmount(totalPrice);
  };
  

  return (
    <div>
      <h2>Add Invoice</h2>
      <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="vendorId"
              label="Vendor"
              rules={[{ required: true, message: 'Please select a vendor' }]}
            >
              <Select placeholder="Select a vendor">
                {vendors.map((vendor) => (
                  <Option key={vendor.id} value={vendor.id}>
                    {vendor.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="productId"
              label="Product"
              rules={[{ required: true, message: 'Please select a product' }]}
            >
              <Select placeholder="Select a product">
                {products.map((product) => (
                  <Option key={product.id} value={product.id}>
                    {product.productName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="warehouseId"
              label="Warehouse"
              rules={[{ required: true, message: 'Please select a warehouse' }]}
            >
              <Select placeholder="Select a warehouse">
                {warehouses.map((warehouse) => (
                  <Option key={warehouse.id} value={warehouse.id}>
                    {warehouse.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="quantity"
              label="Quantity"
              rules={[{ required: true, message: 'Please enter the quantity' }]}
            >
              <Input type="number" onChange={(e) => handleQuantityChange(e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="price"
              label="Unit Price"
              rules={[{ required: true, message: 'Please enter the price' }]}
            >
              <Input type="number" onChange={(e) => handlePriceChange(e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="shippingCharges"
              label="Shipping Charges"
              rules={[{ required: true, message: 'Please enter the shipping charges' }]}
            >
              <Input type="number" onChange={(e) => handleShippingChargesChange(e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="dateOfGeneration"
              label="Date of Generation"
              rules={[{ required: true, message: 'Please select the date of generation' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Total Amount">
              <Text type="secondary" strong style={{ fontSize: '20px', textAlign: 'right' }}>
                {totalAmount}
              </Text>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddInvoice;
