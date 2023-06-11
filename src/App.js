import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import logo from './AIA.png';
import Dashboard from './Components/Dashboard';
import SalesOrders from './Components/Sales/Orders';
import SalesInvoice from './Components/Sales/Invoice';
import SalesDelivery from './Components/Sales/Delivery';
import PurchaseOrder from './Components/Purchase/Order';
import AddPurchaseOrder from './Components/Purchase/AddOrder';

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
import Warehouse from './Components/Users/Warehouse';
import AddOrder from './Components/Sales/AddOrder';
import AddDelivery from './Components/Sales/AddDelivery';
import ReceivedMoney from './Components/Sales/ReceivedMoney';

import AddProduct from './Components/Users/AddProduct';
import Product from './Components/Users/Product';
import ViewProduct from './Components/Users/ViewProduct';

import Vendor from './Components/Users/Vendor';
import AddVendor from './Components/Users/AddVendor';

import AddInvoice from './Components/Sales/AddInvoice'; // import AddInvoice component
import AddPurchaseInvoice from './Components/Purchase/AddInvoice';
import AddPurchaseGoodReceiving from './Components/Purchase/AddGoodReceiving';

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
            <Menu.Item key="2.4"><Link to="/sales/received-money">ReceivedMoney</Link></Menu.Item>
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
<Menu.Item key="7"><Link to="/manufacturing/assembling">Manufacturing</Link></Menu.Item>
<Menu.SubMenu key="8" title="Users">
<Menu.Item key="8.1"><Link to="/users/customers">Customers</Link></Menu.Item>
<Menu.Item key="8.2"><Link to="/users/warehouse">Warehouse</Link></Menu.Item>
<Menu.Item key="8.4"><Link to="/users/products">Products</Link></Menu.Item>
<Menu.Item key="8.3"><Link to="/users/vendors">Vendors</Link></Menu.Item>
</Menu.SubMenu>
</Menu>
</Sider>
<Layout>
<Header style={{ padding: '0 16px' }}>
<Breadcrumb style={{ margin: '16px 0' }}>
<Breadcrumb.Item>Home</Breadcrumb.Item>
<Breadcrumb.Item>Dashboard</Breadcrumb.Item>
</Breadcrumb>
</Header>
<Content style={{ margin: '0 16px' }}>
<div style={{ padding: 24, minHeight: 360 }}>
<Switch>
<Route exact path="/" component={Dashboard} />
<Route exact path="/sales/orders" component={SalesOrders} />
<Route exact path="/sales/invoices" component={SalesInvoice} />
<Route exact path="/sales/delivery" component={SalesDelivery} />
<Route exact path="/sales/received-money" component={ReceivedMoney} />
<Route exact path="/purchase/orders" component={PurchaseOrder} />
<Route exact path="/purchase/add-order" component={AddPurchaseOrder} />
<Route exact path="/purchase/add-invoice" component={AddPurchaseInvoice} />
<Route exact path="/purchase/add-goodreceiving" component={AddPurchaseGoodReceiving} />

<Route exact path="/purchase/invoices" component={PurchaseInvoice} />
<Route exact path="/purchase/good-receiving" component={PurchaseGoodReceiving} />
<Route exact path="/pos/checkout" component={POSCheckout} />
<Route exact path="/accounts/expense" component={Expense} />
<Route exact path="/accounts/journal-entry" component={JournalEntry} />
<Route exact path="/accounts/bank-deposit" component={BankDeposit} />
<Route exact path="/accounts/funds-transfer" component={FundsTransfer} />
<Route exact path="/accounts/other-payments" component={OtherPayments} />
<Route exact path="/inventory/stock-movement" component={StockMovement} />
<Route exact path="/inventory/stock-adjustment" component={StockAdjustment} />
<Route exact path="/manufacturing/assembling" component={Assembling} />
<Route exact path="/users/customers" component={Customers} />
<Route exact path="/users/warehouse" component={Warehouse} />
<Route exact path="/sales/add-order" component={AddOrder} />
<Route exact path="/sales/add-invoice" component={AddInvoice} /> // add route for AddInvoice component
<Route exact path="/sales/add-delivery" component={AddDelivery} />
<Route exact path="/sales/add-order" component={AddOrder} />
<Route exact path="/users/products" component={Product} />
<Route path="/add-product/:id" component={AddProduct} />
<Route exact path="/users/vendors" component={Vendor} />
<Route exact path="/users/add-vendor" component={AddVendor} />

<Route exact path="/users/view-product/:id" component={ViewProduct} />
</Switch>
</div>
</Content>
<Footer style={{ textAlign: 'center' }}>APPAREL INDUSTRY AUTOMATION Design  ©2023 Created by AMINA, HIZA, IFRAH AND AFSHEEN</Footer>
</Layout>
</Layout>
);
}

export default App;


