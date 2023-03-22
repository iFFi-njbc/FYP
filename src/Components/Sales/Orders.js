// import React, { useState, useEffect } from 'react';
// import { Button, Modal, Form, Input, Table, Space } from 'antd';
// import axios from 'axios';

// const { Item } = Form;

// const Orders = () => {
//   const [form] = Form.useForm();
//   const [orders, setOrders] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingOrder, setEditingOrder] = useState({});

//   useEffect(() => {
//     // Get orders from API and update state
//     const fetchOrders = async () => {
//       const response = await axios.get('/api/orders');
//       setOrders(response.data);
//     };
//     fetchOrders();
//   }, []);

//   const addOrder = async (values) => {
//     // Add new order to API and update state
//     const response = await axios.post('/api/orders', values);
//     setOrders([...orders, response.data]);
//     setIsModalVisible(false);
//   };

//   const deleteOrder = async (id) => {
//     // Delete order from API and update state
//     const response = await axios.delete(`/api/orders/${id}`);
//     if (response.status === 204) {
//       setOrders(orders.filter((order) => order.id !== id));
//     }
//   };

//   const updateOrder = async (id, values) => {
//     // Update order in API and update state
//     const response = await axios.put(`/api/orders/${id}`, values);
//     if (response.status === 200) {
//       const updatedOrder = { ...editingOrder, ...values };
//       setOrders(orders.map((order) => (order.id === id ? updatedOrder : order)));
//       setIsEditing(false);
//     }
//   };

//   const handleEditClick = (record) => {
//     // Set editing order and open modal for editing
//     setEditingOrder(record);
//     setIsEditing(true);
//     setIsModalVisible(true);
//   };

//   const handleAddClick = () => {
//     // Reset form and open modal for adding
//     form.resetFields();
//     setIsEditing(false);
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     // Call appropriate function based on whether we are editing or adding
//     if (isEditing) {
//       form.validateFields().then((values) => {
//         updateOrder(editingOrder.id, values);
//         form.resetFields();
//       });
//     } else {
//       form.validateFields().then((values) => {
//         addOrder(values);
//         form.resetFields();
//       });
//     }
//   };

//   const handleCancel = () => {
//     // Close modal and reset form
//     setIsModalVisible(false);
//     form.resetFields();
//   };

//   const generateInvoice = async (id) => {
//     // Generate invoice for order with given ID
//     const response = await axios.post(`/api/orders/${id}/invoice`);
//     if (response.status === 200) {
//       // Open generated invoice in new window
//       window.open(response.data.invoiceUrl, '_blank');
//     }
//   };

