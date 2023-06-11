import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Row, Col, Select, DatePicker, Typography } from 'antd';
import axios from 'axios';

const { Option } = Select;
const { Text } = Typography;

const AddOrder = () => {
  const history = useHistory();
  const [vendors, setVendors] = useState([]);
  const [products, setProducts] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchVendors();
    fetchProducts();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/vendors');
      setVendors(response.data);
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const onFinish = async (values) => {
    const { product, vendor, quantity, price, ...restValues } = values;

    const orderData = {
      product: { id: JSON.parse(product).id },
      vendor: { id: JSON.parse(vendor).id },
      quantity: parseFloat(quantity),
      price: parseFloat(price),
      ...restValues,
    };

    // Calculate the total amount
    const totalAmount = orderData.quantity * orderData.price;
    orderData.totalAmount = totalAmount;

    try {
      const response = await axios.post('http://localhost:8080/api/purchaseOrders', orderData);
      const createdOrder = response.data;

      history.push('/purchase/orders');
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleQuantityChange = () => {
    form.validateFields(['quantity', 'price']).then(() => {
      const quantity = form.getFieldValue('quantity');
      const unitPrice = form.getFieldValue('price');
      const amount = quantity * unitPrice;
      form.setFieldsValue({ totalAmount: amount.toFixed(2) });
    });
  };

  const handleUnitPriceChange = () => {
    form.validateFields(['quantity', 'price']).then(() => {
      const quantity = form.getFieldValue('quantity');
      const unitPrice = form.getFieldValue('price');
      const amount = quantity * unitPrice;
      form.setFieldsValue({ totalAmount: amount.toFixed(2) });
    });
  };

  return (
    <div>
      <h1>Add Order</h1>
      <Form
        name="addOrderForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        form={form}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Vendor" name="vendor">
              <Select placeholder="Select a vendor">
                {vendors.map((vendor) => (
                  <Option key={vendor.id} value={JSON.stringify(vendor)}>
                    {vendor.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Date" name="date">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Receipt Date" name="receiptDate">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Subject" name="subject">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Product" name="product">
              <Select placeholder="Select a product">
                {products.map((product) => (
                  <Option key={product.id} value={JSON.stringify(product)}>
                    {product.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Product Description" name="productDescription">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Quantity" name="quantity">
              <Input onChange={handleQuantityChange} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Unit Price" name="price">
              <Input onChange={handleUnitPriceChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Total Amount" name="totalAmount">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="primary" htmlType="submit">
              Add Order
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddOrder;
