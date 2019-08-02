import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAddressInfo } from '../../actions/fetch_actions'
// import { Link } from 'react-router-dom';

const Nav = () => {
  // const projects = useSelector(({ entities }) => {
  //   return entities.projects;
  // });

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   fetchAllProjects()(dispatch);
  // }, []);

  // const numberWithCommas = (x) => {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  const handleSeek = e => {
    e.preventDefault();
    console.log(searchTerm);
    console.log(fetchAddressInfo(searchTerm)(dispatch));
  }

  return (
    <div>
      NAVIGATION

      <form onSubmit={e => handleSeek(e)}>
        <input type="text"
          placeholder="Bitcoin Address"
          value={searchTerm}
          onChange={e => setSearchTerm(e.currentTarget.value)} />
        <input type="submit" value="seek!" />
      </form>

    </div>
  );
}
export default Nav;