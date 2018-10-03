import React from 'react'

const Transaction = (trxn) => {
  //console.log(trxn.trxn.id)
  return (
    <tr>
      <td>{trxn.trxn.posted_at}</td>
      <td>{trxn.trxn.description}</td>
      <td>{trxn.trxn.category}</td>
      <td>{trxn.trxn.amount}</td>
    </tr>
  )
}

export default Transaction
