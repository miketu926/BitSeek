import React from 'react'

const OutItem = ({ txs }) => {

  const { addr, value } = txs

  return (
    <li>
      {addr}
      {value}
    </li>
  );
}
export default OutItem;