//   const columns = [
//     {
//       title: 'Order ID',
//       dataIndex: 'id',
//     },
//     {
//       title: 'Customer Name',
//       dataIndex: 'customer_name',
//     },
//     {
//       title: 'Product Name',
//       dataIndex: 'product_name',
//     },
//     {
//       title: 'Quantity',
//       dataIndex: 'quantity',
//     },
//     {
//       title: 'Total Price',
//       dataIndex: 'total_price',
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_, record) => (
//         <Space size="middle">
//         <Button type="link" onClick={() => handleEditClick(record)}>
//         Edit
//         </Button>
//         <Button type="link" danger onClick={() => deleteOrder(record.id)}>
//         Delete
//         </Button>
//         <Button type="link" onClick={() => generateInvoice(record.id)}>
//         Generate Invoice
//         </Button>
//         </Space>
//         ),
//         },
//         ];
        
//         return (
//         <>
//         <Button type="primary" onClick={handleAddClick}>
//         Add Order
//         </Button>
//         <Table dataSource={orders} columns={columns} />
//         <Modal
//         title={isEditing ? 'Edit Order' : 'Add Order'}
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         >
//         <Form form={form} layout="vertical">
//         <Item
//         label="Customer Name"
//         name="customer_name"
//         initialValue={editingOrder.customer_name}
//         rules={[
//         {
//         required: true,
//         message: 'Please enter customer name',
//         },
//         ]}
//         >
//         <Input />
//         </Item>
//         <Item
//         label="Product Name"
//         name="product_name"
//         initialValue={editingOrder.product_name}
//         rules={[
//         {
//         required: true,
//         message: 'Please enter product name',
//         },
//         ]}
//         >
//         <Input />
//         </Item>
//         <Item
//         label="Quantity"
//         name="quantity"
//         initialValue={editingOrder.quantity}
//         rules={[
//         {
//         required: true,
//         message: 'Please enter quantity',
//         },
//         ]}
//         >
//         <Input type="number" />
//         </Item>
//         <Item
//         label="Total Price"
//         name="total_price"
//         initialValue={editingOrder.total_price}
//         rules={[
//         {
//         required: true,
//         message: 'Please enter total price',
//         },
//         ]}
//         >
//         <Input type="number" />
//         </Item>
//         </Form>
//         </Modal>
//         </>
//         );
//         };
        
//         export default Orders;
        
        
  //-------------------------------------------------------------------------------------------------------------------------      
        

// import React, { useState, useEffect } from 'react';
// import { Button, Modal, Form, Input, Table, Space } from 'antd';
// import axios from 'axios';

// const { Item } = Form;

// const Orders = () => {
//   const [form] = Form.useForm();
//   const [orders, setOrders] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingOrder, setEditingOrder] = useState({});

//   useEffect(() => {
//     // Fetch all orders from the API and update state
//     const fetchOrders = async () => {
//       const response = await axios.get('http://localhost:8080/api/orders');
//       setOrders(response.data);
//     };
//     fetchOrders();
//   }, []);

//   const addOrder = async (values) => {
//     // Add new order to the API and update state
//     const response = await axios.post('http://localhost:8080/api/orders', values);
//     setOrders([...orders, response.data]);
//     setIsModalVisible(false);
//   };

//   const deleteOrder = async (id) => {
//     // Delete order from the API and update state
//     const response = await axios.delete(`http://localhost:8080/api/orders/${id}`);
//     if (response.status === 204) {
//       setOrders(orders.filter((order) => order.id !== id));
//     }
//   };

//   const updateOrder = async (id, values) => {
//     // Update order in the API and update state
//     const response = await axios.put(`http://localhost:8080/api/orders/${id}`, values);
//     if (response.status === 200) {
//       const updatedOrder = { ...editingOrder, ...values };
//       setOrders(orders.map((order) => (order.id === id ? updatedOrder : order)));
//       setIsEditing(false);
//     }
//   };

//   const handleEditClick = (record) => {
//     // Set editing order and open modal for editing
//     setEditingOrder(record);
//     setIsEditing(true);
//     setIsModalVisible(true);
//   };

//   const handleAddClick = () => {
//     // Reset form and open modal for adding
//     form.resetFields();
//     setIsEditing(false);
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     // Call appropriate function based on whether we are editing or adding
//     if (isEditing) {
//       form.validateFields().then((values) => {
//         updateOrder(editingOrder.id, values);
//         form.resetFields();
//       });
//     } else {
//       form.validateFields().then((values) => {
//         addOrder(values);
//         form.resetFields();
//       });
//     }
//   };

//   const handleCancel = () => {
//     // Close modal and reset form
//     setIsModalVisible(false);
//     form.resetFields();
//   };

//   const generateInvoice = async (id) => {
//     // Generate invoice for order with given ID
//     const response = await axios.post(`http://localhost:8080/api/orders/${id}/invoice`);
//     if (response.status === 200) {
//       // Open generated invoice in new window
//       window.open(response.data.invoiceUrl, '_blank');
//     }
//   };

//   const columns = [
//     {
//       title: 'Order ID',
//       dataIndex: 'id',
//     },
//     {
//       title: 'Customer Name',
//       dataIndex: 'customerName',
//     },
//     {
//       title: 'Product Name',
//       dataIndex: 'productName',
//     },
//     {
//       title: 'Quantity',
//       dataIndex: 'quantity',
//     },
//     {
//       title: 'Total Price',
//        dataIndex: 'total_price',
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_, record) => (
//         <Space size="middle">
//           <Button type="link" onClick={() => handleEditClick(record)}>
//             Edit
//           </Button>
//           <Button type="link" onClick={() => deleteOrder(record.id)}>
//             Delete
//           </Button>
//           <Button type="link" onClick={() => generateInvoice(record.id)}>
//             Generate Invoice
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//   <div>
//   <Button type="primary" onClick={handleAddClick}>
//   Add Order
//   </Button>
//   <Modal
//   title={isEditing ? 'Edit Order' : 'Add Order'}
//   visible={isModalVisible}
//   onOk={handleOk}
//   onCancel={handleCancel}
//   okText={isEditing ? 'Save' : 'Create'}
//   >
//   <Form form={form} layout="vertical">
//   <Item
//   name="customerName"
//   label="Customer Name"
//   rules={[{ required: true, message: 'Please enter customer name' }]}
//   initialValue={editingOrder.customerName}
//   >
//   <Input />
//   </Item>
//   <Item
//   name="productName"
//   label="Product Name"
//   rules={[{ required: true, message: 'Please enter product name' }]}
//   initialValue={editingOrder.productName}
//   >
//   <Input />
//   </Item>
//   <Item
//   name="quantity"
//   label="Quantity"
//   rules={[{ required: true, message: 'Please enter quantity' }]}
//   initialValue={editingOrder.quantity}
//   >
//   <Input type="number" />
//   </Item>
//   <Item
//   name="totalPrice"
//   label="Total Price"
//   rules={[{ required: true, message: 'Please enter total price' }]}
//   initialValue={editingOrder.totalPrice}
//   >
//   <Input type="number" />
//   </Item>
//   </Form>
//   </Modal>
//   <Table columns={columns} dataSource={orders} rowKey="id" />
//   </div>
//   );
//   };
  
//   export default Orders;    





import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input, Table, Space } from 'antd';
import axios from 'axios';



