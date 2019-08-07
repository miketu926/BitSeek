import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAddress } from '../../utils/api'
import {
  fetchAddressInfo,
  fetchMoreInfo,
  removeInfo
} from '../../actions/fetch_actions'
import TxsItem from './transactions/txs_item'
import TxsDetail from './details/txs_detail'
import Summary from './summary/summary'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import mainStyles from './main_styles'
import './styles.css'

const Main = ({ address, setSearch, setSearchTerm, setOpenModal }) => {
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
  const classes = mainStyles();

  const handleLoadMore = (e) => {
    e.preventDefault();
    setOffset(Math.min(offset + 50, numTxs));
  }

  const handleRefresh = (modal = false) => {
    setOffset(0);
    dispatch(removeInfo())
    setSearch(false);
    modal ? setOpenModal(true) : setSearchTerm("");
  }

  useEffect(() => {
    if (offset === 0) {
      const checkErr = async () => {
        const res = await fetchAddress(address);
        if (res.status === 500) {
          handleRefresh(true);
        } else {
          fetchAddressInfo(address, offset)(dispatch);
        }
      }
      checkErr();
    } else if (offset < numTxs) {
      fetchMoreInfo(address, offset)(dispatch);
    }
  }, [offset]);

  if (!transactions || !info) {
    return (
      <>
        <AppBar
          className={classes.appbar}
          position="fixed">
          <Toolbar>
            <Button
              className={classes.refreshBtn}
              color="inherit"
              disableRipple={true}
              onClick={() => handleRefresh()}
            >
              BITSEEK
            </Button>
          </Toolbar>
        </AppBar>
        <div className='loading'></div>
      </>
    )
  }

  const txs = transactions.map((txs, i) => {
    return <TxsItem
      key={i}
      id={i}
      txs={txs}
      setCurrTxs={setCurrTxs}
      n={numTxs}
      addr={address}
    />
  })

  const txsDetail = transactions.map((txs, i) => {
    return <TxsDetail key={i} txs={txs} />
  })

  return (
    <>
      <AppBar
        className={classes.appbar}
        position="fixed">
        <Toolbar>
          <Button
            className={classes.refreshBtn}
            color="inherit"
            disableRipple={true}
            onClick={() => handleRefresh()}
          >
            BITSEEK
            </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <Summary info={info} />
        <div className='transactions'>
          <List
            className='alt-list1'
            subheader={
              <ListSubheader
                color='primary'
                component="div"
                id="nested-list-subheader"
                disableSticky={true}
              >
                Transactions
              </ListSubheader>}
          >
            {txs}
          </List>
          {offset < numTxs && numTxs > 50 ?
            <Button
              className={classes.loadMoreBtn}
              variant='contained'
              color='primary'
              size='medium'
              onClick={(e) => handleLoadMore(e)}
            >
              MORE TRANSACTIONS
          </Button> : null}
        </div>
        {txsDetail[currTxs]}
      </div>
    </>
  );
}
export default Main;