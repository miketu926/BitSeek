import React from 'react';
import './txs_item_styles.css'

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const TxsItem = ({ txs, setCurrTxs, id }) => {
  const { hash, time } = txs;
  return (
    <div
      className='tsx-item'
      onClick={() => setCurrTxs(id)}>
      <div>hash: {hash}</div>
      <div>time: {time}</div>
    </div>
  )
}

export default TxsItem;