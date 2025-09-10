import React from 'react';
import styles from './DashboardOrders.module.css';



      const renderOrders = () => {

        const orders = [
            { id: 1001, item: 'RAM 16GB DDR4', quantity: 2, status: 'Processing', orderDate: '2024-08-26', total: '$120' },
            { id: 1002, item: 'SSD 1TB', quantity: 1, status: 'Completed', orderDate: '2024-08-24', total: '$89' },
            { id: 1003, item: 'Graphics Card RTX 4060', quantity: 1, status: 'Pending', orderDate: '2024-08-28', total: '$299' }
          ];


return (

      <>
      
      <div className={styles.sectionContainer}>
        <h3 className={styles.sectionTitle}>Orders</h3>
        <div className={styles.ordersContainer}>
          {orders.map((order) => (
            <div className={styles.orderCard} key={order.id}>
              <h3 className={styles.orderTitle}>{order.item}</h3>
            </div>
          ))}
        </div>
      </div>
      </>
            );
    };
    

    export default renderOrders;
 