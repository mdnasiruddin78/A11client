import axios from "axios";
import { useEffect, useState } from "react";


const Service = () => {

    const [services,setServices] = useState([])
    console.log(services)
    useEffect(()=>{
        const fetchAllService = async () => {
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/allService`)
          setServices(data)
        }
        fetchAllService()
      },[])

    return (
        <div>
            <h3 className="text-white">this is services page</h3>
        </div>
    );
};

export default Service;