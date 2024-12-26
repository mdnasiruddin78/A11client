import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const axiosIntance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})


const UseAxiossecure = () => {

    const {logoutUser} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        axiosIntance.interceptors.response.use(response => {
          return response
        },error => {
          if(error.status === 401 || error.status === 403){
            logoutUser()
              .then(() => {
                  navigate('/login')
              })
              .catch(error => {
                  // console.log(error)
              })
          }
          return Promise.reject(error)
        })
     },[])

    return axiosIntance;
};

export default UseAxiossecure;