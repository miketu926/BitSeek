import React from 'react'
import InputItem from './input_item'
import OutItem from './out_item'
import convert from '../../../utils/convert_time'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import './details_styles.css'

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
    <>
      <div className='transaction-info'>
        <i>Transaction Detail</i>
        <div className='hash'>
          <div className='hash2'>Hash Address</div>
          {hash}
        </div>
        <div className='time1'>Time</div>
        <div className='time2'>{convert(time)}</div>
        <div className='isize1'>Inbound Size</div>
        <div className='isize2'>{vin_sz}</div>
        <div className='osize1'>Outbound Size</div>
        <div className='osize2'>{vout_sz}</div>
        <div className='blockidx1'>Block Index</div>
        <div className='blockidx2'>{block_index}</div>
      </div>
      <div className='details'>
        <List
          className='alt-list1'
          subheader={
            <ListSubheader
              color='primary'
              component="div"
              id="nested-list-subheader"
              disableSticky={true}>
              From
            </ListSubheader>}
        >
          {inputs}
        </List>
        <List
          className='alt-list1'
          subheader={
            <ListSubheader
              color='primary'
              component="div"
              id="nested-list-subheader"
              disableSticky={true}>
              To
            </ListSubheader>}
        >
          {outs}
        </List>
      </div>
    </>
  );
}
export default TxsDetail;