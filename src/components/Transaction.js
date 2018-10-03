import React from 'react';

const Transaction = (props) => {
  // console.log(props);
  return (
    <tr>
      <td>{props.transaction.posted_at}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>${props.transaction.amount}</td>
    </tr>
  );
};

//       posted_at: '2017-02-29 10:30:00',
//       description: "Paycheck from Bob's Burgers",
//       category: 'Income',
//       amount: 100000

export default Transaction;
