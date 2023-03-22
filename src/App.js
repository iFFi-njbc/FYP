// import React from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';
// //import Icon from 'antd/lib/icon';
// import { Link, Route, Switch } from 'react-router-dom';
// import logo from './AIA.png';


// import Dashboard from './Components/Dashboard';
// import SalesOrders from './Components/Sales/Orders';
// import SalesInvoice from './Components/Sales/Invoice';
// import SalesDelivery from './Components/Sales/Delivery';
// import PurchaseOrder from './Components/Purchase/Order';
// import PurchaseInvoice from './Components/Purchase/Invoice';
// import PurchaseGoodReceiving from './Components/Purchase/GoodReceiving';
// import POSCheckout from './Components/POS/Checkout';
// import Expense from './Components/Accounts/Expense';
// import JournalEntry from './Components/Accounts/JournalEntry';
// import BankDeposit from './Components/Accounts/BankDeposit';
// import FundsTransfer from './Components/Accounts/FundsTransfer';
// import OtherPayments from './Components/Accounts/OtherPayments';
// import StockMovement from './Components/Inventory/StockMovement';
// import StockAdjustment from './Components/Inventory/StockAdjustment';
// import Assembling from './Components/Manufacturing/Assembling';

// const { Header, Content, Footer} = Layout;

// function App() {
//   return (
//     <Layout className="layout">
      
//       <Header>
   
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
//           <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
//           <Menu.SubMenu key="2" title="Sales">
//             <Menu.Item key="2.1"><Link to="/sales/orders">Orders</Link></Menu.Item>
//             <Menu.Item key="2.2"><Link to="/sales/invoices">Invoices</Link></Menu.Item>
//             <Menu.Item key="2.3"><Link to="/sales/delivery">Delivery</Link></Menu.Item>
//           </Menu.SubMenu>
//           <Menu.SubMenu key="3" title="Purchase">
//             <Menu.Item key="3.1"><Link to="/purchase/orders">Orders</Link></Menu.Item>
//             <Menu.Item key="3.2"><Link to="/purchase/invoices">Invoices</Link></Menu.Item>
//             <Menu.Item key="3.3"><Link to="/purchase/good-receiving">Good Receiving</Link></Menu.Item>
//           </Menu.SubMenu>
//           <Menu.Item key="4"><Link to="/pos/checkout">POS</Link></Menu.Item>
//           <Menu.SubMenu key="5" title="Accounts">
//             <Menu.Item key="5.1"><Link to="/accounts/expense">Expense</Link></Menu.Item>
//             <Menu.Item key="5.2"><Link to="/accounts/journal-entry">Journal Entry</Link></Menu.Item>
//             <Menu.Item key="5.3"><Link to="/accounts/bank-deposit">Bank Deposit</Link></Menu.Item>
//             <Menu.Item key="5.4"><Link to="/accounts/funds-transfer">Funds Transfer</Link></Menu.Item>
//             <Menu.Item key="5.5"><Link to="/accounts/other-payments">Other Payments</Link></Menu.Item>
//           </Menu.SubMenu>
//           <Menu.SubMenu key="6" title="Inventory">
//             <Menu.Item key="6.1"><Link to="/inventory/stock-movement">Stock Movement</Link></Menu.Item>
//             <Menu.Item key="6.2"><Link to="/inventory/stock-adjustment">Stock Adjustment</Link></Menu.Item>
//           </Menu.SubMenu>
// <Menu.Item key="7"><Link to="/manufacturing/assembling">Manufacturing</Link></Menu.Item>
// </Menu>


// </Header>

// <Content style={{ padding: '0 50px' }}>
// <Breadcrumb style={{ margin: '16px 0' }}>
// <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
// <Breadcrumb.Item><Link to="/">Module</Link></Breadcrumb.Item>
// <Breadcrumb.Item>Sub-Module</Breadcrumb.Item>
// </Breadcrumb>
// <div className="site-layout-content">
//  <Switch>
// <Route exact path="/" component={Dashboard} />
// <Route path="/sales/orders" component={SalesOrders} />
// <Route path="/sales/invoices" component={SalesInvoice} />
// <Route path="/sales/delivery" component={SalesDelivery} />
// <Route path="/purchase/orders" component={PurchaseOrder} />
// <Route path="/purchase/invoices" component={PurchaseInvoice} />
// <Route path="/purchase/good-receiving" component={PurchaseGoodReceiving} />
// <Route path="/pos/checkout" component={POSCheckout} />
// <Route path="/accounts/expense" component={Expense} />
// <Route path="/accounts/journal-entry" component={JournalEntry} />
// <Route path="/accounts/bank-deposit" component={BankDeposit} />
// <Route path="/accounts/funds-transfer" component={FundsTransfer} />
// <Route path="/accounts/other-payments" component={OtherPayments} />
// <Route path="/inventory/stock-movement" component={StockMovement} />
// <Route path="/inventory/stock-adjustment" component={StockAdjustment} />
// <Route path="/manufacturing/assembling" component={Assembling} />
// </Switch> 
// </div>
// </Content>
// <Footer style={{ textAlign: 'center' }}>Apparal Industry Automation ©2023 Created by Hiza, Ifrah, Amina and Afsheen</Footer>
// </Layout>
// );
// }

