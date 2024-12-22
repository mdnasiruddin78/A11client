import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {

    const [user,setUser] = useState()
    const [loading,setLoding] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const handleGoole = () => {
        setLoding(true)
        return signInWithPopup(auth,googleProvider)
    }

    const createUser = (email,password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logoutUser = () => {
        setLoding(true)
        return signOut(auth)
    }

    const updateUserProfile = (updatedData) => {
        setLoding(true)
        return updateProfile(auth.currentUser,updatedData)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUsers => {
            console.log(currentUsers)
            setUser(currentUsers)
            setLoding(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        setUser,
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