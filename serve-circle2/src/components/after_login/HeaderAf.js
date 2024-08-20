import React from 'react'
import './HeaderAf.css'
import RoundBtn from './buttons/RoundBtn';
import { TbLogout } from 'react-icons/tb';


const HeaderAf = () => {
  return (
    <>
        <div className='header-af'>
            <div className='hdr-left'>
                <p>Welcome, <b>#BRANCH NAME</b></p>
            </div>
            <div className='hdr-right'>
                <p>#USERNAME</p>
                <div className='hdr-logout-btn'><RoundBtn icon={<TbLogout />} text="Log Out"/></div>
            </div>
        </div>
    </>
  )
}

export default HeaderAf