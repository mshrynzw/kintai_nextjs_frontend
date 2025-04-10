"use client"

import React, {createContext, useContext, useEffect, useState} from "react"
import type {Stamp} from "@/types/stamp.types"

interface StampsContextType {
  stamps: Stamp[]
  isLoading: boolean
  fetchStamps: () => Promise<void>
}

const StampsContext = createContext<StampsContextType | undefined>(undefined)

export const useStamps = () => {
  const context = useContext(StampsContext)
  if (context === undefined) {
    throw new Error("useStamps must be used within a StampsProvider")
  }
  return context
}

interface StampsProviderProps {
  children: React.ReactNode
}

const StampsProvider = ({children}: StampsProviderProps) => {
  const [stamps, setStamps] = useState<Stamp[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchStamps = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`http://localhost:8000/stamps?latest=false`)
      if (!response.ok) {
        throw new Error("打刻記録の取得に失敗しました")
      }
      const data = await response.json()
      setStamps(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("打刻記録の取得エラー:", error)
      setStamps([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchStamps()
  }, [])

  return (
    <StampsContext.Provider value={{stamps, isLoading, fetchStamps}}>
      {children}
    </StampsContext.Provider>
  )
}

export default StampsProvider 