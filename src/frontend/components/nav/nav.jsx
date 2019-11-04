import React, { useState } from 'react'
import Main from '../main/main'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal';
import navStyles from './nav_styles'

const Nav = () => {
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const classes = navStyles();

  const handleSeek = e => {
    e.preventDefault();
    setSearch(true);
  }

  const handleModalClose = (e) => {
    e.preventDefault();
    setSearchTerm("");
    setOpenModal(false);
  }

  return !search ?
    <div className={classes.main}>
      <form className={classes.form} onSubmit={e => handleSeek(e)}>
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
        <div className={classes.tryMsg}>
          Try an address from one of the top 10 holders:
          <div>34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo</div>
        </div>
      </form>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openModal}
        onClose={e => handleModalClose(e)}
      >
        <div className={classes.modal} id='modal'>
          <h2 id='modal-title'>Oh No!</h2>
          <div id='modal-search'>{searchTerm}</div>
          <div id="modal-msg">
            is not a valid bitcoin address!
          </div>
          <Button
            className={classes.modalBtn}
            variant='outlined'
            color='primary'
            size='small'
            open={openModal}
            onClick={e => handleModalClose(e)}>
            OK</Button>
        </div>
      </Modal>
    </div >
    :
    <>
      <Main
        address={searchTerm}
        setSearch={setSearch}
        setSearchTerm={setSearchTerm}
        setOpenModal={setOpenModal}
      />
    </>

}
export default Nav;