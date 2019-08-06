import React, { useState } from 'react'
import Main from '../main/main'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import navStyles from './nav_styles'

const Nav = () => {
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const classes = navStyles();

  const handleSeek = e => {
    e.preventDefault();
    setSearch(true);
  }

  return !search ?
    <div className={classes.main}>
      <form className={classes.form}>
        <div className={classes.formTitle}>BITSEEK</div>
        <TextField
          id='outlined-with-placeholder'
          label='Bitcoin Address'
          placeholder='Bitcoin Address'
          className={classes.formInput}
          type='search'
          margin='normal'
          variant='outlined'
          autoComplete="off"
          value={searchTerm}
          onChange={e => setSearchTerm(e.currentTarget.value)}
        />
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          size='large'
          disabled={searchTerm.length > 0 ? false : true}
          onClick={e => handleSeek(e)}>
          BEGIN BITSEEK!</Button>
      </form>
    </div >
    :
    <>
      <Main address={searchTerm} setSearch={setSearch} setSearchTerm={setSearchTerm} />
    </>

}
export default Nav;