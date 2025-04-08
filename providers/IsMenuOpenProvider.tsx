import {useState} from "react"
import {IsMenuOpenContext} from "@/context/IsMenuOpenContext"

export const IsMenuOpenProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<IsMenuOpenContext>(false)

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(prev => (!prev))
  }

  return (
    <IsMenuOpenContext.Provider value={{ isMenuOpen, toggleIsMenuOpen }}>
      {children}
    </IsMenuOpenContext.Provider>
  )
}