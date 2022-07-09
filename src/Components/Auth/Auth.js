import React, {useState} from 'react';
import { authenticate } from '../../Redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import './auth.css'
import { useNavigate } from 'react-router-dom';

const Auth = () => {

const dispatch = useDispatch()
const navigate = useNavigate()
const isAuth = useSelector(state => state.authenticate.isAuthenticated)

const [email, setemail] = useState("");
const [pwd, setpwd] = useState("");

  return (

    <div className='form-container mx-4'>

        <form className='fs-5 mt-5 '>
      <div className="form-group ">
        <label for="exampleInputEmail1">Email address</label>
        <input 
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="test@etest.com"
        required
        onChange={(e)=>setemail(e.target.value)}
        />

        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  required onChange={(e)=>setpwd(e.target.value)}/>
      </div>
      {/* <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div> */}
      <button
       className="btn btn-primary mt-4 px-5 py-2"
       disabled ={!(email.includes("@") && pwd) }
       onClick={() => {
         dispatch(authenticate())
         navigate("/")
         
       }
      }
       >Submit</button>
       {isAuth}
    </form>
</div>
  );
}

export default Auth;
