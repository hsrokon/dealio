import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true);

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unSubscribe();
    },[])

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (displayName, photoURL) => {
        // setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL
        })
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    const userInfo = {
        loading,
        user,
        setUser,
        createNewUser,
        updateUserProfile,
        loginUser,
        logOutUser,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;