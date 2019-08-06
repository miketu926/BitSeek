import React from 'react'

const OutItem = ({ txs }) => {

  const { addr, value } = txs

  return (
    <div>
      {addr}
      {value}
    </div>
  );
}
export default OutItem;