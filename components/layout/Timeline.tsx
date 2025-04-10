import React from "react"
import {Clock, ChevronRight} from "lucide-react"
import type {Stamp} from "@/types/stamp.types"
import {useStamps} from "@/components/common/StampsProvider"
import Loading from "@/components/common/Loading"

const Timeline = () => {
  const {stamps, isLoading} = useStamps()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ja-JP", {
      month: "numeric",
      day: "numeric",
      weekday: "short"
    })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  const getMessage = (type: string) => {
    switch (type) {
      case "clock_in":
        return "出勤"
      case "break_in":
        return "休憩開始"
      case "break_out":
        return "休憩終了"
      case "clock_out":
        return "退勤"
      default:
        return ""
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center p-4">
        <Loading color="text-teal-500"/>
      </div>
    )
  }

  return (
    <>
      {stamps.map((stamp) => (
        <div key={stamp.id} className="p-4 hover:bg-slate-50 transition-colors">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Clock className="w-5 h-5 text-teal-500"/>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-slate-900">{getMessage(stamp.type)}</p>
              <p className="text-sm text-slate-500">{formatDate(stamp.stamped_at)} {formatTime(stamp.stamped_at)}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400"/>
          </div>
        </div>
      ))}
    </>
  )
}

export default Timeline