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
      <div>
        <i>Transaction Detail</i>
        {hash}
        {time}
        {vin_sz}
        {vout_sz}
        {block_index}
      </div>
      <div>
        {inputs}
      </div>
      <div>
        {outs}
      </div>

    </div>
  );
}
export default TxsDetail;