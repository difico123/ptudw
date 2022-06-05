import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { offices } from '../../data';
import './Office.css'

export default function Office() {
    const [office, setOffice] = useState({});
    const id = useParams().id;

    useEffect(() =>{
 
        setOffice(offices[id]);
    },[id])

  return (
    <div className='container'>
        <div className="item-btn">
          <button className='btn-save'>Save</button>
          <button className='btn-edit'>Edit</button>
          <button className='btn-del'>Delete</button>
        </div>
        <div className='item'>
            <label>Office Name:</label>
            <input value={office.nameOffice} disabled/>
        </div>
        <div className='item'>
            <label>Kind of bussiness:</label>
            <input value={office.kindOfBusiness} disabled/>
        </div>
        <div className='item'>
            <label>Owner:</label>
            <input value={office.owner} disabled/>
        </div>
        <div className='item'>
            <label>Phone:</label>
            <input value={office.phone} disabled/>
        </div>
        <div className='item'>
            <label>Address:</label>
            <input value={office.address} disabled/>
        </div>
        <div className='item'>
            <label>City:</label>
            <input value={office.city} disabled/>
        </div>
        <div className='item'>
            <label>Safety:</label>
            <select value={office.isSafe ? "Safe" : "UnSafe"} disabled>
                <option>Safe</option>
                <option>UnSafe</option>
            </select>
        </div>
    </div>
  )
}

