import axios from "axios";
import { useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";


const Myreviews = () => {

    const {user} = useState(AuthContext)
    const [review,setReview] = useState([])
    
    useEffect(() => {
        fetchAllReview()
      }, [])
    
      const fetchAllReview = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allReviews/${user?.email}`)
        setReview(data)
      }
      console.log(user?.email)
    return (
        <div>
            <h3 className="text-white">this is my-review page</h3>
        </div>
    );
};

export default Myreviews;