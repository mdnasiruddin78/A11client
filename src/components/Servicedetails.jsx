import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";


const Servicedetails = () => {

  const { id } = useParams()
  const [services, setServices] = useState({})

  useEffect(() => {
    fetchAllService()
  }, [])

  const fetchAllService = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allService/${id}`)
    setServices(data)
  }

  const { description, email, date, price, category, website, company, title, image, _id } = services;
  
  return (
    <div>
      <Helmet>
        <title>SERVICE-DETAILS</title>
      </Helmet>
      <h3 className="text-white text-3xl font-bold text-center mb-5">Service Details</h3>
      <div className="bg-[#082032] p-5 grid lg:grid-cols-2 grid-cols-1 border-[#69779b] border-2 mb-10 rounded-xl gap-5">
        <div>
          <img className="rounded-xl lg:h-[400px]" src={image} alt="" />
        </div>
        <div className="space-y-4">
            <h3 className="text-white text-xl">Service Title: {title}</h3>
            <h3 className="text-white text-xl">Company Name: {company}</h3>
            <p className="text-white text-xl">Category: {category}</p>
            <p className="text-white text-xl">Price: {price}</p>
            <p className="text-white text-xl">Website: {website}</p>
            <p className="text-white text-xl">Added date: {format(new Date(),'P')}</p>
            <p className="text-white text-xl">UserEmail: {email}</p>
            <p className="text-white text-xl">Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Servicedetails;