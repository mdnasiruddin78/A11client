import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


const Featuredservices = () => {

    const [services,setServices] = useState([])
    
    useEffect(()=>{
        const fetchAllService = async () => {
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/serviceLimit`)
          setServices(data)
        }
        fetchAllService()
      },[])

    return (
        <div>
            <h3 className="text-white text-3xl font-bold text-center mb-5">Featured Services</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    services.map(service => <FeaturedCard key={service._id} service={service}></FeaturedCard>)
                }
            </div>
        </div>
    );
};

export default Featuredservices;