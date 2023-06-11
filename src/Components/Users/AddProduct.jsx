import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, Checkbox, Select, Button } from 'antd';

const { Option } = Select;

const AddProduct = ({ match, history }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [updating, setUpdate] = useState(false);

  const [product, setProduct] = useState({
    productName: '',
    showSalePrice: false,
    salePrice: '',
    showPurchasePrice: false,
    purchasePrice: '',
    productCategory: 'Finished',
  });

  useEffect(() => {
    const { id } = match.params;
    if (id === '_add') {
      return;
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [match.params]);

  const onFinish = async (values) => {
    const data = {
      productName: values.productName,
      showSalePrice: values.showSalePrice,
      salePrice: values.salePrice,
      showPurchasePrice: values.showPurchasePrice,
      purchasePrice: values.purchasePrice,
      productCategory: values.productCategory,
    };

    setProduct(data);

    if (match.params.id === '_add') {
      try {
        const response = await axios.post('http://localhost:8080/api/products', data);
        console.log(response.data);
        console.log('Product created successfully!');
        setFormSubmitted(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await axios.put(`http://localhost:8080/api/products/${match.params.id}`, data);
        history.goBack();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (name, value) => {
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUpdate = (event) => {
    const name = event.target.name;
    if (updating) {
      if (name === 'id') {
        setUpdate(true);
      } else {
        setUpdate(false);
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '50px' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', color: 'steelblue', fontFamily: 'serif' }}>Add Product</h1>
      {formSubmitted ? (
        <div>Form submitted successfully!</div>
      ) : (
        <Form
          onFinish={onFinish}
          initialValues={product}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Product Name"
            name="productName"
            rules={[{ required: true, message: 'Please enter product name' }]}
          >
            <Input
              placeholder="Product Name"
              disabled={updating}
              onChange={(e) => handleChange('productName', e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="showSalePrice"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox style={{ float: 'left' }}>
              Do you sell this product?
            </Checkbox>
          </Form.Item>

          {product.showSalePrice && (
            <Form.Item
              label="Sale Price"
              name="salePrice"
              rules={[{ required: true, message: 'Please enter sale price' }]}
            >
              <Input type="number" placeholder="Sale Price" />
            </Form.Item>
          )}

          <Form.Item
            name="showPurchasePrice"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox style={{ float: 'left' }}>
              Do you purchase this product?
            </Checkbox>
          </Form.Item>

          {product.showPurchasePrice && (
            <Form.Item
              label="Purchase Price"
              name="purchasePrice"
              rules={[{ required: true, message: 'Please enter purchase price' }]}
            >
              <Input type="number" placeholder="Purchase Price" />
            </Form.Item>
          )}

          <Form.Item
            label="Product Category"
            name="productCategory"
            rules={[{ required: true, message: 'Please select product category' }]}
          >
            <Select>
              <Option value="Finished">Finished</Option>
              <Option value="Service">Service</Option>
              <Option value="Raw Material">Raw Material</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {updating ? 'Update' : 'Save'}
            </Button>
            <Button type="button" onClick={() => history.push('/users/products')} style={{ marginLeft: '10px' }}>
              Close
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default AddProduct;
