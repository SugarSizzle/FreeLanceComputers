import React from 'react';
import styles from './DashboardFinancing.module.css';

const renderFinancing = () => {

    const financing = [
        { id: 201, item: 'Complete PC Build', amount: '$1,299', status: 'Approved', interestRate: '12%', monthlyPayment: '$115' },
        { id: 202, item: 'Laptop Repair & Upgrade', amount: '$450', status: 'Counter Offer', interestRate: '15%', monthlyPayment: '$45' },
        { id: 203, item: 'Server Setup', amount: '$2,100', status: 'Denied', interestRate: 'N/A', monthlyPayment: 'N/A' }
      ];

    return (


    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Financing</h2>
        <button className={styles.primaryButton}>
          Apply for Financing
        </button>
      </div>

      <div className={styles.financingGrid}>
        {financing.map((item) => (
          <div key={item.id} className={styles.financingItem}>
            <div className={styles.financingHeader}>
              <div>
                <h3 className={styles.financingTitle}>{item.item}</h3>
                <p className={styles.financingAmount}>{item.amount}</p>
              </div>
              <div className={styles.financingStatus}>
                {getStatusIcon(item.status)}
                <span className={getStatusClass(item.status)}>
                  {item.status}
                </span>
              </div>
            </div>
            
            {item.status !== 'Denied' && (
              <div className={styles.financingDetails}>
                <div className={styles.financingDetailRow}>
                  <span className={styles.financingDetailLabel}>Interest Rate:</span>
                  <span className={styles.financingDetailValue}>{item.interestRate}</span>
                </div>
                <div className={styles.financingDetailRow}>
                  <span className={styles.financingDetailLabel}>Monthly Payment:</span>
                  <span className={`${styles.financingDetailValue} ${styles.financingDetailValueBold}`}>{item.monthlyPayment}</span>
                </div>
              </div>
            )}
            
            {item.status === 'Counter Offer' && (
              <div className={styles.counterOfferNotice}>
                <p className={styles.counterOfferText}>
                  We've made a counter offer with adjusted terms. Please review and respond.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    );
};

export default renderFinancing;