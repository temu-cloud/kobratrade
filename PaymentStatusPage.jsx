import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import api from '../../api';
function PaymentStatusPage() {
   
  return (
    <header className="py-5" style={{ backgroundColor: "#60500C" }}>
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h2 className="display-4 fw-bold">Verifying Payment!</h2>
          <p className="lead fw-normal text-white-75 mb-4">Give us a moment while we verify your payment!</p>
          <span>
            <Link to="/shop" className="btn btn-light btn-lg px-4 py-2 mx-3">View Order Details</Link>
            <Link to="/shop" className="btn btn-light btn-lg px-4 py-2">Continue Shopping</Link>
          </span>
        </div>
      </div>
    </header>
  );
}

export default PaymentStatusPage;