// import React, { useState } from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import { Link, Route, Switch, useHistory } from 'react-router-dom';
// import logo from './AIA.png';
// import LoginForm from './Components/Auth/LoginForm';
// import Dashboard from './Components/Dashboard';
// import SalesOrders from './Components/Sales/Orders';
// import SalesInvoice from './Components/Sales/Invoice';
// import SalesDelivery from './Components/Sales/Delivery';
// import PurchaseOrder from './Components/Purchase/Order';
// import AddPurchaseOrder from './Components/Purchase/AddOrder';
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
// import Customers from './Components/Users/Customers';
// import Warehouse from './Components/Users/Warehouse';
// import AddOrder from './Components/Sales/AddOrder';
// import AddDelivery from './Components/Sales/AddDelivery';
// import ReceivedMoney from './Components/Sales/ReceivedMoney';
// import AddProduct from './Components/Users/AddProduct';
// import Product from './Components/Users/Product';
// import ViewProduct from './Components/Users/ViewProduct';
// import Vendor from './Components/Users/Vendor';
// import AddVendor from './Components/Users/AddVendor';
// import AddInvoice from './Components/Sales/AddInvoice';

// const { Header, Sider, Content, Footer } = Layout;
// const { SubMenu } = Menu;

// const getEmailRole = (email) => {
//   const emailParts = email.split('@');
//   const domain = emailParts[emailParts.length - 1].toLowerCase();

//   if (domain === 'adminAIA.pk') {
//     return 'admin';
//   } else if (domain === 'accountsAIA.pk') {
//     return 'accounts';
//   } else if (domain === 'salesAIA.pk') {
//     return 'sales';
//   } else if (domain === 'inventoryAIA.pk') {
//     return 'inventory';
//   } else if (domain === 'purchaseAIA.pk') {
//     return 'purchase';
//   }

//   return '';
// };

// const isAuthorized = (allowedRoles, email) => {
//   const userRole = getEmailRole(email);
//   return allowedRoles.includes(userRole);
// };

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
//   const [userEmail, setUserEmail] = useState(''); // Track user email
//   const history = useHistory();

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserEmail('');
//     history.push('/login');
//   };

//   const handleLogin = (email) => {
//     setIsLoggedIn(true);
//     setUserEmail(email);
//     history.push('/');
//   };