const { Item } = Form;

const Orders = () => {
  const [form] = Form.useForm();
  const [orders, setOrders] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingOrder, setEditingOrder] = useState({});

  useEffect(() => {
    // Fetch all orders from the API and update state
    const fetchOrders = async () => {
      const response = await axios.get('http://localhost:8080/api/orders');
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  const addOrder = async (values) => {
    // Calculate total price and add new order to the API and update state
    const totalPrice = values.quantity * values.unitPrice;
    const response = await axios.post('http://localhost:8080/api/orders', { ...values, totalPrice });
    setOrders([...orders, response.data]);
    setIsModalVisible(false);
  };

  const deleteOrder = async (id) => {
    // Delete order from the API and update state
    const response = await axios.delete(`http://localhost:8080/api/orders/${id}`);
    if (response.status === 204) {
      setOrders(orders.filter((order) => order.id !== id));
    }
  };

  const updateOrder = async (id, values) => {
    // Calculate total price and update order in the API and update state
    const totalPrice = values.quantity * values.unitPrice;
    const response = await axios.put(`http://localhost:8080/api/orders/${id}`, { ...values, totalPrice });
    if (response.status === 200) {
      const updatedOrder = { ...editingOrder, ...values, totalPrice };
      setOrders(orders.map((order) => (order.id === id ? updatedOrder : order)));
      setIsEditing(false);
    }
  };

  const handleEditClick = (record) => {
    // Set editing order and open modal for editing
    setEditingOrder(record);
    setIsEditing(true);
    setIsModalVisible(true);
  };

  const handleAddClick = () => {
    // Reset form and open modal for adding
    form.resetFields();
    setIsEditing(false);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Call appropriate function based on whether we are editing or adding
    if (isEditing) {
      form.validateFields().then((values) => {
        updateOrder(editingOrder.id, values);
        form.resetFields();
      });
    } else {
      form.validateFields().then((values) => {
        addOrder(values);
        form.resetFields();
      });
    }
  };

  const handleCancel = () => {
    // Close modal and reset form
    setIsModalVisible(false);
    form.resetFields();
  };

  const generateInvoice = async (id) => {
    // Generate invoice for order with given ID
   // Generate invoice for order with given ID
    const response = await axios.post(`http://localhost:8080/api/orders/${id}/invoice`);
    if (response.status === 200) {
    window.open(response.data.invoiceUrl, '_blank');
    }
    };


    
    const columns = [
    {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    },
    {
    title: 'Customer Name',
    dataIndex: 'customerName',
    key: 'customerName',
    },
    {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName',
    },
    {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    },
    {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    },
    {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
    <Space size="middle">
    <Button type="primary" onClick={() => handleEditClick(record)}>Edit</Button>
    <Button type="danger" onClick={() => deleteOrder(record.id)}>Delete</Button>
    <Button onClick={() => generateInvoice(record.id)}>Generate Invoice</Button>
    </Space>
    ),
    },
    ];
    
    return (
    <div>
    <Button type="primary" onClick={handleAddClick}>Add Order</Button>
    <Table dataSource={orders} columns={columns} rowKey="id" />
    <Modal title={isEditing ? 'Edit Order' : 'Add Order'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <Form form={form} initialValues={editingOrder}>
    <Item label="Customer Name" name="customerName" rules={[{ required: true, message: 'Please input customer name!' }]}>
    <Input />
    </Item>
    <Item label="Product Name" name="productName" rules={[{ required: true, message: 'Please input product name!' }]}>
    <Input />
    </Item>
    <Item label="Quantity" name="quantity" rules={[{ required: true, message: 'Please input quantity!' }]}>
    <Input type="number" min={1} />
    </Item>
    <Item label="Unit Price" name="unitPrice" rules={[{ required: true, message: 'Please input unit price!' }]}>
    <Input type="number" min={0} step={0.01} />
    </Item>
    </Form>
    </Modal>
    </div>
    );
    };
    
    export default Orders;
