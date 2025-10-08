import React, { useState, useContext, createContext } from 'react'
import { useUser as useClerkUser } from '@clerk/clerk-react'

interface UserState {
  isLoggedIn: boolean;
  isSubscribed: boolean;
  plan?: string;
  subscription?: string | null;
}

interface UserContextType {
  userState: UserState;
}


const UserContext = createContext<UserContextType | undefined>(undefined)

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useClerkUser()
  const userState: UserState = {
    isLoggedIn: !!user,
    isSubscribed: user?.publicMetadata?.subscriptionStatus === 'active',
    plan: user?.publicMetadata?.plan as string || 'free',
    subscription: user?.publicMetadata?.subscriptionId as string || null
  }

  return (
    <UserContext.Provider value={{ userState }} >
      {children}
    </UserContext.Provider >
  )
}

const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export { UserProvider, useUser }