//   const checkAuthorization = (allowedRoles, email) => {
//     return isAuthorized(allowedRoles, email);
//   };

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       {!isLoggedIn ? (
//         <Route exact path="/login">
//           <LoginForm onLogin={handleLogin} />
//         </Route>
//       ) : (
//         <>
//           <Sider>
//             <div className="logo" style={{ height: '120px', margin: '50px' }}>
//               <img src={logo} alt="AIA Logo" style={{ maxHeight: '100%', maxWidth: '100%' }} />
//             </div>
//             <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//               <Menu.Item key="1">
//                 <Link to="/">Dashboard</Link>
//               </Menu.Item>
//               {checkAuthorization(['admin', 'sales'], userEmail) && (
//                 <SubMenu key="2" title="Sales">
//                   <Menu.Item key="2.1">
//                     <Link to="/sales/orders">Orders</Link>
//                   </Menu.Item>
//                   <Menu.Item key="2.2">
//                     <Link to="/sales/invoice">Invoice</Link>
//                   </Menu.Item>
//                   <Menu.Item key="2.3">
//                     <Link to="/sales/delivery">Delivery</Link>
//                   </Menu.Item>
//                   {checkAuthorization(['admin'], userEmail) && (
//                     <Menu.Item key="2.4">
//                       <Link to="/sales/add-order">Add Order</Link>
//                     </Menu.Item>
//                   )}
//                 </SubMenu>
//               )}
//               {checkAuthorization(['admin', 'purchase'], userEmail) && (
//                 <SubMenu key="3" title="Purchase">
//                   <Menu.Item key="3.1">
//                     <Link to="/purchase/order">Order</Link>
//                   </Menu.Item>
//                   <Menu.Item key="3.2">
//                     <Link to="/purchase/invoice">Invoice</Link>
//                   </Menu.Item>
//                   <Menu.Item key="3.3">
//                     <Link to="/purchase/good-receiving">Good Receiving</Link>
//                   </Menu.Item>
//                   {checkAuthorization(['admin'], userEmail) && (
//                     <Menu.Item key="3.4">
//                       <Link to="/purchase/add-order">Add Order</Link>
//                     </Menu.Item>
//                   )}
//                 </SubMenu>
//               )}
//               {checkAuthorization(['admin', 'accounts'], userEmail) && (
//                 <SubMenu key="4" title="Accounts">
//                   <Menu.Item key="4.1">
//                     <Link to="/accounts/expense">Expense</Link>
//                   </Menu.Item>
//                   <Menu.Item key="4.2">
//                     <Link to="/accounts/journal-entry">Journal Entry</Link>
//                   </Menu.Item>
//                   <Menu.Item key="4.3">
//                     <Link to="/accounts/bank-deposit">Bank Deposit</Link>
//                   </Menu.Item>
//                   <Menu.Item key="4.4">
//                     <Link to="/accounts/funds-transfer">Funds Transfer</Link>
//                   </Menu.Item>
//                   <Menu.Item key="4.5">
//                     <Link to="/accounts/other-payments">Other Payments</Link>
//                   </Menu.Item>
//                 </SubMenu>
//               )}
//               {checkAuthorization(['admin', 'inventory'], userEmail) && (
//                 <SubMenu key="5" title="Inventory">
//                   <Menu.Item key="5.1">
//                     <Link to="/inventory/stock-movement">Stock Movement</Link>
//                   </Menu.Item>
//                   <Menu.Item key="5.2">
//                     <Link to="/inventory/stock-adjustment">Stock Adjustment</Link>
//                   </Menu.Item>
//                 </SubMenu>
//               )}
//               {checkAuthorization(['admin'], userEmail) && (
//                 <SubMenu key="6" title="Manufacturing">
//                   <Menu.Item key="6.1">
//                     <Link to="/manufacturing/assembling">Assembling</Link>
//                   </Menu.Item>
//                 </SubMenu>
//               )}
//               <SubMenu key="7" title="Users">
//                 <Menu.Item key="7.1">
//                   <Link to="/users/customers">Customers</Link>
//                 </Menu.Item>
//                 <Menu.Item key="7.2">
//                   <Link to="/users/warehouse">Warehouse</Link>
//                 </Menu.Item>
//                 {checkAuthorization(['admin'], userEmail) && (
//                   <>
//                     <Menu.Item key="7.3">
//                       <Link to="/users/add-product">Add Product</Link>
//                     </Menu.Item>
//                     <Menu.Item key="7.4">
//                       <Link to="/users/product">Product</Link>
//                     </Menu.Item>
//                     <Menu.Item key="7.5">
//                       <Link to="/users/vendor">Vendor</Link>
//                     </Menu.Item>
//                     <Menu.Item key="7.6">
//                       <Link to="/users/add-vendor">Add Vendor</Link>
//                     </Menu.Item>
//                   </>
//                 )}
//               </SubMenu>
//               {checkAuthorization(['sales'], userEmail) && (
//                 <SubMenu key="8" title="Sales">
//                   <Menu.Item key="8.1">
//                     <Link to="/sales/received-money">Received Money</Link>
//                   </Menu.Item>
//                   <Menu.Item key="8.2">
//                     <Link to="/sales/add-invoice">Add Invoice</Link>
//                   </Menu.Item>
//                 </SubMenu>
//               )}
//               <Menu.Item key="9" onClick={handleLogout}>
//                 Logout
//               </Menu.Item>
//             </Menu>
//           </Sider>
//           <Layout>
//             <Header style={{ background: '#fff', padding: 0 }} />
//             <Content style={{ margin: '0 16px' }}>
//               <Breadcrumb style={{ margin: '16px 0' }}>
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item>
//                   <Link to="/">Dashboard</Link>
//                 </Breadcrumb.Item>
//               </Breadcrumb>
//               <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
//                 <Switch>
//                   <Route exact path="/" component={Dashboard} />
//                   <Route path="/sales/orders" component={SalesOrders} />
//                   <Route path="/sales/invoice" component={SalesInvoice} />
//                   <Route path="/sales/delivery" component={SalesDelivery} />
//                   <Route path="/purchase/order" component={PurchaseOrder} />
//                   <Route path="/purchase/add-order" component={AddPurchaseOrder} />
//                   <Route path="/purchase/invoice" component={PurchaseInvoice} />
//                   <Route path="/purchase/good-receiving" component={PurchaseGoodReceiving} />
//                   <Route path="/pos/checkout" component={POSCheckout} />
//                   <Route path="/accounts/expense" component={Expense} />
//                   <Route path="/accounts/journal-entry" component={JournalEntry} />
//                   <Route path="/accounts/bank-deposit" component={BankDeposit} />
//                   <Route path="/accounts/funds-transfer" component={FundsTransfer} />
//                   <Route path="/accounts/other-payments" component={OtherPayments} />
//                   <Route path="/inventory/stock-movement" component={StockMovement} />
//                   <Route path="/inventory/stock-adjustment" component={StockAdjustment} />
//                   <Route path="/manufacturing/assembling" component={Assembling} />
//                   <Route path="/users/customers" component={Customers} />
//                   <Route path="/users/warehouse" component={Warehouse} />
//                   <Route path="/users/add-product" component={AddProduct} />
//                   <Route path="/users/product" component={Product} />
//                   <Route path="/users/view-product" component={ViewProduct} />
//                   <Route path="/users/vendor" component={Vendor} />
//                   <Route path="/users/add-vendor" component={AddVendor} />
//                   <Route path="/sales/add-order" component={AddOrder} />
//                   <Route path="/sales/add-delivery" component={AddDelivery} />
//                   <Route path="/sales/received-money" component={ReceivedMoney} />
//                   <Route path="/sales/add-invoice" component={AddInvoice} />
//                 </Switch>
//               </div>
//             </Content>
//             <Footer style={{ textAlign: 'center' }}>AIA ©{new Date().getFullYear()}</Footer>
//           </Layout>
//         </>
//       )}
//     </Layout>
//   );
// }

// export default App;

