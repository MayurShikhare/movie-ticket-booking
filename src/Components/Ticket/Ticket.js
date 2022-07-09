import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './ticket.css'

const Ticket = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const details = location.state
  const redirectTime = 10

  const [time, settime] = useState(redirectTime);

  const redirectInSec = ()=> {
    setTimeout(() => { 
      settime(time-1)
      navigate("/")
    }, `${redirectTime * 1000}`)
  }

  useEffect(() => {
    redirectInSec()
  }, [redirectInSec]);

  
  return (

    <div className='d-flex flex-column align-items-center'>
        <div className='ticket-container d-flex justify-content-around gap-4'>

          <div className='qr-code'>
          <QRCode value={details.image} />
          </div>

          <div className='ticket-details'>
            <h3>Movie Title - {details.title}</h3>
            <h4>Show date - {details.date} (yyyy-mm-dd)</h4>
            <h3>Show time -{details.price}</h3>

            <q className='note'>The show must go on</q>
          </div>
        </div>
        <p className='thank'>Thank you</p>

        <p>you will be redirected to home page in  {time} seconds</p>
    </div>
  );
}

export default Ticket;

