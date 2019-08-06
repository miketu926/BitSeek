import { makeStyles } from '@material-ui/core/styles';

const mainStyles = makeStyles({
  appbar: {
    background: '#210740',
    height: '60px',
    color: 'white',
  },
  refreshBtn: {
    fontWeight: '200',
    letterSpacing: '20px',
    fontSize: '25px',
  },
  loadMoreBtn: {
    marginTop: '20px',
    width: '200px',
  },
  main: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    gridColumnGap: '30px',
    gridRowGap: '30px',
    paddingTop: '90px',
    paddingBottom: '30px',
    width: '100%',
    background: '#171717',
    height: window.innerHeight - 120,
  },
  nestedList: {
    paddingLeft: '45px',
  }
})

export default mainStyles