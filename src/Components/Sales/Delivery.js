import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form, Input, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const Delivery = () => {
  const [form] = Form.useForm();
  const [deliveries, setDeliveries] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDeliveries();
    fetchCustomers();
  }, []);

  const fetchDeliveries = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/deliveries');
      setDeliveries(response.data);
      console.log('Deliveries:', response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/customers');
      setCustomers(response.data);
      console.log('Customers:', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleAddDelivery = async (values) => {
  //   setLoading(true);
  //   try {
  //     await axios.post('http://localhost:8080/api/deliveries', values);
  //     fetchDeliveries();
  //     setModalVisible(false);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleUpdateDelivery = async (values) => {
  //   setLoading(true);
  //   try {
  //     await axios.put(`http://localhost:8080/api/deliveries/${selectedDelivery.id}`, values);
  //     fetchDeliveries();
  //     setModalVisible(false);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleAddDelivery = async (values) => {
    setLoading(true);
    try {
      const customer = JSON.parse(values.customer);
      await axios.post('http://localhost:8080/api/deliveries', {
        ...values,
        customer: customer,
      });
      fetchDeliveries();
      setModalVisible(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleUpdateDelivery = async (values) => {
    setLoading(true);
    try {
      const customer = JSON.parse(values.customer);
      await axios.put(`http://localhost:8080/api/deliveries/${selectedDelivery.id}`, {
        ...values,
        customer: customer,
      });
      fetchDeliveries();
      setModalVisible(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleDeleteDelivery = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:8080/api/deliveries/${id}`);
      fetchDeliveries();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditDelivery = (record) => {
    setSelectedDelivery(record);
    setModalVisible(true);
    form.setFieldsValue(record);
  };

  const handleModalCancel = () => {
    setSelectedDelivery(null);
    setModalVisible(false);
    form.resetFields();
  };

  const DeliveryStatus = {
    PENDING: { id: 1, label: "Pending" },
    IN_TRANSIT: { id: 2, label: "In Transit" },
    DELIVERED: { id: 3, label: "Delivered" },
  };
  

  const columns = [
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      render: (customer) => {
        return customer ? customer.name : 'N/A';
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },

    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => (
            <Select defaultValue={DeliveryStatus.PENDING.label} onChange={(value) => handleUpdateDelivery({ status: value })}>
            <Option value={DeliveryStatus.PENDING.label}>{DeliveryStatus.PENDING.label}</Option>
            <Option value={DeliveryStatus.IN_TRANSIT.label}>{DeliveryStatus.IN_TRANSIT.label}</Option>
            <Option value={DeliveryStatus.DELIVERED.label}>{DeliveryStatus.DELIVERED.label}</Option>
          </Select>
        ),
      },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text,record) => (
        <div>
        <Button type="primary" onClick={() => handleEditDelivery(record)}>
        Edit
        </Button>
        <Button type="danger" onClick={() => handleDeleteDelivery(record.id)} style={{ marginLeft: 8 }}>
        Delete
        </Button>
        </div>
        ),
        },
        ];
        
        return (
        <div>
        <Button type="primary" onClick={() => setModalVisible(true)}>
        Add Delivery
        </Button>
        <Table columns={columns} dataSource={deliveries} loading={loading} rowKey="id" />
        <Modal
    title={selectedDelivery ? 'Update Delivery' : 'Add Delivery'}
    visible={modalVisible}
    onCancel={handleModalCancel}
    footer={[
      <Button key="cancel" onClick={handleModalCancel}>
        Cancel
      </Button>,
      <Button
        key="submit"
        type="primary"
        loading={loading}
        onClick={() => form.submit()}
      >
        {selectedDelivery ? 'Update' : 'Add'}
      </Button>,
    ]}
  >
    <Form
      form={form}
      layout="vertical"
      onFinish={selectedDelivery ? handleUpdateDelivery : handleAddDelivery}
    >
      <Form.Item name="customer" label="Customer">
  <Select>
    {customers.map((customer) => (
      <Option value={JSON.stringify(customer)} key={customer.id}>
        {customer.name}
      </Option>
    ))}
  </Select>
</Form.Item>
      <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please enter address' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please select date' }]}>
        <Input type="date" />
      </Form.Item>
      <Form.Item name="status" label="Status">

         <Select>
          <Option value="Pending">Pending</Option>
          <Option value="In Transit">In Transit</Option>
          <Option value="Delivered">Delivered</Option>
        </Select> 
      </Form.Item>
      <Form.Item name="totalAmount" label="Total Amount">
        <Input type="number" min={0} step={0.01} />
      </Form.Item>
    </Form>
  </Modal>
</div>
);
};

export default Delivery;