import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAddressInfo, fetchMoreInfo } from '../../actions/fetch_actions'
import TxsItem from './txs_item'
import TxsDetail from './txs_detail'
import Summary from './summary'
// import { Link } from 'react-router-dom';

const Main = ({ address }) => {
  const transactions = useSelector(({ entities }) => {
    return entities.txs;
  })

  const info = useSelector(({ entities }) => {
    return entities;
  })

  const dispatch = useDispatch();
  const numTxs = info.n_tx;
  const [offset, setOffset] = useState(0);
  const [currTxs, setCurrTxs] = useState(0);

  useEffect(() => {
    if (offset === 0) {
      fetchAddressInfo(address, offset)(dispatch);
    } else if (offset < numTxs) {
      fetchMoreInfo(address, offset)(dispatch);
    }
  }, [address, offset]);

  if (!transactions || !info) return <div>loading...</div>

  const txs = transactions.map((txs, i) => {
    return <TxsItem key={i} id={i} txs={txs} setCurrTxs={setCurrTxs} />
  })

  const txsDetail = transactions.map((txs, i) => {
    return <TxsDetail key={i} txs={txs} />
  })

  const handleClick = () => {
    setOffset(Math.min(offset + 50, numTxs));
  }

  return (
    <div>
      <p>{numTxs}</p>
      <p>{offset}</p>
      <p>{currTxs}</p>
      <ul>{txs[currTxs]}</ul>
      <Summary info={info} />
      <ul>{txsDetail[currTxs]}</ul>
      <ul>
        {txs}
        {offset < numTxs ? <button onClick={() => handleClick()}>LOAD MORE</button> : null}
      </ul>

    </div>
  );
}
export default Main;