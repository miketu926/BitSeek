import React, { useState } from 'react';
import './txs_item_styles.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const TxsItem = ({ txs, setCurrTxs, id, n }) => {
  const { time } = txs;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  const convert = (unix) => {
    const time = new Date(unix * 1000);
    return time.toLocaleDateString('default', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  }

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon><SendIcon /></ListItemIcon>
        <ListItemText primary={`Transaction ${n - id}`} />
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