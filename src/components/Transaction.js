import React from 'react'

const Transaction = (props) => {
  
  return (
    <tr>
      <td>{props.oneTransaction.id}</td>
      <td>{props.oneTransaction.description}</td>
      <td>{props.oneTransaction.category}</td>
      <td>{props.oneTransaction.amount}</td>
    </tr>
  )
}

export default Transaction
