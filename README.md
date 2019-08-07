# BitSeek
[BitSeek](https://getstart3d.herokuapp.com/ "BitSeek") (live) is a single page app that searches for cryptocurrency details and transactions of bitcoin addresses using [Blockchain's APIs](https://www.blockchain.com/api/ "Blockchain API").

## Table of contents
* [Installation](#installation)
* [Features](#features)
* [Technologies](#technologies)
* [Landing Page](#landing-page)
* [Main Page](#main-page)
* [Code Samples](#snippets)
* [Additional Features](#additional-features)

## Installation
  * Clone this repo
  * `npm install` to install all dependencies
  * `npm start` to start react app server

## Features
  * A landing page to look up a bitcoin address (supports base58 or hash160 addresses)
    * An error message will appear if an invalid bitcoin address is entered
  * 4 main data/info sections once a valid address is entered
    * Address Info displaying transactions sent, received, and the current balance in BTC
    * Transactions displaying all transactions (and dates) with the ability to view up to the first transaction
    * Details of a specific transaction once selected from the list of all transactions - hash address, time, inbound size, outbound size, and block index
    * All of the inbounds and outbounds of a specific transaction - amounts sent and received from all addresses invovled
  * Seek info on another bitcoin address by clicking BitSeek at the top

## Technologies
  * Create React App
    * React hooks (useState, useEffect)
  * Redux
    * Redux hooks (useSelector, useDispatch)
  * Material UI
  * HTML/CSS3
  * [Blockchain API](https://www.blockchain.com/api/ "Blockchain API")

## Landing Page
![LandingPage](src/images/LandingPage2.png "Landing Page")

## Main Page
![MainPage](src/images/MainPage.png "Main Page")

## Snippets
```javascript
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
```

Code snippet of error handling using async/await within React hooks useEffect lifecycle to determine if the user should be brought back to the landing page with a modal to notify that the address is invalid (src/frontend/components/main/main.jsx)

```javascript
const mainStyles = makeStyles({
  main: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    gridColumnGap: '30px',
    gridRowGap: '30px',
    paddingTop: '90px',
    paddingBottom: '30px',
    width: '100%',
    background: '#0d001c',
    height: window.innerHeight - 120, // height determined dynamically
  }
})
```

Using styled components with CSS Grids and window.innerHeight in order to dynamically determine height of the app (src/frontend/components/main/main_styles.js)

```javascript
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
```

Using both outbound transactions and inbound transactions to determine if the address was a sender (indicated as a negative BTC amount) or a receiver (indicated as a positive BTC amount) as part of the transactions list (src/frontend/components/main/transactions/txs_item.jsx)

## Additional Features
![Transactions](src/images/BitSeek_TransactionDetails.gif "Transactions")

All transactions are shown, via dropdowns that provide additional information such as date of the transaction and the specific transaction amounts from all addresses invovled

![Load](src/images/BitSeek_MoreTransactions.gif "Load")

ALl transactions can be loaded, up to the the first transaction made by the address