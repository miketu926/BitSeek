import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAddressInfo } from '../../actions/fetch_actions'
import { withRouter } from 'react-router-dom'
import Main from '../main/main'
// import { Link } from 'react-router-dom';

const Nav = (props) => {
  // const projects = useSelector(({ entities }) => {
  //   return entities.projects;
  // });

  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // const dispatch = useDispatch();

  // const numberWithCommas = (x) => {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  const handleSeek = e => {
    e.preventDefault();
    // fetchAddressInfo(searchTerm)(dispatch);
    // pushes to route searchTerm then fetch info from there in main'
    // props.location.pathname.concat(searchTerm);
    // props.history.push(`/${searchTerm}`)
    setSearch(true);
  }

  return !search ?
    <div>
      BITSEEK NAVIGATION
      <form onSubmit={e => handleSeek(e)}>
        <input type="text"
          placeholder="Bitcoin Address"
          value={searchTerm}
          onChange={e => setSearchTerm(e.currentTarget.value)} />
        <input type="submit" value="seek!" />
      </form>
    </div>
    :
    <div>
      BITSEEK NAVIGATION
      <form onSubmit={e => handleSeek(e)}>
        <input type="text"
          placeholder="Bitcoin Address"
          value={searchTerm}
          onChange={e => setSearchTerm(e.currentTarget.value)} />
        <input type="submit" value="seek!" />
      </form>
      <Main address={searchTerm} />
    </div>

}
export default Nav;