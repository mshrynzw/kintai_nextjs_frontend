'use client'
import { createContext, useContext, useState } from 'react'

type FeatureContext = string

interface FeatureContextType {
  feature: FeatureContext
  handleFeature: (newState: string) => void
}

const FeatureContext = createContext<FeatureContextType>({
  feature: "home",
  handleFeature: () => {}
})

export const FeatureProvider = ({ children }: { children: React.ReactNode }) => {
  const [feature, setFeature] = useState<FeatureContext>("home")

  const handleFeature = (newState: string) => {
    setFeature(newState)
  }

  return (
    <FeatureContext.Provider value={{ feature, handleFeature }}>
      {children}
    </FeatureContext.Provider>
  )
}

export const useFeature = () => useContext(FeatureContext)
