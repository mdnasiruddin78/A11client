import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { format } from "date-fns";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import DatePicker from "react-datepicker";


const Myreviews = () => {

  const { user } = useContext(AuthContext)
  const [review, setReview] = useState([])
  const [rating, setRating] = useState()
  const [startDate, setStartDate] = useState(new Date());

  const fetchAllReview = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allReviews/${user?.email}`)
    setReview(data)
  }

  useEffect(() => {
    fetchAllReview()
  }, [])

  const handleDelete = async _id => {
    try {
      const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteReview/${_id}`)
      console.log(data)
      fetchAllReview()
      toast.success('Review Delete Successfully!!')
    }
    catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }
console.log(review)
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

  const handleUpdateReview = async (e,id) => {
    e.preventDefault()
    const from = e.target;
    const email = from.email.value;
    const reviewDate = startDate;
    const review = from.review.value;
    const ratings = rating;
    const updateReview = { email, reviewDate, review, ratings }
    console.log(updateReview)

    try {
      const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/reviewUpdate/${id}`,updateReview)
      console.log(data)
      toast.success('Review Update Successfully!!')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }


  return (
    <div className="min-h-[calc(100vh-306px)]">
      <h3 className="text-white text-2xl font-bold text-center mb-5">My Reviews</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-white">Name</th>
              <th className="text-white">Service Title</th>
              <th className="text-white">Rating</th>
              <th className="text-white">Review</th>
              <th className="text-white">Update</th>
              <th className="text-white">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              review.map(reviews => <tr key={reviews._id}>
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
                      <div className="font-bold text-white">{reviews?.email}</div>
                      <div className="text-sm opacity-50 text-white">{reviews?.reviewDate
                        && format(new Date(reviews?.reviewDate
                        ), 'P')}</div>
                    </div>
                  </div>
                </td>
                <td className="text-white">
                  {reviews?.title}
                </td>
                <td className="text-white">{reviews?.ratings}</td>
                <td className="text-white">{reviews?.review}</td>
                <td>
                  <button onClick={() => document.getElementById(reviews?._id).showModal()} className="btn btn-ghost text-2xl text-blue-500"><FaEdit /></button>
                </td>
                <th>
                  <button onClick={() => modernDelete(reviews?._id)} className="btn btn-ghost text-2xl text-red-400"><MdOutlineDeleteForever /></button>
                </th>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id={reviews?._id} className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card bg-white w-full rounded-xl">
                      <form onSubmit={(e)=>handleUpdateReview(e,reviews._id)} className="card-body">
                        <div className='flex flex-col lg:flex-row gap-5'>
                          <div className="form-control flex-1">
                            <label className="label">
                              <span className="label-text">UserInfo</span>
                            </label>
                            <input type="email" disabled={true}
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
                              onChange={(date) => setStartDate(date)} />
                          </div>
                          <div className="form-control flex-1">
                            <label className="label">
                              <span className="label-text">Rating Selection</span>
                            </label>
                            <Rating
                             style={{ maxWidth: 250 }}
                              value={rating} onChange={setRating}/>
                          </div>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Text Review</span>
                          </label>
                          <textarea 
                          defaultValue={reviews?.review}
                          className="textarea textarea-bordered"
                           name='review' placeholder="Text Review" 
                           required></textarea>
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn rounded-full bg-gray-800 text-white">Add Review</button>
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
              </tr>)
            }
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Myreviews;