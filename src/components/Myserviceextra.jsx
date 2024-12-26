import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Myserviceextra = ({service,modernDelete}) => {

    const {website,company,image,_id,description,price,title,date,category} = service;
    
    const [startDate, setStartDate] = useState(new Date(date));
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

     const handleUpdateService = async (e,id) => {
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
                const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/updateService/${id}`, updateService)
                console.log(data)
                toast.success('Data Updated Successfully!!')
                navigate('/service')
            } catch (err) {
                console.log(err)
                toast.error(err.message)
            }
        }

    return (
        <tr>
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
                        <div className="text-sm opacity-50 text-white">{service?.date && format(new Date(date), 'P')}</div>
                    </div>
                </div>
            </td>
            <td className="text-white">
                {title}
                <br />
                <span className="badge badge-ghost badge-sm">{company}</span>
            </td>
            <td className="text-white">{price}</td>
            <td className="text-white">{description.substring(0, 20)}...</td>
            <td>
                <button onClick={() => document.getElementById(_id).showModal()} className="btn btn-ghost text-2xl text-blue-500"><FaEdit /></button>
            </td>
            <th>
                <button onClick={() => modernDelete(_id)} className="btn btn-ghost text-2xl text-red-400"><MdOutlineDeleteForever /></button>
            </th>
            <dialog id={_id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card bg-white w-full rounded-xl">
                        <form onSubmit={(e) => handleUpdateService(e,_id)} method="dialog" className="card-body">
                            {/* form first row */}
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Service Image</span>
                                    </label>
                                    <input type="url"
                                        defaultValue={image}
                                        name='image'
                                        placeholder="Service Image link"
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Service Title</span>
                                    </label>
                                    <input type="text"
                                        defaultValue={title}
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
                                        defaultValue={company}
                                        name='company'
                                        placeholder="Company Name"
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Website</span>
                                    </label>
                                    <input type="url"
                                        defaultValue={website}
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
                                        defaultValue={price}
                                        name='price'
                                        placeholder="Price"
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text"
                                        defaultValue={category}
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
                                        readOnly
                                        name='email' className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    defaultValue={description}
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
        </tr>
    );
};

export default Myserviceextra;