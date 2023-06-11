// import React, { useState } from 'react';
// import { Form, Radio, Input, Button, Row, Upload, Col, DatePicker, Select, Table, Space, Checkbox, Divider, Card } from 'antd';

// const { Option } = Select;

// const ReceivedMoneyForm = (props) => {
//   const invoice = props.location.state.invoice;
//   const [form] = Form.useForm();
//   const [savedData, setSavedData] = useState(null);

//   const onFinish = (values) => {
//     console.log('Form values:', values);
//     // Add your logic to handle form submission here
//     setSavedData(values);
//   };

//   const onClose = () => {
//     // Add your logic to handle form closing here
//     form.resetFields();
//   };

//   const onContinueEdit = () => {
//     form.setFieldsValue(savedData);
//   };

//   const columns = [
//     {
//       title: 'Payment Mode',
//       dataIndex: 'payment',
//       key: 'payment',
//     },
//     {
//       title: 'Account',
//       dataIndex: 'account',
//       key: 'account',
//     },
//     {
//       title: 'Reference',
//       dataIndex: 'reference',
//       key: 'reference',
//     },
//     {
//       title: 'Bank Name',
//       dataIndex: 'bankname',
//       key: 'bankname',
//     },
//     {
//       title: 'Instrument No.',
//       dataIndex: 'instrumentno',
//       key: 'instrumentno',
//     },
//     {
//       title: 'Instrument Date',
//       dataIndex: 'instrumentdate',
//       key: 'instrumentdate',
//     },
//     {
//       title: 'Amount',
//       dataIndex: 'amount',
//       key: 'amount',
//     },
//     {
//       title: 'Action',
//       dataIndex: 'action',
//       key: 'action',
//     },
//   ];

//   const data = [
//     {
//       key: '1',
//       payment: (
//         <Form.Item>
//           <Select style={{ width: '150px' }} placeholder="Search payment mode">
//             <Option value="option1">Mode1</Option>
//             <Option value="option2">Mode2</Option>
//             <Option value="option3">Mode3</Option>
//           </Select>
//         </Form.Item>
//       ),
//       account: (
//         <Select style={{ width: '150px' }} placeholder="Search account type">
//           <Option value="option1">account1</Option>
//           <Option value="option2">account2</Option>
//           <Option value="option3">account3</Option>
//         </Select>
//       ),
//       reference: <Input placeholder="reference" />,
//       bankname: <Input placeholder="Bank name" />,
//       instrumentno: <Input placeholder="Instrument no." />,
//       instrumentdate: <DatePicker style={{ width: '100px' }} />,
//       amount: <Input type="number" placeholder="Amount" />,
//       action: (
//         <Radio.Group>
//           <Radio value="action">Act</Radio>
//           <Radio value="subtract">Reject</Radio>
//         </Radio.Group>
//       ),
//     },

//     // Add more data objects as needed
//   ];

//   const columns2 = [
//     {
//       dataIndex: 'action',
//       key: 'action',
//     },
//     {
//       title: 'Description',
//       dataIndex: 'description',
//       key: 'description',
//     },
//     {
//       title: 'Date',
//       dataIndex: 'date',
//       key: 'date',
//     },
//     {
//       title: 'Due Date',
//       dataIndex: 'duedate',
//       key: 'duedate',
//     },
//     {
//       title: 'Total Amount',
//       dataIndex: 'totalamount',
//       key: 'totalamount',
//     },
//     {
//       title: 'Adjusted Amount',
//       dataIndex: 'adjustamount',
//       key: 'adjustamount',
//     },
//     {
//       title: 'Balance Amount',
//       dataIndex: 'balanceamount',
//       key: 'balanceamount',
//     },
//     {
//       title: 'Allocate',
//       dataIndex: 'allocate',
//       key: 'allocate',
//     },
//   ];

//   const data2 = [
//     {
//       action: (
//         <Form.Item name="optional" valuePropName="checked" style={{ marginBottom: '4px' }}>
//           <Checkbox></Checkbox>
//         </Form.Item>
//       ),
//     },

//     // Add more data objects as needed
//   ];

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
//       <Form form={form} onFinish={onFinish} layout="vertical" style={{ width: '800px' }}>
//         <h1 style={{ textAlign: 'left', marginBottom: '5px', marginTop: '150px', fontFamily: 'sans-serif' }}>
//           Received Money
//         </h1>
//         <hr style={{ borderTop: '1px solid black', width: '1000px' }} />
//         <div style={{ display: 'flex', justifyContent: 'space-between', width: '800px' }}>
//           <Form.Item
//             label="Customer"
//             name="customer"
//             rules={[{ required: true, message: 'Please select a customer' }]}
//           >
//             <Select placeholder="Type to search customer" style={{ width: '250px' }}>
//               <Option value="CuStomer1">Customer 1</Option>
//               <Option value="CuStomer2">Customer 2</Option>
//               <Option value="CuStomer3">Customer 3</Option>
//             </Select>
//           </Form.Item>

//           <Form.Item
//             label="Number"
//             name="number"
//             rules={[
//               { required: true, message: 'Please enter Received Money number' },
//               { pattern: /^RM-\d+$/, message: 'Invalid Received Money number. It should start with "RM-" and followed by digits' },
//             ]}
//           >
//             <Input placeholder="Enter Received Money number (e.g., RM-123)" style={{ width: '250px', marginLeft: 5 }} />
//           </Form.Item>

//           <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select the date' }]}>
//             <DatePicker style={{ width: '250px', marginLeft: 5 }} />
//           </Form.Item>

//           <Form.Item label="Reference Number" name="referenceNumber">
//             <Input placeholder="Enter reference number" style={{ width: '250px', marginLeft: 5 }} />
//           </Form.Item>
//         </div>

//         <div style={{ marginTop: '4px', width: '1000px' }}>
//           <Table columns={columns} dataSource={data} bordered size="small" pagination={false} />

//           <Form.Item name="optional" valuePropName="checked" style={{ marginBottom: '4px' }}>
//             <Checkbox>Account Adjustments (optional)</Checkbox>
//           </Form.Item>
//         </div>

//         <div style={{ display: 'flex', justifyContent: 'space-between', width: '800px' }}>
//           <Input.TextArea placeholder="Comments" style={{ width: '600px' }} />
//           <Row>
//             <Col span={20} label="Net (PKR)">
//               <span>Net(PKR): </span>
//             </Col>
//             <Col span={1} name="cost">
//               <span>1000</span> {/* Replace with your cost value */}
//             </Col>
//           </Row>
//         </div>

//         <Form.Item label={<strong>Attachments</strong>} name="files" style={{ width: '500px' }}>
//           <Card style={{ height: '15vh', width: '700px' }}>
//             <Form.Item label="Browse your files here">
//               <Upload>
//                 <Button type="primary">Browse Files</Button>
//               </Upload>
//             </Form.Item>
//           </Card>
//         </Form.Item>

//         <Divider />
//         <div style={{ marginTop: '4px', width: '1000px' }}>
//           <Form.Item name="optional" valuePropName="checked" style={{ marginBottom: '4px' }}>
//             <Checkbox>Make auto settlements</Checkbox>
//           </Form.Item>
//           <Table columns={columns2} dataSource={data2} bordered size="small" style={{ width: '1000px' }} pagination={false} />
//         </div>
//         <Divider />
//         <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ textAlign: 'right', marginLeft: '400px' }}>
//           <Space>
//             <Button onClick={onClose}>Close</Button>

//             <Button type="primary" onClick={onContinueEdit}>
//               Save and Continue Edit
//             </Button>
//           </Space>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default ReceivedMoneyForm;
