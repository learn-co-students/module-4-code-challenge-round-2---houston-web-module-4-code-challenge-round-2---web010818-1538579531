import React from 'react'

const Search = props => {

console.log(props.searchTerm)

  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={props.handleChange}
        value={props.searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
