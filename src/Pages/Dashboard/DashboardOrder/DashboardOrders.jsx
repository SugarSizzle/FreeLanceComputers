import React, { useState } from 'react';
import styles from './DashboardOrders.module.css';
import { DashboardFooter } from '../DashboardFooter/DashboardFooter';

 export const DashboardOrders = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [orderStatus, setOrderStatus] = useState('Complete');

  return (
    <div className={styles.container}>

      <div className={styles.mainContent}>
   
        <div className={styles.titleSection}>
          <div className={styles.titleLeft}>
            
            <div className={styles.orderDetails}>
              <h1 className={styles.orderId}>Order ID: 334902445</h1>
              <p className={styles.orderDate}>January 8,2024 at 10:00AM</p>
            </div>

            <h1 className={`${styles.orderStatus} ${styles.statusProcessing}`}>
              {orderStatus === 'Processing' ? <span style={{color:'#ffd700'}}>Processing</span> : <span style={{color:'#03ff2d'}}>Complete</span>}</h1>
          </div>
        </div>

        <div className={styles.contentGrid}>
       
          <div className={styles.leftColumn}>
  
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.orderItemTitle}>Order Item</h2>
                <p className={styles.productTitle}>Laptop</p>
                <p className={styles.productSubtitle}>Macbook Air</p>
            </div>
              
              <div className={styles.orderItem}>
                <div className={styles.productImage}>
                  <div className={styles.placeholder}>Laptop Image</div>
                </div>
                <div className={styles.productDetails}>
                  <div className={styles.productVariant}>
                    <span>Medium</span>
                    <span>Black</span>
                    
                  </div>
                </div>
                <div className={styles.productQuantity}>
                  <span className={styles.productQuantityTitle}>3 x $500.00</span>
                  <span className={styles.price}>$1,500.00</span>
                </div>
              </div>

              
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
                  <span>1 item</span>
                  <span>$1,500</span>
                </div>
             
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>Free shipping (0.0 lb)</span>
                  <span>$0.00</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.total}`}>
                  <span>Total</span>
                  <span>$1,499</span>
                </div>
              </div>

              <div className={styles.paymentInfo}>
                <div className={styles.summaryRow}>
                  <span>Paid by customer</span>
                  <span>$0.00</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Payment due when invoice is sent</span>
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

