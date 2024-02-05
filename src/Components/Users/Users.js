import './Users.css';
import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

const Users = ({first, second, third , fourth}) => { 
    
    return (
    
    <div className="container">

        <div className='firstUser'>
            <Link to="/catalog" className='UserL'>{first}</Link>
        </div>

        <div className='secondUser'>
            <Link to="/catalog" className='UserL'>{second}</Link>
        </div>

        <div className='thirdUser'>
            <Link to="/catalog" className='UserL'>{third}</Link>
        </div>

        <div className='fourthUser'>
            <Link to="/catalog" className='UserL'>{fourth}</Link>
        </div>

    </div>
  );
}


export default Users;
