import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Servicedetails = () => {

    const {id} = useParams()
    const [services,setServices] = useState({})
    
    useEffect(()=>{
        fetchAllService()
      },[])

      const fetchAllService = async () => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/allService/${id}`)
        setServices(data)
      }

      const {description,email,date,price,category,website,company,title,image,_id} = services;
      console.log(services)
    return (
        <div>
           service details page 
        </div>
    );
};

export default Servicedetails;