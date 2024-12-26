import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {

    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const handleGoole = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updatedData) => {
        setLoading(true)
        return updateProfile(auth.currentUser,updatedData)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,async currentUsers => {
            // console.log(currentUsers)
            setUser(currentUsers)
            if(currentUsers?.email){
                const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{email: currentUsers?.email},{withCredentials: true})
                // console.log('signin',data)
           }else{
                const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/logout`,{},{withCredentials: true})
                // console.log('logout',data)
           }
           setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        signInUser,
        logoutUser,
        createUser,
        handleGoole,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;