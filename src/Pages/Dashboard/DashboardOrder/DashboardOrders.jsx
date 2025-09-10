import React, { useState } from 'react';
import styles from './DashboardOrders.module.css';

 export const DashboardOrders = () => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className={styles.container}>
      {/* Header */}
     

      <div className={styles.mainContent}>
        {/* Title Section */}
        <div className={styles.titleSection}>
          <div className={styles.titleLeft}>
            <h1 className={styles.orderId}>Order ID: 334902445</h1>
           
            
         
          </div>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Order Item Section */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>Order Item</h2>
                <span>⌄</span>
              </div>
              <div className={styles.unfulfilled}>Unfulfilled</div>
              <p className={styles.guideText}>Use this personalized guide to get your store up and running.</p>
              
              <div className={styles.orderItem}>
                <div className={styles.productImage}>
                  <div className={styles.placeholder}>Laptop Image</div>
                </div>
                <div className={styles.productDetails}>
                  <h3>Laptop</h3>
                  <h4>Macbook Air</h4>
                  <div className={styles.productVariant}>
                    <span>Medium</span>
                    <span>Black</span>
                    <div className={styles.colorSwatch}></div>
                  </div>
                </div>
                <div className={styles.productQuantity}>
                  <span>3 x $500.00</span>
                  <span className={styles.price}>$1,500.00</span>
                  <button className={styles.moreIcon}>⋮</button>
                </div>
              </div>

              <p className={styles.guideText}>Effortlessly manage your orders with our Intuitive Order List page.</p>
              
              <div className={styles.actionButtons}>
                <button 
                  className={`${styles.actionBtn} ${activeButton === 'fulfill' ? styles.active : ''}`}
                  onMouseEnter={() => setActiveButton('fulfill')}
                  onMouseLeave={() => setActiveButton(null)}
                >
                  Fulfill Item
                </button>
                <button 
                  className={`${styles.actionBtn} ${styles.primaryBtn} ${activeButton === 'shipping' ? styles.active : ''}`}
                  onMouseEnter={() => setActiveButton('shipping')}
                  onMouseLeave={() => setActiveButton(null)}
                >
                  Create shipping label
                </button>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>Order Summary</h2>
                <span>⌄</span>
              </div>
              <div className={styles.paymentPending}>Payment pending</div>
              <p className={styles.guideText}>Use this personalized guide to get your store up and running.</p>
              
              <div className={styles.summaryTable}>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>1 item</span>
                  <span>$1,500</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Discount</span>
                  <span>New customer</span>
                  <span>-$100</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>Free shipping (0.0 lb)</span>
                  <span>$0.00</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.total}`}>
                  <span>Total</span>
                  <span></span>
                  <span>$1,499</span>
                </div>
              </div>

              <div className={styles.paymentInfo}>
                <div className={styles.summaryRow}>
                  <span>Paid by customer</span>
                  <span></span>
                  <span>$0.00</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Payment due when invoice is sent</span>
                  <span></span>
                  <span className={styles.editLink}>Edit</span>
                </div>
              </div>

              <p className={styles.guideText}>Review your order at a glance on the Order Summary page.</p>
              
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

            {/* Timeline Section */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>Timeline</h2>
                <span>⌄</span>
              </div>
              <p className={styles.guideText}>Use this personalized guide to get your store up and running.</p>
              
              <div className={styles.timelineItem}>
                <div className={styles.avatar}>AJ</div>
                <span>Alex Jander</span>
              </div>
              
              <p className={styles.comment}>Leave a comment...</p>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Notes Section */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>Notes</h2>
                <span>✏️</span>
              </div>
              <p>First customer and order!</p>
            </div>

            {/* Customers Section */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>Customers</h2>
                <span>⌄</span>
              </div>
              <div className={styles.customerInfo}>
                <div className={styles.customerName}>
                  <span>👤</span>
                  <span>Alex Jander</span>
                </div>
                <div className={styles.customerDetails}>
                  <span>📄</span>
                  <span>1 Order</span>
                </div>
                <p>Customer is tax-exempt</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>Contact Information</h2>
                <span>✏️</span>
              </div>
              <div className={styles.contactInfo}>
                <p>✉️ alexjander@gmail.com</p>
                <p>No phone number</p>
              </div>
            </div>

            {/* Shipping Address */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>Shipping address</h2>
                <span>✏️</span>
              </div>
              <div className={styles.addressInfo}>
                <div className={styles.customerName}>
                  <span>👤</span>
                  <span>Alex Jander</span>
                </div>
                <p>1226 University Drive</p>
                <p>Menlo Park CA 94025</p>
                <p>United States</p>
                <p>+16282679041</p>
                <p className={styles.viewMap}>🗺️ View Map</p>
              </div>
            </div>

            {/* Billing Address */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>Billing address</h2>
                <span>⌄</span>
              </div>
              <p>Same as shipping address</p>
            </div>

            {/* Conversion Summary */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>Conversion summary</h2>
                <span>⌄</span>
              </div>
              <p>There aren't any conversion details available for this order.</p>
              <p className={styles.learnMore}>Learn more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

