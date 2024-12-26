import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import toast from "react-hot-toast";
import ReviewCard from "./ReviewCard";


const Servicedetails = () => {

  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [services, setServices] = useState({})
  const [rating, setRating] = useState(0)
  const [startDate, setStartDate] = useState(new Date());
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetchAllService()
  }, [])

  const fetchAllService = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/serviceDetails/${id}`)
    setServices(data)
  }

  const { description, email, date, price, category, website, company, title, image, } = services;

  const handleAddReview = async e => {
    e.preventDefault()
    const from = e.target;
    const email = from.email.value;
    const reviewDate = startDate;
    const review = from.review.value;
    const ratings = rating;
    const photo = user?.photoURL
    const name = user?.displayName
    const reviewInfo = { email, reviewDate, review, ratings, category, title, photo, name }
    // console.log(reviewInfo)

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/allReview`, reviewInfo)
      // console.log(data)
      toast.success('Review Added Successfully!!')
      navigate('/myreview')
    } catch (err) {
      // console.log(err)
      toast.error(err.message)
    }
  }

  useEffect(() => {
    const fetchAllReview = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allReview/${category}`)
      setReviews(data)
    }
    fetchAllReview()
  }, [category])

  return (
    <div className="mb-10">
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
          <p className="text-white text-xl">Price: ${price}</p>
          <p className="text-white text-xl">Website: {website}</p>
          <p className="text-white text-xl">Added date: {date && format(new Date(date), 'P')}</p>
          <p className="text-white text-xl">UserEmail: {email}</p>
          <p className="text-white text-xl">Review Count: {reviews.length}</p>
          <p className="text-white text-xl">Description: {description}</p>
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-10">
          {
            reviews.map(reviewc => <ReviewCard key={reviewc._id} reviewc={reviewc}></ReviewCard>)
          }
        </div>
      </div>
      <div>
        <h3 className="text-white text-3xl font-bold text-center mb-5">Add Review</h3>
        <div className="card bg-white w-full rounded-xl">
          <form onSubmit={handleAddReview} className="card-body">
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">UserInfo</span>
                </label>
                <input type="email" readOnly defaultValue={user?.email} name='email' className="input input-bordered" required />
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
                <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Text Review</span>
              </label>
              <textarea className="textarea textarea-bordered" name='review' placeholder="Text Review" required></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn rounded-full bg-gray-800 text-white">Add Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Servicedetails;