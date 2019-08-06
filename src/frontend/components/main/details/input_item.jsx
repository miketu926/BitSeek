import React from 'react'

const InputItem = ({ txs }) => {

  const { addr, value } = txs.prev_out

  return (
    <li>
      {addr}
      {value}
    </li>
  );
}
export default InputItem;