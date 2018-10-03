import React from 'react'

const TransactionsList = (props) => {

const allTransactions = props.transactions
.map(transaction =>
  <tr>
    <th>{transaction.posted_at}</th>
    <th>{transaction.description}</th>
    <th>{transaction.category}</th>
    <th>{transaction.amount}</th>
  </tr>
  )

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
            
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
       {allTransactions}
      </tbody>
    </table>
  )
}

export default TransactionsList
