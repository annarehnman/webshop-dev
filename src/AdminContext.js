import React, { useContext, useState } from 'react'

const AdminContext = React.createContext()
const AdminUpdateContext = React.createContext()

export function useAdmin() {
  return useContext(AdminContext)
}

export function useAdminUpdate() {
  return useContext(AdminUpdateContext)
}

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin, ] = useState(false)
  
  function toggleAdmin() {
    setIsAdmin(prevIsAdmin => !prevIsAdmin)
  }

  return (
    <AdminContext.Provider value={isAdmin}>
      <AdminUpdateContext.Provider value={toggleAdmin}>
        { children }
      </AdminUpdateContext.Provider>
    </AdminContext.Provider>
  )
}