// export default App;


import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
//import Icon from 'antd/lib/icon';
import { Link, Route, Switch } from 'react-router-dom';
import logo from './AIA.png';
import Dashboard from './Components/Dashboard';
import SalesOrders from './Components/Sales/Orders';
import SalesInvoice from './Components/Sales/Invoice';
import SalesDelivery from './Components/Sales/Delivery';
import PurchaseOrder from './Components/Purchase/Order';
import PurchaseInvoice from './Components/Purchase/Invoice';
import PurchaseGoodReceiving from './Components/Purchase/GoodReceiving';
import POSCheckout from './Components/POS/Checkout';
import Expense from './Components/Accounts/Expense';
import JournalEntry from './Components/Accounts/JournalEntry';
import BankDeposit from './Components/Accounts/BankDeposit';
import FundsTransfer from './Components/Accounts/FundsTransfer';
import OtherPayments from './Components/Accounts/OtherPayments';
import StockMovement from './Components/Inventory/StockMovement';
import StockAdjustment from './Components/Inventory/StockAdjustment';
import Assembling from './Components/Manufacturing/Assembling';
import Customers from './Components/Users/Customers';


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;


function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" style={{ height: '120px', margin: '50px' }}>
          <img src={logo} alt="AIA Logo" style={{ maxHeight: '100%', maxWidth: '100%' }} />
        </div>
 <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
          <Menu.SubMenu key="2" title="Sales">
            <Menu.Item key="2.1"><Link to="/sales/orders">Orders</Link></Menu.Item>
            <Menu.Item key="2.2"><Link to="/sales/invoices">Invoices</Link></Menu.Item>
            <Menu.Item key="2.3"><Link to="/sales/delivery">Delivery</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="3" title="Purchase">
            <Menu.Item key="3.1"><Link to="/purchase/orders">Orders</Link></Menu.Item>
            <Menu.Item key="3.2"><Link to="/purchase/invoices">Invoices</Link></Menu.Item>
            <Menu.Item key="3.3"><Link to="/purchase/good-receiving">Good Receiving</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="4"><Link to="/pos/checkout">POS</Link></Menu.Item>
          <Menu.SubMenu key="5" title="Accounts">
            <Menu.Item key="5.1"><Link to="/accounts/expense">Expense</Link></Menu.Item>
            <Menu.Item key="5.2"><Link to="/accounts/journal-entry">Journal Entry</Link></Menu.Item>
            <Menu.Item key="5.3"><Link to="/accounts/bank-deposit">Bank Deposit</Link></Menu.Item>
            <Menu.Item key="5.4"><Link to="/accounts/funds-transfer">Funds Transfer</Link></Menu.Item>
            <Menu.Item key="5.5"><Link to="/accounts/other-payments">Other Payments</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="6" title="Inventory">
            <Menu.Item key="6.1"><Link to="/inventory/stock-movement">Stock Movement</Link></Menu.Item>
            <Menu.Item key="6.2"><Link to="/inventory/stock-adjustment">Stock Adjustment</Link></Menu.Item>
          </Menu.SubMenu>
{/* <Menu.Item key="7"><Link to="/manufacturing/assembling">Manufacturing</Link></Menu.Item> */}

            <Menu.SubMenu key="7" title="Users">

                  <Menu.Item key="7.1"><Link to="/users/customers">Customers</Link></Menu.Item>

              </Menu.SubMenu>
              <Menu.Item key="8"><Link to="/manufacturing/assembling">Manufacturing</Link></Menu.Item>

</Menu>


  </Sider>
  <Layout>
    <Header style={{ background: '#fff', padding: 0 }} />
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Switch>
<Route exact path="/" component={Dashboard} />
<Route path="/sales/orders" component={SalesOrders} />
<Route path="/sales/invoices" component={SalesInvoice} />
<Route path="/sales/delivery" component={SalesDelivery} />
<Route path="/purchase/orders" component={PurchaseOrder} />
<Route path="/purchase/invoices" component={PurchaseInvoice} />
<Route path="/purchase/good-receiving" component={PurchaseGoodReceiving} />
<Route path="/pos/checkout" component={POSCheckout} />
<Route path="/accounts/expense" component={Expense} />
<Route path="/accounts/journal-entry" component={JournalEntry} />
<Route path="/accounts/bank-deposit" component={BankDeposit} />
<Route path="/accounts/funds-transfer" component={FundsTransfer} />
<Route path="/accounts/other-payments" component={OtherPayments} />
<Route path="/inventory/stock-movement" component={StockMovement} />
<Route path="/inventory/stock-adjustment" component={StockAdjustment} />
<Route path="/manufacturing/assembling" component={Assembling} />
<Route path="/users/customers" component={Customers} />
</Switch>

    </Content>
    <Footer style={{ textAlign: 'center' }}>Apparel Industry Automation ©2023 Created by Ifrah, Hiza, Afsheen and Amina</Footer>
  </Layout>
</Layout>
);
};

export default App;
