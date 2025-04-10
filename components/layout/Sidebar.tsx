"use client"

import React, {useEffect, useState} from "react"
import {useStamps} from "@/providers/StampsProvider"
import type {Stamp} from "@/types/stamp.types"

const Sidebar = () => {
  const {stamps} = useStamps()
  const [totalHours, setTotalHours] = useState<number>(0)

  useEffect(() => {
    const calculateTotalHours = (stamps: Stamp[]) => {
      let totalMinutes = 0
      let currentClockOut: Date | null = null

      stamps.forEach((stamp) => {
        const stampedAt = new Date(stamp.stamped_at)
        
        if (stamp.type === 'clock_out') {
          currentClockOut = stampedAt
        } else if (stamp.type === 'clock_in' && currentClockOut) {
          const diffMinutes = (currentClockOut.getTime() - stampedAt.getTime()) / (1000 * 60)
          totalMinutes += diffMinutes
          currentClockOut = null
        }
      })

      const hours = Math.floor(totalMinutes / 60)
      const minutes = Math.round(totalMinutes % 60)
      setTotalHours(hours + minutes / 60)
    }

    calculateTotalHours(stamps)
  }, [stamps])

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-200">
      <h2 className="text-lg font-semibold mb-4 text-slate-800">今月の統計</h2>
      <div className="space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <p className="text-sm text-slate-600 mb-1">総勤務時間</p>
          <p className="text-2xl font-semibold text-teal-600">
            {Math.floor(totalHours)}時間 {Math.round((totalHours % 1) * 60)}分
            </p>
        </div>
        <div className="border-b border-slate-100 pb-3">
          <p className="text-sm text-slate-600 mb-1">残業時間</p>
          <p className="text-2xl font-semibold text-teal-600">10時間 15分</p>
        </div>
        <div>
          <p className="text-sm text-slate-600 mb-1">休暇取得日数</p>
          <p className="text-2xl font-semibold text-teal-600">2日</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
