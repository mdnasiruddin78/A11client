import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";


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
            <h3 className="text-white text-3xl font-bold text-center mb-5">this is services page: {services.length}</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    services.map(service => <Card key={service._id} service={service}></Card>)
                }
            </div>
        </div>
    );
};

export default Service;