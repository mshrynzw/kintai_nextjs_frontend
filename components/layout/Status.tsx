import React from "react"
import {Clock, Timer} from "lucide-react"

const Status = () => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-3 text-slate-800">本日の勤務状況</h2>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center">
          <Timer className="w-5 h-5 text-teal-500 mr-2" />
          <span className="text-sm text-slate-600">勤務時間: 8時間 00分</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-teal-500 mr-2" />
          <span className="text-sm text-slate-600">出勤: 09:00</span>
        </div>
      </div>
    </>
  )
}

export default Status;
