import React, { useState } from 'react'
import styles from "./PaymentSection.module.css"
function PaymentSection() {
    const cart_code=localStorage.getItem("cart_code")
    const [loading,setLoading]=useState(false)
    function paypalPayment(){
        setLoading(true)
        api.post("initiate_paypal_payment/", {cart_code})
        .then(res => {
        console.log(res.data)
        setLoading(false)
        if(res.data.approval_url){
        window.location.href = res.data.approval_url
        }
        })
        .catch(err => {
        console.error('Error initiating payment:', err.message);
        setLoading(false)
        })
    }
  return (
    <div className="col-md-4">
    <div className={`card ${styles.card}`}>
        <div className="card-header" style={{ backgroundColor: '#66580C', color: 'white' }}>
            <b>Payment Options</b>
        </div>
        <div className="card-body">
            {/* PayPal Button */}
            <button className={`btn btn-primary w-100 mb-3 ${styles.paypalButton}`} id="paypal-button" onClick={paypalPayment}>
                <i className="bi bi-paypal"></i> Pay with PayPal
            </button>

            {/* Flutterwave Button */}
            <button className={`btn btn-warning w-100 ${styles.flutterwaveButton}`} id="flutterwave-button">
                <i className="bi bi-credit-card"></i> Pay with Flutterwave
            </button>
        </div>
    </div>
</div>
  )
}

export default PaymentSection