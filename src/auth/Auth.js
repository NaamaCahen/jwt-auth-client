import { useState,useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AppContext } from "../App";

export const Auth=(props)=>{
    const [redirect,setRedirect]=useState(false)
    const {token,setToken}=useContext(AppContext);
    const navigate=useNavigate();

    useEffect(()=>{
        const verify=async()=>{
            try {
                const response=await axios.get('/token')

                console.log(response.data.token);
                setToken(response.data.token )
                setRedirect(true)
            } catch (err) {
                setToken(null);
                navigate('/login')
            }
        }
        verify();
    },[])

    return(        
            redirect? props.children: null
    )
}