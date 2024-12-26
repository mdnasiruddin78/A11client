import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Reviewextra from "../components/Reviewextra";


const Myreviews = () => {

  const { user } = useContext(AuthContext)
  const [review, setReview] = useState([])

  
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
    <div className="min-h-[calc(100vh-306px)]">
      <Helmet>
        <title>MY-REVIEWS</title>
      </Helmet>
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
              <th className="text-white">Date</th>
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
              review.map(reviews => <Reviewextra key={reviews._id} reviews={reviews}
               modernDelete={modernDelete}></Reviewextra>)
            }
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Myreviews;