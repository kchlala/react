import React from 'react'
import "./header.scss";
import {FaFacebookF} from 'react-icons/fa';
import { GrTwitter} from 'react-icons/gr';
import {ImLinkedin2 } from 'react-icons/im';
import {BsSearch } from 'react-icons/bs';




const Header = () => {
  return (
      <header>
        <div className="top-header container-fluid">
        <div className="row justify-content-between align-items-center">
                <div className=" col-lg-2">
                <ul className="advers m-0 p-0 d-flex list-unstyled justify-content-between">
                        <li>Advertiesment</li>
                        <li>Contact</li>
                        <li>Author</li>
                        <li>Forum</li>
                    </ul>
                </div>
                <div className="col-lg-3 d-flex justify-content-between align-items-center">
              <div className="icons ">
                <FaFacebookF />
                <GrTwitter/>
                <ImLinkedin2/>
                </div>
                <div className="login">
                    <p className='mt-3'>Login/Register</p>
                </div>
                <div className="language">
                    <select>
                        <option value="">
                            English
                        </option>
                        <option value="">
                            Az
                        </option>
                    </select>
                </div>
                </div>
            </div>
        </div>




<div className="container-fluid">
          <div className=" bottom-header row justify-content-between align-items-center">
              <div className="col-lg-2">
              <img className='img-fluid' src="https://bytesed.com/tf/katerio/assets/img/logo/01.png" alt="" />
          </div>
          <div className="col-lg-8">
              <ul className=' home mt-3 d-flex justify-content-between align-items-center list-unstyled'>
                  <li className='pink'>Home</li>
                  <li>Author</li>
                  <li>Author Profile</li>
                  <li>Blog</li>
                  <li>Pages</li>
                  <li>Contact</li>
                  <BsSearch/>
              </ul>
          </div>
          </div>
          </div>
      </header>
  )
}

export default Header