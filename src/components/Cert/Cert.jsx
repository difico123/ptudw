import React from 'react'
import './Cert.css'
import { offices } from '../../data'
import { NavLink, useLocation } from 'react-router-dom'
export default function Cert() {

    return (
        <div className='container2'>
            <h1>Danh sách chứng chỉ</h1>
            <button className='btn-addcert'>Add new cert</button>
            {offices.map(office =>
                <NavLink className="navlink-cert  red-border" to={`/Offices/${office.officeId}`}>
                    <div key={office.officeId} className='cert'>
                        <div className="off-item">
                            <div>Office Name: <b>{office.nameOffice}</b></div>
                            <div>Owner: <b>{office.owner}</b></div>
                            <div>Phone: <b>{office.phone}</b></div>
                        </div>
                        <div className="off-item">
                            <div>Kind Of Business:  <b>{office.kindOfBusiness}</b></div>
                            <div>Starting Date: <b>{office.startDate}</b></div>
                            <div>Expiring Date: <b>{office.ExpireDate}</b></div>
                        </div>
                    </div> 
                </NavLink>
            )}
        </div>
    )
}

