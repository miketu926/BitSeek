import React from 'react'
import convertBTC from '../../../utils/convert_btc'
import './summary_styles.css'

const Summary = ({ info }) => {
  const { hash160, address, n_tx, total_received, total_sent, final_balance } = info;

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
      <div>{convertBTC(total_received)} <strong>BTC</strong></div>
      <div>Sent</div>
      <div>{convertBTC(total_sent)} <strong>BTC</strong></div>
      <div>Balance</div>
      <div>{convertBTC(final_balance)} <strong>BTC</strong></div>
    </div>
  );
}
export default Summary;