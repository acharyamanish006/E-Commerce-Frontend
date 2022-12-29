import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({isAuthenticated}) => {
    if(!isAuthenticated){
        return <Navigate  to={'/login'}/>
    }
    return <Outlet/>
}

export default ProtectedRoutes