import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

// Create the context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Authenticated user
    const [loading, setLoading] = useState(true); // Loading state

    // Function to handle user registration
    const handleRegister = (email, pass) => {
        setLoading(true); // Set loading to true when registering
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    // Function to handle user login
    const handleLogin = (email, pass) => {
        setLoading(true); // Set loading to true when logging in
        return signInWithEmailAndPassword(auth, email, pass);
    };

    // Function to handle user sign-out
    const signOutUser = () => {
        setLoading(true); // Set loading to true when signing out
        return signOut(auth);
    };

    // Monitor user authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Update the user state with the current user
            setLoading(false); // Stop loading once the user's state is confirmed
        });

        // Cleanup subscription to avoid memory leaks
        return () => unsubscribe();
    }, []);

    const contextValue = {
        user,
        loading,
        handleLogin,
        handleRegister,
        signOutUser,
    };

    // Render loading spinner until authentication state is confirmed
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-lg font-semibold text-gray-700">Loading...</p>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

