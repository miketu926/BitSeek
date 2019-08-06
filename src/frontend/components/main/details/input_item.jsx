import React, { useState } from 'react'
import convertBTC from '../../../utils/convert_btc'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import './details_styles.css'

const InputItem = ({ txs }) => {
  const { addr, value } = txs.prev_out
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <>
      <ListItem className='alt-list2' button onClick={handleClick}>
        <ListItemText
          primary={addr}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem id='sublist'>
            <ListItemText primary={`${convertBTC(value)} BTC`} />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
}
export default InputItem;