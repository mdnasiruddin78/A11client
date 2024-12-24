import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import Myservicetabledata from "../components/Myservicetabledata";


const Myservices = () => {

    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([]) 
    
    useEffect(() => {
        const fetchAllService = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allService/${user?.email}`)
            setServices(data)
        }
        fetchAllService()
    }, [])

    return (
        <div className="overflow-x-auto mb-10 min-h-[calc(100vh-306px)]">
            <h3 className="text-white text-3xl font-bold text-center">My Services</h3>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th className="text-white">Email</th>
                        <th className="text-white">Service Title</th>
                        <th className="text-white">Price</th>
                        <th className="text-white">Description</th>
                        <th className="text-white">Update</th>
                        <th className="text-white">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <Myservicetabledata key={service._id}
                            service={service}
                        ></Myservicetabledata>)
                    } 
                </tbody>
            </table>
        </div>
    );
};

export default Myservices;