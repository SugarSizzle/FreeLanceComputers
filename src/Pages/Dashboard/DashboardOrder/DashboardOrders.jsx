import React, { useState, useEffect } from 'react';
import styles from './DashboardOrders.module.css';
import { DashboardFooter } from '../DashboardFooter/DashboardFooter';

 export const DashboardOrders = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        

        const response = await fetch('http://localhost:5000/api/orders', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to fetch orders');
        }

        const data = await response.json();
        setOrders(data.orders || []);
        
       
        if (data.orders && data.orders.length > 0) {
          setSelectedOrder(data.orders[0]);
        }
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) + ' at ' + date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  console.log(orders);

  const calculateSubtotal = (items) => {
    if (!items) return 0;
    return items.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
  };

  const getTotalItems = (items) => {
    if (!items) return 0;
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <p>Loading orders...</p>
        </div>
        <DashboardFooter />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <p>Error: {error}</p>
        </div>
        <DashboardFooter />
      </div>
    );
  }

  if (!selectedOrder) {
    return (
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <p>No orders found.</p>
        </div>
        <DashboardFooter />
      </div>
    );
  }

  const orderStatus = selectedOrder.status;

  return (
    <div className={styles.container}>

      <div className={styles.mainContent}>
   
        <div className={styles.titleSection}>
          <div className={styles.titleLeft}>
            
            <div className={styles.orderDetails}>
              <h1 className={styles.orderId}>Order ID: {selectedOrder.id}</h1>
              <p className={styles.orderDate}>{formatDate(selectedOrder.created_at)}</p>
            </div>

            <h1 className={`${styles.orderStatus} ${styles.statusProcessing}`}>
              {orderStatus === 'processing' ? <span style={{color:'#ffd700'}}>Processing</span> : <span style={{color:'#03ff2d'}}>Complete</span>}</h1>
          </div>
        </div>

        <div className={styles.contentGrid}>
       
          <div className={styles.leftColumn}>
  
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.orderItemTitle}>Order Item</h2>
                {selectedOrder.items && selectedOrder.items.length > 0 && (
                  <>
                    <p className={styles.productTitle}>{selectedOrder.items[0].product_type}</p>
                    <p className={styles.productSubtitle}>{selectedOrder.items[0].product_name}</p>
                  </>
                )}
            </div>
              
              {selectedOrder.items && selectedOrder.items.map((item, index) => (
                <div key={index} className={styles.orderItem}>
                  <div className={styles.productImage}>
                    <div className={styles.placeholder}>{item.product_type} Image</div>
                  </div>
                  <div className={styles.productDetails}>
                    <div className={styles.productVariant}>
                      <span>{item.product_name}</span>
                      <span>{item.product_type}</span>
                    </div>
                  </div>
                  <div className={styles.productQuantity}>
                    <span className={styles.productQuantityTitle}>{item.quantity} x ${parseFloat(item.price).toFixed(2)}</span>
                    <span className={styles.price}>${(item.quantity * parseFloat(item.price)).toFixed(2)}</span>
                  </div>
                </div>
              ))}

              
              <div className={styles.actionButtons}>
                <button 
                  className={`${styles.actionBtn} ${activeButton === 'fulfill' ? styles.active : ''}`}
                  onMouseEnter={() => setActiveButton('fulfill')}
                  onMouseLeave={() => setActiveButton(null)}
                >
                  More Info
                </button>
               
              </div>
            </div>

          
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.orderSummaryTitle}>Order Summary</h2>
              </div>
              
              
              <div className={styles.summaryTable}>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>{getTotalItems(selectedOrder.items)} item{getTotalItems(selectedOrder.items) !== 1 ? 's' : ''}</span>
                  <span>${calculateSubtotal(selectedOrder.items).toFixed(2)}</span>
                </div>
             
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>Standard shipping</span>
                  <span>$10.00</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.total}`}>
                  <span>Total</span>
                  <span>${parseFloat(selectedOrder.total).toFixed(2)}</span>
                </div>
              </div>

              <div className={styles.paymentInfo}>
                <div className={styles.summaryRow}>
                  <span>Paid by customer</span>
                  <span>${parseFloat(selectedOrder.total).toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Payment {orderStatus === 'complete' ? 'completed' : 'due when invoice is sent'}</span>
                </div>
              </div>
              
              <div className={styles.actionButtons}>
                <button 
                  className={`${styles.actionBtn} ${activeButton === 'invoice' ? styles.active : ''}`}
                  onMouseEnter={() => setActiveButton('invoice')}
                  onMouseLeave={() => setActiveButton(null)}
                >
                  Send Invoice
                </button>
                <button 
                  className={`${styles.actionBtn} ${styles.primaryBtn} ${activeButton === 'payment' ? styles.active : ''}`}
                  onMouseEnter={() => setActiveButton('payment')}
                  onMouseLeave={() => setActiveButton(null)}
                >
                  Collect payment
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

