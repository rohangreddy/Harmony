import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { auth } from './firebase'
import { selectUser } from './features/userSlice';
import { login, logout } from './features/userSlice'

function App() {
    // Dispatch allows us to shoot info into data layer
    const dispatch = useDispatch();

    // Pull in user information from data layer using useSelector hook
    const user = useSelector(selectUser);
    // this hook runs once when component loads 
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user is logged in
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName
                }))
            }
            else {

            }
        })
    }, [])
  return (
    <div className="app">
        {/* Render app components only if user is logged in*/}
        {user ? (
            <>
                <Sidebar />
                <Chat />
            </>
        /* Ternary operator if user is not logged in*/
        ): (
            <Login />
        )}
        
    </div>
  );
}

export default App;
