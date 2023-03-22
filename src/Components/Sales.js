// src/components/Sales.js
import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList, FaShoppingCart, FaTruck } from "react-icons/fa";
import "./Sales.css";

function Sales() {
  return (
    <div className="sales-container">
      <h1>Sales</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sales/orders">
              <FaClipboardList />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/sales/invoice">
              <FaShoppingCart />
              <span>Invoice</span>
            </Link>
          </li>
          <li>
            <Link to="/sales/delivery">
              <FaTruck />
              <span>Delivery</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sales;
