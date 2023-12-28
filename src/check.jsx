import React from 'react'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Check() {
    const user=useSelector(state=>state.auth.user)
    const {authUser}=user;
    return (
        <div>
            {authUser ? <Outlet /> : <Navigate to='/' />}
        </div>
    )
}
