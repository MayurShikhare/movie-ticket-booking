import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../Redux/detailsSlice';



const Booking = () => {
  const [seatNumber, setseatNumber] = useState(null);
  const [showTime, setshowTime] = useState(null);
  const [price, setprice] = useState(null);
  const [date, setdate] = useState(null);

  const location = useLocation()
  const navigate = useNavigate()
  const id = location.state

  

  const details = useSelector(state => {
    // console.log(state.detail.items)
    return state.detail.items
  })

  const obj = {
    title : details.title,
    image : details.image,
    seatNo : showTime,
    date : showTime,
    price : price,
    datee : date
  }
  const dispatch = useDispatch()

  return (
    
    
     <div className="container mt-5">
        <div className="row">
          
          <div className="col-sm">
          <img src={details.image} alt={details.title} className="img-thumbnail" />
          </div>

          <div className="col-sm">
                <h5 className='my-2'>Select seat</h5>
              <select className="form-control"
              onChange={(e) => setseatNumber(e.target.value)}
              
              >
                <option>select seat</option>
                <option>A-8</option>
                <option>L-15</option>
                <option>D-18</option>
                <option>A-19</option>
                <option>v-8</option>
                <option>L-15</option>
                <option>D-18</option>
                <option>c-19</option>
                <option>a-7</option>
                <option>L-11</option>
                <option>D-1</option>
                <option>A-10</option>
              </select>

              <h5 className='my-2'>Select show time</h5>
              <select className="form-control"
              
              onChange={(e) => setshowTime(e.target.value)}
              >
                <option>Select show time</option>
                <option>12PM - 3PM</option>
                <option>3PM - 6PM</option>
                <option>6PM - 9PM</option>
                <option>9PM - 12AM</option>
              </select>
              
              <h5 className='my-2'>Select Date</h5>
              <input type="date"
               className="form-control"
               onChange={(e) => setdate(e.target.value)}
                />

              <h5 className='my-2'>Select Price</h5>
              <select className="form-control"
              onChange={(e) => setprice(e.target.value)}
              >
                
                <option>Select Price</option>
                <option>Normal - {details.prices.normal}</option>
                <option>Superior -{details.prices.superior}</option>
                <option>Sofa-{details.prices.sofa}</option>
              </select>

              <button 
              className='btn btn-success mt-4 px-5 py-2'
              disabled={!(seatNumber && price && showTime && date )}
              onClick={()=>{
              dispatch(getMovieDetails(id)) 
              obj.seatNo = seatNumber
              obj.price = price
              obj.showTime = showTime 
              obj.datee = date
              navigate("/ticket", {state : obj})} } 
              >Confirm
              </button>
          </div>
    </div>
    </div>
     
      
    
  );
}

export default Booking;


