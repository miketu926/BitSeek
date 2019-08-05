import { makeStyles } from '@material-ui/core/styles';

const navStyles = makeStyles({
  main: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gridTemplateRows: '30% 40% 30%',
    backgroundColor: '#210740',
    height: '100vh',
  },
  form: {
    gridColumnStart: '2',
    gridRowStart: '2',
    display: 'grid',
    gridTemplateRows: '2fr 1fr 1fr',
    border: '2px solid #c4c4c4',
    borderRadius: '20px',
    backgroundColor: '#dbdbdb',
    alignItems: 'center',
  },
  formTitle: {
    placeSelf: 'center',
    marginTop: '30px',
    fontWeight: '200',
    letterSpacing: '20px',
    color: '#210740',
    fontSize: '40px',
  },
  formInput: {
    gridRowStart: '2',
    width: '500px',
    color: 'white',
    placeSelf: 'center',
    marginBottom: '25px',
  },
  button: {
    gridRowStart: '3',
    width: '200px',
    letterSpacing: '1px',
    placeSelf: 'center',
    marginBottom: '25px',
  }
})

export default navStyles