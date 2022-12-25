import {useContext,useState,useEffect} from 'react';
import {AppContext} from '../App';
import { useNavigate} from 'react-router-dom'
import jwt_decode from 'jwt-decode';


const Home = (props) => {

  const {token,setToken} = useContext(AppContext);
  const navigate=useNavigate()

  useEffect(()=>{
      try {
        console.log(token);
        const decode=jwt_decode(token);
        const expire=decode.exp;
        console.log(expire*1000);
        
        if(expire*1000<new Date().getTime()){
          navigate('/login')
        }
      } catch (error) {
        console.log(error);
        setToken(null)
        navigate('/login')
      }
    
  },[token]);

  return(
    <div>
      <h1>Home</h1>
    </div>
  )
}
export default Home
