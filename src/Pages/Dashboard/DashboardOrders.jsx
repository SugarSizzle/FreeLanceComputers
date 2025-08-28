import React from 'react';
import styles from './DashboardOrders.module.css';



      const renderOrders = () => {

        const orders = [
            { id: 1001, item: 'RAM 16GB DDR4', quantity: 2, status: 'Processing', orderDate: '2024-08-26', total: '$120' },
            { id: 1002, item: 'SSD 1TB', quantity: 1, status: 'Completed', orderDate: '2024-08-24', total: '$89' },
            { id: 1003, item: 'Graphics Card RTX 4060', quantity: 1, status: 'Pending', orderDate: '2024-08-28', total: '$299' }
          ];

return (
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Orders</h2>
            <button className={styles.primaryButton}>
              Place New Order
            </button>
          </div>
    
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Order History</h3>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead className={styles.tableHeader}>
                  <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className={styles.tableRow}>
                      <td className={styles.tableCell}>#{order.id}</td>
                      <td className={styles.tableCell}>{order.item}</td>
                      <td className={styles.tableCell}>{order.quantity}</td>
                      <td className={styles.tableCell}>
                        <span className={getStatusClass(order.status)}>
                          {order.status}
                        </span>
                      </td>
                      <td className={`${styles.tableCell} ${styles.tableCellMuted}`}>{order.orderDate}</td>
                      <td className={`${styles.tableCell} ${styles.tableCellBold}`}>{order.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
            );
    };
    

    export default renderOrders;
 