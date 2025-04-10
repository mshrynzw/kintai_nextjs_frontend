"use client"

import React, {useEffect, useState} from "react"
import {
  StopCircle,
  LogIn,
  LogOut
} from "lucide-react"
import type {Stamp} from "@/types/stamp.types"
import Loading from "@/components/common/Loading"
import {useStamps} from "@/providers/StampsProvider"

const Stamp = () => {
  const [lastStamp, setLastStamp] = useState<Stamp | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const {fetchStamps} = useStamps()

  // 本日の打刻記録を取得
  useEffect(() => {
    const fetchTodayStamps = async () => {
      try {
        const response = await fetch(`http://localhost:8000/stamps?latest=true`)
        if (!response.ok) {
          throw new Error("打刻記録の取得に失敗しました")
        }
        const stamp: Stamp | null = await response.json()
        setLastStamp(stamp)
      } catch (error) {
        console.error("打刻記録の取得エラー:", error)
      }
    }

    fetchTodayStamps()
  }, [])

  const handleStamp = async (type: string) => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:8000/stamps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          type,
          stamped_at: new Date().toISOString()
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "打刻に失敗しました")
      }

      const data = await response.json()
      console.log("打刻成功:", data)
      setLastStamp(data)
      await fetchStamps()
    } catch (error) {
      console.error("打刻エラー:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loading color="text-white"/>}
      <div className="flex gap-2">
        {lastStamp?.type === "clock_in" ? (
          <>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors border-2 border-amber-100 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handleStamp("break_in")}
              disabled={isLoading}
            >
              <LogOut className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform"/>
              <span className="text-amber-700 font-medium">休始</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border-2 border-slate-100 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handleStamp("clock_out")}
              disabled={isLoading}
            >
              <StopCircle className="w-6 h-6 text-slate-600 group-hover:scale-110 transition-transform"/>
              <span className="text-slate-700 font-medium">退勤</span>
            </button>
          </>
        ) : lastStamp?.type === "break_in" ? (
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors border-2 border-amber-100 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handleStamp("break_out")}
            disabled={isLoading}
          >
            <LogIn className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform"/>
            <span className="text-amber-700 font-medium">休終</span>
          </button>
        ) : lastStamp?.type === "break_out" ? (
          <>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors border-2 border-amber-100 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handleStamp("break_in")}
              disabled={isLoading}
            >
              <LogOut className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform"/>
              <span className="text-amber-700 font-medium">休始</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border-2 border-slate-100 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => handleStamp("clock_out")}
              disabled={isLoading}
            >
              <StopCircle className="w-6 h-6 text-slate-600 group-hover:scale-110 transition-transform"/>
              <span className="text-slate-700 font-medium">退勤</span>
            </button>
          </>
        ) : (
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors border-2 border-teal-100 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handleStamp("clock_in")}
            disabled={isLoading}
          >
            <LogIn className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform"/>
            <span className="text-teal-700 font-medium">出勤</span>
          </button>
        )}
      </div>
    </>
  )
}

export default Stamp 