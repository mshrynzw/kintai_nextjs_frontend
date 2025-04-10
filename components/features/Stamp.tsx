"use client"

import React, {useEffect, useState} from "react"
import {
  PlayCircle,
  PauseCircle,
  StopCircle,
  LogIn,
  LogOut
} from "lucide-react"
import type {Stamp} from "@/types/stamp.types"

const Stamp = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [lastStamp, setLastStamp] = useState<Stamp | null>(null)

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 本日の打刻記録を取得
  useEffect(() => {
    const fetchTodayStamps = async () => {
      try {
        const response = await fetch(`http://localhost:8000/stamps`)
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
    } catch (error) {
      console.error("打刻エラー:", error)
    }
  }

  return (
    <>
      <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-teal-50 to-slate-50">
        <h2 className="text-lg font-semibold text-slate-800">打刻</h2>
      </div>
      <div className="p-6 flex flex-col items-center">
        <div className="text-4xl font-bold text-slate-800 mb-4 font-mono">
          {currentTime.toLocaleTimeString("ja-JP")}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
          {lastStamp?.type === "clock_in" ? (
            <>
              <button
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors border-2 border-amber-100 group cursor-pointer"
                onClick={() => handleStamp("break_in")}
              >
                <LogOut className="w-10 h-10 text-amber-600 mb-2 group-hover:scale-110 transition-transform"/>
                <span className="text-amber-700 font-medium">休始</span>
              </button>
              <button
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border-2 border-slate-100 group cursor-pointer"
                onClick={() => handleStamp("clock_out")}
              >
                <StopCircle className="w-10 h-10 text-slate-600 mb-2 group-hover:scale-110 transition-transform"/>
                <span className="text-slate-700 font-medium">退勤</span>
              </button>
            </>
          ) : lastStamp?.type === "break_in" ? (
            <button
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors border-2 border-amber-100 group cursor-pointer"
              onClick={() => handleStamp("break_out")}
            >
              <LogIn className="w-10 h-10 text-amber-600 mb-2 group-hover:scale-110 transition-transform"/>
              <span className="text-amber-700 font-medium">休終</span>
            </button>
          ) : lastStamp?.type === "break_out" ? (
            <>
              <button
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors border-2 border-amber-100 group cursor-pointer"
                onClick={() => handleStamp("break_in")}
              >
                <LogOut className="w-10 h-10 text-amber-600 mb-2 group-hover:scale-110 transition-transform"/>
                <span className="text-amber-700 font-medium">休始</span>
              </button>
              <button
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border-2 border-slate-100 group cursor-pointer"
                onClick={() => handleStamp("clock_out")}
              >
                <StopCircle className="w-10 h-10 text-slate-600 mb-2 group-hover:scale-110 transition-transform"/>
                <span className="text-slate-700 font-medium">退勤</span>
              </button>
            </>
          ) : (
            <button
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors border-2 border-teal-100 group cursor-pointer"
              onClick={() => handleStamp("clock_in")}
            >
              <PlayCircle className="w-10 h-10 text-teal-600 mb-2 group-hover:scale-110 transition-transform"/>
              <span className="text-teal-700 font-medium">出勤</span>
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Stamp
