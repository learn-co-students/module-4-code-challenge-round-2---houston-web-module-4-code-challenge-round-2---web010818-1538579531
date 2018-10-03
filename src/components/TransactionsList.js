import React from 'react'
import Transaction from "./Transaction"

const TransactionsList = (props) => {

  const displayPostedAt = () => {
    return props.transactions.map(transaction => {
      return transaction.posted_at
    })
  }

  const displayDescription = () => {
    return props.transactions.map(transaction => {
      return transaction.description
    })
  }

  const displayAmount = () => {
    return props.transactions.map(transaction => {
      return transaction.amount
    })
  }
  const displayCategory = () => {
    return props.transactions.map(transaction => {
      return transaction.category
    })
  }

  const filteredTransaction = () => {
    return props.transactions.filter(transaction => {
      return transaction.description.includes(props.searchTerm) || transaction.category.includes(props.searchTerm)
    })
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At {displayPostedAt()}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description {displayDescription()}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category {displayCategory()}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount {displayAmount()}
            </h3>
          </th>
        </tr>
      </tbody>
      <Transaction
        searchTerm={props.searchTerm}
        transaction={filteredTransaction()} />
    </table>
  )
}

export default TransactionsList
