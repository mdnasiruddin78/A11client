import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { format } from "date-fns";
import toast from "react-hot-toast";


const Myservices = () => {

    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        fetchAllService()
    }, [])

    const fetchAllService = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allService/${user?.email}`)
        setServices(data)
    }

    const handleDelete = async _id => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/allService/${_id}`)
            console.log(data)
            fetchAllService()
            toast.success('Service Delete Successfully!!')
        }
        catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }

    const modernDelete = (id) => {
        toast(
            (t) => (
                <div className='flex gap-3 items-center'>
                    <div><p>Are You <b>Sure!</b></p></div>
                    <div className='space-x-2'>
                        <button className='bg-red-400 text-white px-3 py-1 rounded-md' onClick={() => {
                            handleDelete(id)
                            toast.dismiss(t.id)
                        }}>Yes</button>
                        <button className='bg-green-400 text-white px-3 py-1 rounded-md' onClick={() => toast.dismiss(t.id)}>Cancel</button>
                    </div>
                </div>
            ));
    }

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
                        services.map(service => <tr key={service._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user?.photoURL}
                                                alt="Avatar" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">{user?.email}</div>
                                        <div className="text-sm opacity-50 text-white">{service?.date && format(new Date(service?.date), 'P')}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-white">
                                {service?.title}
                                <br />
                                <span className="badge badge-ghost badge-sm">{service?.company}</span>
                            </td>
                            <td className="text-white">{service?.price}</td>
                            <td className="text-white">{service?.description.substring(0, 20)}...</td>
                            <td>
                                <button className="btn btn-ghost text-2xl text-blue-500"><FaEdit /></button>
                            </td>
                            <th>
                                <button onClick={() => modernDelete(service?._id)} className="btn btn-ghost text-2xl text-red-400"><MdOutlineDeleteForever /></button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Myservices;