import React, { useState } from 'react'
import convert from '../../../utils/convert_time'
import convertBTC from '../../../utils/convert_btc'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import SendIcon from '@material-ui/icons/Send'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import './txs_item_styles.css'

const TxsItem = ({ txs, setCurrTxs, id, n, ownAddr }) => {
  const { time } = txs;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  const amtReceived = (txs) => {
    let total = 0;
    for (const item of txs.out) {
      if (ownAddr === item.addr) total += parseFloat(item.value);
    }
    return total;
  }

  const amtSent = (txs) => {
    let total = 0;
    for (const item of txs.inputs) {
      if (ownAddr === item.prev_out.addr) total += parseFloat(item.prev_out.value);
    }
    return total;
  }

  const totalAmt = (amtReceived, amtSent) => {
    let total = parseFloat(amtReceived - amtSent);
    return convertBTC(total);
  }

  return (
    <>
      <ListItem className='alt-list2' button onClick={handleClick}>
        <ListItemIcon><SendIcon /></ListItemIcon>
        <ListItemText primary={`Transaction ${n - id} > ${totalAmt(amtReceived(txs), amtSent(txs))}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button id='sublist' onClick={() => setCurrTxs(id)}>
            <ListItemIcon><SendIcon /></ListItemIcon>
            <ListItemText primary={convert(time)} />
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}

export default TxsItem;