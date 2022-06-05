import React from 'react'
import './Offices.css'
import { offices } from '../../data'
import { NavLink, useLocation } from 'react-router-dom'
export default function Offices() {
    const isSafe = useLocation().pathname === "/Safety";
    //console.log(isSafe);
    return (
        <div className='container'>
            {isSafe ? <h1>Các cơ sở đủ điều kiện vệ sinh an toàn thực phẩm</h1>
            : <h1>Các cơ sở KHÔNG đủ điều kiện vệ sinh an toàn thực phẩm</h1>}
            {offices.map(office =>
                <NavLink className="navlink" to={`/Offices/${office.officeId}`}>
                    <div key={office.officeId} className='office'>
                        <div>Office Name:  <b>{office.nameOffice}</b></div>
                        <div>Owner: <b>{office.owner}</b></div>
                        <div>Kind Of Business:  <b>{office.kindOfBusiness}</b></div>
                        <div>Phone: <b>{office.phone}</b></div>
                    </div>
                </NavLink>
            )}
        </div>
    )
}

