import React from 'react';
import { Link } from 'react-router-dom';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const TxsItem = ({ txs, setCurrTxs, id }) => {
  const { hash, size, time } = txs;
  return (
    <li onClick={() => setCurrTxs(id)}>
      <ul>
        <li>hash: {hash}</li>
        <li>size: {size}</li>
        <li>time: {time}</li>
      </ul>
    </li>
  )
}

export default TxsItem;