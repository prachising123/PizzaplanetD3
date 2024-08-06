import React from 'react';
import {BiSolidUser} from 'react-icons/bi';
import {BsFillCartCheckFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div>
      
    <nav className="navbar navbar-expand-lg shadow-lg p-2 mb-5 bg-white rounded ">
  <a className="navbar-brand" href="#">Pizza Planet</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Login <BiSolidUser/></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cart <BsFillCartCheckFill/></a>
      </li>
    </ul>
  </div>
</nav> 

    </div>
  );
}

export default Navbar;
