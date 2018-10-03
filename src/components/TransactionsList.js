import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  //console.log(props.trxns)
  const trxn = props.trxns.map((trxn) => {
    return <Transaction trxn={trxn} />
  })
  //console.log(trxn)
  return (
    <div>
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
        {trxn}

      </tbody>
    </table>
    </div>
  )
  
}

export default TransactionsList
