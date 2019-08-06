import React from 'react'
import './summary_styles.css'

const Summary = ({ info }) => {
  const { hash160, address, n_tx, total_received, total_sent, final_balance } = info;

  const convert = (x, btc) => {
    x = (x / btc).toFixed(6);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const btc = 100000000;

  return (
    <div className='summary'>
      <i>Wallet</i>
      <div>Address</div>
      <div>{address}</div>
      <div>Hash160</div>
      <div>{hash160}</div>
      <div>Transactions</div>
      <div>{n_tx}</div>
      <div>Receieved</div>
      <div>{convert(total_received, btc)} <strong>BTC</strong></div>
      <div>Sent</div>
      <div>{convert(total_sent, btc)} <strong>BTC</strong></div>
      <div>Balance</div>
      <div>{convert(final_balance, btc)} <strong>BTC</strong></div>
    </div>
  );
}
export default Summary;