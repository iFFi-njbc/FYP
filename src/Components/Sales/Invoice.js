
import React, { useState } from "react";
import { Button, Form, Input, Select, Table } from "antd";

const { Option } = Select;

const Invoice = () => {
  const [form] = Form.useForm();
  const [items, setItems] = useState([]);

  const columns = [
    {
      title: "Item Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];

  const handleAddItem = (values) => {
    const newItem = {
      key: items.length + 1,
      name: values.name,
      price: values.price,
      quantity: values.quantity,
      total: values.price * values.quantity,
    };
    setItems([...items, newItem]);
    form.resetFields();
  };

  const handleRemoveItem = (key) => {
    const newItems = items.filter((item) => item.key !== key);
    setItems(newItems);
  };

  const handleTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.total;
    });
    return total;
  };

  return (
    <div>
      <h1>Invoice</h1>
      <Form layout="inline" form={form} onFinish={handleAddItem}>
        <Form.Item
          label="Item Name"
          name="name"
          rules={[{ required: true, message: "Please input item name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input item price!" }]}
        >
          <Input type="number" min="0" step="0.01" />
        </Form.Item>
        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[{ required: true, message: "Please input item quantity!" }]}
        >
          <Input type="number" min="0" step="1" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Item
          </Button>
        </Form.Item>
      </Form>
      <Table
        dataSource={items}
        columns={columns}
        pagination={false}
        rowKey={(item) => item.key}
        footer={() => <h3>Total: {handleTotal()}</h3>}
      />
    </div>
  );
};

export default Invoice;


