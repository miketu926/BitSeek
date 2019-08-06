import React from 'react'
import InputItem from './input_item'
import OutItem from './out_item'

const TxsDetail = ({ txs }) => {

  const { hash, time, vin_sz, vout_sz, block_index } = txs;
  const inputArr = txs.inputs;
  const outArr = txs.out;

  const inputs = inputArr.map((txs, i) => {
    return <InputItem key={i} txs={txs} />
  })

  const outs = outArr.map((txs, i) => {
    return <OutItem key={i} txs={txs} />
  })

  return (
    <div>
      Transaction Detail
      {hash}
      {time}
      {vin_sz}
      {vout_sz}
      {block_index}

      <ul>
        {inputs}
      </ul>
      <ul>
        {outs}
      </ul>

    </div>
  );
}
export default TxsDetail;