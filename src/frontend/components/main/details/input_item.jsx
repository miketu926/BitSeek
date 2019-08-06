import React from 'react'

const InputItem = ({ txs }) => {

  const { addr, value } = txs.prev_out

  return (
    <div>
      {addr}
      {value}
    </div>
  );
}
export default InputItem;