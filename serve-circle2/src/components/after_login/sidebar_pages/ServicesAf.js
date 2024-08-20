import React, { useState } from 'react'
import './ServicesAf.css'
import HeaderAf from '../HeaderAf'
import Tip from '../Tip'
import CurrentHeading from '../CurrentHeading'
import NavbarAf from '../NavbarAf'
import CreateJobsheet from './CreateJobsheet'
import Sidebar from '../sidebar/Sidebar'
import { FaUserTie } from 'react-icons/fa'
import { IoTicket } from 'react-icons/io5'
import Tsidebar from '../sidebar/Tsidebar'

const SalesAf = () => {

  const [editingJobsheet, setEditingJobsheet] = useState(true)
  const headingLinks = [
    {
      heading: 'In House Services',
      desc:'Create new job sheets, manage services and generate invoices.',
      btnIcon: <IoTicket/>,
      btnText: "Create New Job Sheet"
    },
    {
      heading: 'Esclated Services',
      desc:'',
      btnIcon: '',
      btnText: ""
    },
    {
      heading: 'Requests',
      desc:'List of all the service requests received directly from your clients through clients accounts and web APIs',
      btnIcon: '',
      btnText: ""
    },
    {
      heading: 'Customers',
      desc:'',
      btnIcon: <FaUserTie/>,
      btnText: "Create Customer"
    }

  ]

  return (
    <>
        <div className='af-pages'>
          <Tsidebar/>
          
          <div className='main-body'>
            <HeaderAf/>
            <Tip/>
            <NavbarAf Headings={headingLinks}/>
            <CurrentHeading />
            

            { editingJobsheet && <CreateJobsheet/>}
          </div>
        </div>
    </>
  )
}

export default SalesAf