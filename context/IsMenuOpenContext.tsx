'use client'
import { createContext, useContext, useState } from 'react'

type IsMenuOpenContext = boolean

interface IsMenuOpenContextType {
  isMenuOpen: IsMenuOpenContext
  handleIsMenuToggle: (newState: boolean) => void
}

const IsMenuOpenContext = createContext<IsMenuOpenContextType>({
  isMenuOpen: false,
  handleIsMenuToggle: () => {}
})

export const IsMenuOpenProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<IsMenuOpenContext>(false)

  const handleIsMenuToggle = (newState: boolean) => {
    setIsMenuOpen(newState)
  }

  return (
    <IsMenuOpenContext.Provider value={{ isMenuOpen, handleIsMenuToggle }}>
      {children}
    </IsMenuOpenContext.Provider>
  )
}

export const useIsMenuOpen = () => useContext(IsMenuOpenContext)
