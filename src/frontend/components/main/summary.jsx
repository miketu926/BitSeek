import React from 'react'

const Summary = ({ info }) => {

  const { hash160, address, n_tx, n_unredeemed, total_received, total_sent, final_balance } = info;

  return (
    <div>
      {hash160}
      {address}
      {n_tx}
      {n_unredeemed}
      {total_received}
      {total_sent}
      {final_balance}
    </div>
  );
}
export default Summary;