import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { format } from "date-fns";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";


const Myservices = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [services, setServices] = useState([])
    const [startDate, setStartDate] = useState(new Date());

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

    const handleUpdateService = async e => {
        e.preventDefault()
        const from = e.target;
        const image = from.image.value;
        const title = from.title.value;
        const company = from.company.value;
        const website = from.website.value;
        const price = from.price.value;
        const category = from.category.value;
        const date = startDate;
        const email = from.email.value;
        const description = from.description.value;
        const updateService = { image, title, company, website, price, category, date, email, description }
        console.log(updateService)

        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/updateService/${id}`, updateService)
            toast.success('Data Updated Successfully!!')
            navigate('/service')
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
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
                                <button onClick={() => document.getElementById(service?._id).showModal()} className="btn btn-ghost text-2xl text-blue-500"><FaEdit /></button>
                            </td>
                            <th>
                                <button onClick={() => modernDelete(service?._id)} className="btn btn-ghost text-2xl text-red-400"><MdOutlineDeleteForever /></button>
                            </th>
                            <dialog id={service?._id} className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <div className="card bg-white w-full rounded-xl">
                                        <form onSubmit={handleUpdateService} className="card-body">
                                            {/* form first row */}
                                            <div className='flex flex-col lg:flex-row gap-5'>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text">Service Image</span>
                                                    </label>
                                                    <input type="url"
                                                        defaultValue={service?.image}
                                                        name='image'
                                                        placeholder="Service Image link"
                                                        className="input input-bordered" required />
                                                </div>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text">Service Title</span>
                                                    </label>
                                                    <input type="text"
                                                        defaultValue={service?.title}
                                                        name='title'
                                                        placeholder="Service Title"
                                                        className="input input-bordered" required />
                                                </div>
                                            </div>
                                            {/* form second row */}
                                            <div className='flex flex-col lg:flex-row gap-5'>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text">Company Name</span>
                                                    </label>
                                                    <input type="text"
                                                        defaultValue={service?.company}
                                                        name='company'
                                                        placeholder="Company Name"
                                                        className="input input-bordered" required />
                                                </div>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text">Website</span>
                                                    </label>
                                                    <input type="url"
                                                        defaultValue={service?.website}
                                                        name='website'
                                                        placeholder="Website link"
                                                        className="input input-bordered" required />
                                                </div>
                                            </div>
                                            {/* form third row */}
                                            <div className='flex flex-col lg:flex-row gap-5'>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text">Price</span>
                                                    </label>
                                                    <input type="number"
                                                        defaultValue={service?.price}
                                                        name='price'
                                                        placeholder="Price"
                                                        className="input input-bordered" required />
                                                </div>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text">Category</span>
                                                    </label>
                                                    <input type="text"
                                                        defaultValue={service?.category}
                                                        name='category'
                                                        placeholder="Category Name"
                                                        className="input input-bordered" required />
                                                </div>
                                            </div>
                                            <div className='flex flex-col lg:flex-row gap-5'>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text">Added date</span>
                                                    </label>
                                                    <DatePicker
                                                        defaultValue={service?.date}
                                                        className='border p-2 rounded-md'
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)} />
                                                </div>
                                                <div className="form-control flex-1">
                                                    <label className="label">
                                                        <span className="label-text">userEmail</span>
                                                    </label>
                                                    <input type="email"
                                                        defaultValue={user?.email}
                                                        disabled={true}
                                                        name='email' className="input input-bordered" required />
                                                </div>
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Description</span>
                                                </label>
                                                <textarea
                                                    defaultValue={service?.description}
                                                    className="textarea textarea-bordered"
                                                    name='description'
                                                    placeholder="Description" required></textarea>
                                            </div>
                                            <div className="form-control mt-6">
                                                <button className="btn rounded-full bg-gray-800 text-white">Update Service</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn bg-gray-800 text-white">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Myservices;