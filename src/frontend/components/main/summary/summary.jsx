import React from 'react'
import '../styles.css'

const Summary = ({ info }) => {

  const { hash160, address, n_tx, total_received, total_sent, final_balance } = info;

  return (
    <div className='summary'>
      <i>Wallet Info</i>
      <div>Address</div>
      <div>{address}</div>
      <div>Hash160</div>
      <div>{hash160}</div>
      <div>Transactions</div>
      <div>{n_tx}</div>
      <div>Receieved</div>
      <div>{(total_received / 100000000).toFixed(6)} <strong>BTC</strong></div>
      <div>Sent</div>
      <div>{(total_sent / 100000000).toFixed(6)} <strong>BTC</strong></div>
      <div>Final Balance</div>
      <div>{(final_balance / 100000000).toFixed(6)} <strong>BTC</strong></div>
    </div>
  );
}
export default Summary;