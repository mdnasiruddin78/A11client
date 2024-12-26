import { format } from "date-fns";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Rating } from "@smastrom/react-rating";
import DatePicker from "react-datepicker";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";


const Reviewextra = ({ reviews,modernDelete }) => {

    const {_id,review,ratings,title,reviewDate} = reviews;

    const [rating, setRating] = useState(ratings)
    const [startDate, setStartDate] = useState(new Date(reviewDate));
    const { user } = useContext(AuthContext)

    const handleUpdateReview = async (e,_id) => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const reviewDate = startDate;
        const review = from.review.value;
        const ratings = rating;
        const updateReview = { email, review,reviewDate, ratings }
        // console.log(updateReview)
    
        try {
          const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/reviewUpdate/${_id}`, updateReview)
        //   console.log(data)
          toast.success('Review Update Successfully!!')
        } catch (err) {
        //   console.log(err)
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
                        <div className="font-bold text-white">{user?.displayName}</div>
                        <div className="font-bold text-gray-500">{user?.email}</div>
                    </div>
                </div>
            </td>
            <td className="text-white">
                {reviews?.reviewDate
                    && format(new Date(reviewDate
                    ), 'P')}
            </td>
            <td className="text-white">
                {title}
            </td>
            <td className="text-white">{ratings}</td>
            <td className="text-white">{review}</td>
            <td>
                <button onClick={() => document.getElementById(_id).showModal()} className="btn btn-ghost text-2xl text-blue-500"><FaEdit /></button>
            </td>
            <th>
                <button onClick={() => modernDelete(_id)} className="btn btn-ghost text-2xl text-red-400"><MdOutlineDeleteForever /></button>
            </th>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id={_id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card bg-white w-full rounded-xl">
                        <form onSubmit={(e) => handleUpdateReview(e,_id)} method="dialog" className="card-body">
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">UserInfo</span>
                                    </label>
                                    <input type="email" readOnly
                                        defaultValue={user?.email}
                                        name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Review Posted Date</span>
                                    </label>
                                    <DatePicker
                                        className='border p-2 rounded-md'
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Rating Selection</span>
                                    </label>
                                    <Rating
                                        style={{ maxWidth: 250 }}
                                        value={rating} onChange={setRating} />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Text Review</span>
                                </label>
                                <textarea
                                    defaultValue={review}
                                    className="textarea textarea-bordered"
                                    name='review' placeholder="Text Review"
                                    required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn rounded-full bg-gray-800 text-white">Update Review</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn bg-gray-800 text-white">Close Modal</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </tr>
    );
};

export default Reviewextra;